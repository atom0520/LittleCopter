/**
 * Created by atom on 16/8/28.
 */
var Bird = function(x,y,vx,vy,moveRange){
    SpriteControllerModule.call(this);
    this.m_model = new BirdModel(x,y,vx,vy,moveRange);

    this.m_sprite  = new cc.Sprite();
    var birdFlyingAnimation = cc.animationCache.getAnimation(GameSceneConstant.BIRD_FLYING_ANIMATION_NAME);

    this.m_sprite.runAction(cc.repeatForever(cc.animate(birdFlyingAnimation)));

    this.m_sprite.setScaleX(GameSceneConstant.BIRD_SPRITE_SCALE_X);
    this.m_sprite.setScaleY(GameSceneConstant.BIRD_SPRITE_SCALE_Y);
    this.m_sprite.setAnchorPoint(cc.p(0.5,0.4));

    this.m_sprite.setPosition(cc.p(this.m_model.m_pos.x,this.m_model.m_pos.y));

    if(GlobalConstant.SHOW_PHYSICS_BODY_COLLIDER == true){
        var physicsBodyLayerColor = new cc.LayerColor(cc.color(0,64,222,55),
            GameSceneConstant.BIRD_PHYSICS_BODY_RECT_WIDTH/GameSceneConstant.BIRD_SPRITE_SCALE_X,
            GameSceneConstant.BIRD_PHYSICS_BODY_RECT_HEIGHT/GameSceneConstant.BIRD_SPRITE_SCALE_Y);


        physicsBodyLayerColor.setPosition(cc.p(
            this.m_sprite.getAnchorPoint().x*256
            -GameSceneConstant.BIRD_PHYSICS_BODY_RECT_WIDTH/2.0/GameSceneConstant.BIRD_SPRITE_SCALE_X,
            this.m_sprite.getAnchorPoint().y*150
            -GameSceneConstant.BIRD_PHYSICS_BODY_RECT_HEIGHT/2.0/GameSceneConstant.BIRD_SPRITE_SCALE_Y));

        this.m_sprite.addChild(physicsBodyLayerColor,1);
    }


    this.update = function (dt,gameScene) {

        //var displacement;
        var dx=this.m_model.m_vel.x;
        var dy=this.m_model.m_vel.y;
        // if(this.m_model.m_pos.y+this.m_model.m_vel.y<this.m_model.m_moveRange.minY){
        //     dy = -this.m_model.m_pos.y+this.m_model.m_moveRange.minY;
        //     // displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,
        //     //     0,-this.m_model.m_pos.y+this.m_model.m_moveRange.minY);
        //
        //     this.m_model.m_vel.y = - this.m_model.m_vel.y;
        // }else if(this.m_model.m_pos.y+this.m_model.m_vel.y>this.m_model.m_moveRange.maxY){
        //     // displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,
        //     //     0,this.m_model.m_moveRange.maxY-this.m_model.m_pos.y);
        //     dy = this.m_model.m_moveRange.maxY-this.m_model.m_pos.y;
        //
        //     this.m_model.m_vel.y = - this.m_model.m_vel.y;
        // }
        //
        // if(this.m_model.m_pos.x+this.m_model.m_vel.x+GameSceneConstant.BIRD_PHYSICS_BODY_RECT_WIDTH/2.0>gameScene.m_mapWidth){
        //     dx = gameScene.m_mapWidth-GameSceneConstant.BIRD_PHYSICS_BODY_RECT_WIDTH/2.0-this.m_model.m_pos.x;
        //     // displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,
        //     //     0,-this.m_model.m_pos.y+this.m_model.m_moveRange.minY);
        //
        //     this.m_model.m_vel.x = - this.m_model.m_vel.x;
        // }else if(this.m_model.m_pos.x+this.m_model.m_vel.x-GameSceneConstant.BIRD_PHYSICS_BODY_RECT_WIDTH/2.0<0){
        //     // displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,
        //     //     0,this.m_model.m_moveRange.maxY-this.m_model.m_pos.y);
        //     dx = GameSceneConstant.BIRD_PHYSICS_BODY_RECT_WIDTH/2.0-this.m_model.m_pos.x;
        //
        //     this.m_model.m_vel.x = - this.m_model.m_vel.x;
        // }
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

        var displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,dx,dy,true);

        this.m_model.m_displacementCounter.x += displacement.dx;
        this.m_model.m_displacementCounter.y += displacement.dy;

        if(this.m_model.m_pos.x<0){
            this.m_model.m_pos.x += gameScene.m_mapWidth;
        }else if(this.m_model.m_pos.x>gameScene.m_mapWidth){
            this.m_model.m_pos.x -= gameScene.m_mapWidth;
        }
        
        if(dx>0){
            this.m_sprite.setFlippedX(true);
        }else if(dx<0){
            this.m_sprite.setFlippedX(false);
        }

        //gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,dx,dy,true);
        SpriteControllerModule.prototype.update.call(this,dt);
    }
};