/**
 * Created by atom on 16/8/28.
 */
var Cloud = function(x,y){
    SpriteControllerModule.call(this);
    this.m_model = new CloudModel(x,y);

    this.m_sprite  = new cc.Sprite(res.cloud_png);
    this.m_sprite.setAnchorPoint(cc.p(0.5,0.2));
    this.m_sprite.setScaleX(GameSceneConstant.CLOUD_SPRITE_SCALE_X);
    this.m_sprite.setScaleY(GameSceneConstant.CLOUD_SPRITE_SCALE_Y);
    this.m_sprite.setPosition(cc.p(this.m_model.m_pos.x,this.m_model.m_pos.y));

    if(GlobalConstant.SHOW_PHYSICS_BODY_COLLIDER == true){
        var physicsBodyLayerColor = new cc.LayerColor(cc.color(0,64,222,55),
            GameSceneConstant.CLOUD_PHYSICS_BODY_RECT_WIDTH/GameSceneConstant.CLOUD_SPRITE_SCALE_X,
            GameSceneConstant.CLOUD_PHYSICS_BODY_RECT_HEIGHT/GameSceneConstant.CLOUD_SPRITE_SCALE_Y);

        physicsBodyLayerColor.setPosition(cc.p(
            this.m_sprite.getAnchorPointInPoints().x-GameSceneConstant.CLOUD_PHYSICS_BODY_RECT_WIDTH/2.0/GameSceneConstant.CLOUD_SPRITE_SCALE_X,
            this.m_sprite.getAnchorPointInPoints().y-GameSceneConstant.CLOUD_PHYSICS_BODY_RECT_HEIGHT/2.0/GameSceneConstant.CLOUD_SPRITE_SCALE_Y))

        this.m_sprite.addChild(physicsBodyLayerColor);
    }

    this.update = function(dt,gameScene){
        SpriteControllerModule.prototype.update.call(this,dt);
    }
}