/**
 * Created by atom on 16/8/28.
 */
var GameOverSceneView = cc.LayerColor.extend({
    m_gameOverLabel:null,
    m_testLabels:null,
    m_tryAgainLabel:null,
    
    ctor:function(){
        this._super();

        this.m_testLabels = [];
        for(var i=0;i<GameOverSceneConstant.TEST_LABEL_NUM;i++){
            this.m_testLabels[i] = new cc.LabelTTF("","arial",28);
            this.m_testLabels[i].setAnchorPoint(cc.p(0,1));
            this.m_testLabels[i].setPosition(cc.p(8,GlobalConstant.WINDOW_HEIGHT-8
                -i*(this.m_testLabels[i].getContentSize().height+8)));
            this.addChild(this.m_testLabels[i],GameOverSceneConstant.TEST_LABEL_SCENE_VIEW_Z_ORDER);
        }

    },
    update:function(dt){
        this._super(dt);
    }

})