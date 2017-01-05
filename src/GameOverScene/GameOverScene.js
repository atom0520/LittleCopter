/**
 * Created by atom on 16/8/28.
 */

GameOverSceneConstant = {};
GameOverSceneConstant.TEST_LABEL_NUM = 1;
GameOverSceneConstant.GAME_OVER_LABEL_SCENE_VIEW_Z_ORDER = 1;
GameOverSceneConstant.TEST_LABEL_SCENE_VIEW_Z_ORDER = 2;
GameOverSceneConstant.TRY_AGAIN_LABEL_SCENE_VIEW_Z_ORDER = 3;

var GameOverScene = cc.Scene.extend({
    ctor:function(gameOverType){
        this._super();
        SceneControllerModule.call(this);

        this.m_model = new GameOverSceneModel();
        this.m_view = new GameOverSceneView();
        this.addChild(this.m_view);

        var gameOverLabel = new cc.LabelTTF("","arial",48);
        gameOverLabel.setAnchorPoint(cc.p(0.5,0.5));
        gameOverLabel.setPosition(cc.p(GlobalConstant.WINDOW_WIDTH/2.0,GlobalConstant.WINDOW_HEIGHT/2.0));

        switch (gameOverType){
            case GameOverType.drownToDeath:
                var rand = getIntRandBetween(1,2);
                if(rand == 1){
                    gameOverLabel.setString("You are drown to death!\nOh my little copter!> <");
                }else{
                    gameOverLabel.setString("Come on, little copter!\nNever say never! o0-0o");
                }

                break;
            case GameOverType.win:
                gameOverLabel.setString("Good Job little copter!");
                break;
        }

        this.m_view.addChild(gameOverLabel,GameOverSceneConstant.GAME_OVER_LABEL_SCENE_VIEW_Z_ORDER);
        this.m_view.m_gameOverLabel = gameOverLabel;

        var tryAgainLabel = new cc.LabelTTF("Take Off Again!","Marker Felt",28);
        tryAgainLabel.setFontFillColor(cc.color(255,255,0,255));
        tryAgainLabel.setAnchorPoint(cc.p(1.0,0.0));
        tryAgainLabel.setPosition(cc.p(GlobalConstant.WINDOW_WIDTH-16,16));
        this.m_view.addChild(tryAgainLabel,GameOverSceneConstant.TRY_AGAIN_LABEL_SCENE_VIEW_Z_ORDER);
        this.m_view.m_tryAgainLabel = tryAgainLabel;


    },
    onEnterTransitionDidFinish:function(){
        this._super();
        cc.audioEngine.playMusic(res.loseEffect_mp3,false);
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan: function(touch,event){

                var tryAgainLabelBoudingBox = this.m_view.m_tryAgainLabel.getBoundingBox();
                var touchPos = touch.getLocation();
                if(touchPos.x >= tryAgainLabelBoudingBox.x
                    && touchPos.x <= tryAgainLabelBoudingBox.x+tryAgainLabelBoudingBox.width
                    && touchPos.y >= tryAgainLabelBoudingBox.y
                    && touchPos.y <= tryAgainLabelBoudingBox.y+tryAgainLabelBoudingBox.height){

                    //cc.log("touch began! and touch in tryAgainLabelBoudingBox");
                    this.m_view.m_tryAgainLabel.runAction(cc.scaleTo(0.2,1.2));

                    return true;
                }else{
                    //cc.log("touch began! but not in tryAgainLabelBoudingBox");
                    return false;
                }
            }.bind(this),
            onTouchEnded:function(touch,event){
                this.m_view.m_tryAgainLabel.stopAllActions();
                this.m_view.m_tryAgainLabel.runAction(cc.scaleTo(0.2,1.0));
                this.runAction(cc.sequence(
                    cc.delayTime(0.2),
                    cc.callFunc(function(){
                        GameSceneConstant.refreshData();
                        var sceneTransition = new cc.TransitionFade(1.0,new GameScene());
                        cc.director.runScene(sceneTransition);
                        
                    }.bind(this))
                ));

            }.bind(this)
        },this.m_view.m_tryAgainLabel);
    },
    onExitTransitionDidStart:function(){
        this._super();
        cc.audioEngine.stopMusic();

        cc.eventManager.removeAllListeners();

    },

})