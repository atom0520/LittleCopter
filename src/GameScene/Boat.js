/**
 * Created by atom on 16/8/28.
 */
var Boat = function(x,y){
    //SpriteControllerModule.call(this);
    this.m_model = new BoatModel(x,y);

    this.m_backSprite  = new cc.Sprite(res.boatBack_png);
    this.m_backSprite.setScaleX(GameSceneConstant.BOAT_SPRITE_SCALE_X);
    this.m_backSprite.setScaleY(GameSceneConstant.BOAT_SPRITE_SCALE_Y);
    this.m_backSprite.setAnchorPoint(cc.p(0.5,0.25));
    this.m_backSprite.setPosition(cc.p(this.m_model.m_pos.x,this.m_model.m_pos.y));

    this.m_frontSprite  = new cc.Sprite(res.boatFront_png);
    this.m_frontSprite.setScaleX(GameSceneConstant.BOAT_SPRITE_SCALE_X);
    this.m_frontSprite.setScaleY(GameSceneConstant.BOAT_SPRITE_SCALE_Y);

    this.m_frontSprite.setAnchorPoint(cc.p(0.5,0.25));
    this.m_frontSprite.setPosition(cc.p(this.m_model.m_pos.x,this.m_model.m_pos.y));

    this.m_loads = [];

    if(GlobalConstant.SHOW_PHYSICS_BODY_COLLIDER == true){
        var physicsBodyLayerColor = new cc.LayerColor(cc.color(255,128,64,55),
            GameSceneConstant.BOAT_PHYSICS_BODY_RECT_WIDTH/GameSceneConstant.BOAT_SPRITE_SCALE_X,
            GameSceneConstant.BOAT_PHYSICS_BODY_RECT_HEIGHT/GameSceneConstant.BOAT_SPRITE_SCALE_Y);

        physicsBodyLayerColor.setPosition(cc.p(
            this.m_frontSprite.getAnchorPointInPoints().x-GameSceneConstant.BOAT_PHYSICS_BODY_RECT_WIDTH/2.0/GameSceneConstant.BOAT_SPRITE_SCALE_X,
            this.m_frontSprite.getAnchorPointInPoints().y-GameSceneConstant.BOAT_PHYSICS_BODY_RECT_HEIGHT/2.0/GameSceneConstant.BOAT_SPRITE_SCALE_Y));

        this.m_frontSprite.addChild(physicsBodyLayerColor,1);
    }

    
    this.update = function (dt,gameScene) {
        
        var displacement;
        if(this.m_model.m_pos.x+this.m_model.m_vel.x-GameSceneConstant.BOAT_PHYSICS_BODY_RECT_WIDTH/2.0<0){
            displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,
                GameSceneConstant.BOAT_PHYSICS_BODY_RECT_WIDTH/2.0- this.m_model.m_pos.x,0);
            this.m_model.m_vel.x = - this.m_model.m_vel.x;
        }else if(this.m_model.m_pos.x+this.m_model.m_vel.x+GameSceneConstant.BOAT_PHYSICS_BODY_RECT_WIDTH/2.0>gameScene.m_mapWidth){
            displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,
                gameScene.m_mapWidth-GameSceneConstant.BOAT_PHYSICS_BODY_RECT_WIDTH/2.0-this.m_model.m_pos.x,0);
            this.m_model.m_vel.x = - this.m_model.m_vel.x;
        }else{
            displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,this.m_model.m_vel.x,0);
        }
        //displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,this.m_model.m_vel.x,0);
        for(var i=0;i<this.m_loads.length;i++){
            gameScene.m_model.m_physicsManager.moveBody(this.m_loads[i].m_model.m_physicsBody,displacement.dx,displacement.dy);
        }
        
        this.m_model.update(dt);

        this.m_backSprite.setPosition(this.m_model.m_pos);
        this.m_frontSprite.setPosition(this.m_model.m_pos);


    }
};