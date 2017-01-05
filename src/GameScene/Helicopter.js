/**
 * Created by atom on 16/8/29.
 */
var Helicopter = function(x,y,vx,vy,moveRange){
    SpriteControllerModule.call(this);
    this.m_model = new HelicopterModel(x,y,vx,vy,moveRange);

    this.m_sprite  = new cc.Sprite();
    this.m_sprite.setAnchorPoint(cc.p(0.565,0.015));
    this.m_sprite.setScaleX(GameSceneConstant.HELICOPTER_SPRITE_SCALE_X);
    this.m_sprite.setScaleY(GameSceneConstant.HELICOPTER_SPRITE_SCALE_Y);
    this.m_sprite.setPosition(cc.p(this.m_model.m_pos.x,this.m_model.m_pos.y));

    var helicopterFlyingAnimation = cc.animationCache.getAnimation(GameSceneConstant.HELICOPTER_FLYING_ANIMATION_NAME);
    this.m_sprite.runAction(cc.repeatForever(cc.animate(helicopterFlyingAnimation)));
  
    if(GlobalConstant.SHOW_PHYSICS_BODY_COLLIDER == true) {
        var physicsBodyLayerColor = new cc.LayerColor(cc.color(0, 64, 222, 55),
            GameSceneConstant.HELICOPTER_PHYSICS_BODY_RECT_WIDTH / GameSceneConstant.HELICOPTER_SPRITE_SCALE_X,
            GameSceneConstant.HELICOPTER_PHYSICS_BODY_RECT_HEIGHT / GameSceneConstant.HELICOPTER_SPRITE_SCALE_Y);

        physicsBodyLayerColor.setPosition(cc.p(
            this.m_sprite.getAnchorPoint().x*543 - GameSceneConstant.HELICOPTER_PHYSICS_BODY_RECT_WIDTH / 2.0 / GameSceneConstant.HELICOPTER_SPRITE_SCALE_X,
            this.m_sprite.getAnchorPoint().y*260 - GameSceneConstant.HELICOPTER_PHYSICS_BODY_RECT_HEIGHT / 2.0 / GameSceneConstant.HELICOPTER_SPRITE_SCALE_Y))

        this.m_sprite.addChild(physicsBodyLayerColor, 1);

    }

    this.m_loads = [];
    this.update = function (dt,gameScene) {

        var dx=this.m_model.m_vel.x;
        var dy=this.m_model.m_vel.y;

        if(this.m_model.m_displacementCounter.x+this.m_model.m_vel.x<this.m_model.m_moveRange.minX){
            dx = this.m_model.m_moveRange.minX-this.m_model.m_displacementCounter.x;

            this.m_model.m_vel.x = - this.m_model.m_vel.x;
        }else if(this.m_model.m_displacementCounter.x+this.m_model.m_vel.x>this.m_model.m_moveRange.maxX){
            dx = this.m_model.m_moveRange.maxX-this.m_model.m_displacementCounter.x;

            this.m_model.m_vel.x = - this.m_model.m_vel.x;
        }

        if(this.m_model.m_displacementCounter.y+this.m_model.m_vel.y<this.m_model.m_moveRange.minY){
            dy = this.m_model.m_moveRange.minY-this.m_model.m_displacementCounter.y;

            this.m_model.m_vel.y = - this.m_model.m_vel.y;
        }else if(this.m_model.m_displacementCounter.y+this.m_model.m_vel.y>this.m_model.m_moveRange.maxY){
            dy = this.m_model.m_moveRange.maxY-this.m_model.m_displacementCounter.y;

            this.m_model.m_vel.y = - this.m_model.m_vel.y;
        }

        var displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,dx,dy);

        this.m_model.m_displacementCounter.x += displacement.dx;
        this.m_model.m_displacementCounter.y += displacement.dy;

        for(var i=0;i<this.m_loads.length;i++){
            gameScene.m_model.m_physicsManager.moveBody(this.m_loads[i].m_model.m_physicsBody,displacement.dx,displacement.dy);
        }

        SpriteControllerModule.prototype.update.call(this,dt);
    }
}