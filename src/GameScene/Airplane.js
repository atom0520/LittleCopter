/**
 * Created by atom on 16/8/28.
 */
var Airplane = function(x,y){
    SpriteControllerModule.call(this);
    this.m_model = new AirplaneModel(x,y);

    this.m_sprite  = new cc.Sprite(res.airplane_png);
    this.m_sprite.setAnchorPoint(cc.p(0.45,0.5));
    this.m_sprite.setScaleX(GameSceneConstant.AIRPLANE_SPRITE_SCALE_X);
    this.m_sprite.setScaleY(GameSceneConstant.AIRPLANE_SPRITE_SCALE_Y);
    this.m_sprite.setPosition(cc.p(this.m_model.m_pos.x,this.m_model.m_pos.y));

    if(GlobalConstant.SHOW_PHYSICS_BODY_COLLIDER == true) {
        var physicsBodyLayerColor = new cc.LayerColor(cc.color(0, 64, 222, 55),
            GameSceneConstant.AIRPLANE_PHYSICS_BODY_RECT_WIDTH / GameSceneConstant.AIRPLANE_SPRITE_SCALE_X,
            GameSceneConstant.AIRPLANE_PHYSICS_BODY_RECT_HEIGHT / GameSceneConstant.AIRPLANE_SPRITE_SCALE_Y);

        physicsBodyLayerColor.setPosition(cc.p(
            this.m_sprite.getAnchorPointInPoints().x - GameSceneConstant.AIRPLANE_PHYSICS_BODY_RECT_WIDTH / 2.0 / GameSceneConstant.AIRPLANE_SPRITE_SCALE_X,
            this.m_sprite.getAnchorPointInPoints().y - GameSceneConstant.AIRPLANE_PHYSICS_BODY_RECT_HEIGHT / 2.0 / GameSceneConstant.AIRPLANE_SPRITE_SCALE_Y))

        this.m_sprite.addChild(physicsBodyLayerColor, 1);
    }

    this.update = function(dt,gameScene){
        SpriteControllerModule.prototype.update.call(this,dt);
    }
}