/**
 * Created by atom on 16/8/30.
 */
var PaperPlane = function(x,y,vx,vy,moveRange){
    SpriteControllerModule.call(this);
    this.m_model = new PaperPlaneModel(x,y,vx,vy,moveRange);

    this.m_sprite  = new cc.Sprite(res.paperPlane_png);
    // var birdFlyingAnimation = cc.animationCache.getAnimation(GameSceneConstant.BIRD_FLYING_ANIMATION_NAME);
    //
    // this.m_sprite.runAction(cc.repeatForever(cc.animate(birdFlyingAnimation)));

    this.m_sprite.setScaleX(GameSceneConstant.PAPER_PLANE_SPRITE_SCALE_X);
    this.m_sprite.setScaleY(GameSceneConstant.PAPER_PLANE_SPRITE_SCALE_Y);
    this.m_sprite.setAnchorPoint(cc.p(0.5,0.72));

    this.m_sprite.setPosition(cc.p(this.m_model.m_pos.x,this.m_model.m_pos.y));

    if(GlobalConstant.SHOW_PHYSICS_BODY_COLLIDER == true){
        var physicsBodyLayerColor = new cc.LayerColor(cc.color(0,64,222,55),
            GameSceneConstant.PAPER_PLANE_PHYSICS_BODY_RECT_WIDTH/GameSceneConstant.PAPER_PLANE_SPRITE_SCALE_X,
            GameSceneConstant.PAPER_PLANE_PHYSICS_BODY_RECT_HEIGHT/GameSceneConstant.PAPER_PLANE_SPRITE_SCALE_Y);


        physicsBodyLayerColor.setPosition(cc.p(
            this.m_sprite.getAnchorPointInPoints().x
            -GameSceneConstant.PAPER_PLANE_PHYSICS_BODY_RECT_WIDTH/2.0/GameSceneConstant.PAPER_PLANE_SPRITE_SCALE_X,
            this.m_sprite.getAnchorPointInPoints().y
            -GameSceneConstant.PAPER_PLANE_PHYSICS_BODY_RECT_HEIGHT/2.0/GameSceneConstant.PAPER_PLANE_SPRITE_SCALE_Y));

        this.m_sprite.addChild(physicsBodyLayerColor,1);
    }

    this.m_loads = [];

    this.update = function (dt,gameScene) {
        
        if(this.m_loads.length != 0){
            this.m_model.m_vel.y = - 128.0/GlobalConstant.FPS;
        }else{
            if(this.m_model.m_displacementCounter.y<0){
                this.m_model.m_vel.y = Math.min(-this.m_model.m_displacementCounter.y,128.0/GlobalConstant.FPS);
            }else if(this.m_model.m_displacementCounter.y>0){
                this.m_model.m_vel.y = Math.max(-this.m_model.m_displacementCounter.y,-128.0/GlobalConstant.FPS);
            }else{
                this.m_model.m_vel.y = 0;
            }

        }
        //var displacement;
        var dx=this.m_model.m_vel.x;
        var dy=this.m_model.m_vel.y;

        if(this.m_model.m_displacementCounter.x+this.m_model.m_vel.x<this.m_model.m_moveRange.minX){
            dx = this.m_model.m_moveRange.minX-this.m_model.m_displacementCounter.x;

            this.m_model.m_vel.x = - this.m_model.m_vel.x;
        }else if(this.m_model.m_displacementCounter.x+this.m_model.m_vel.x>this.m_model.m_moveRange.maxX){
            dx = this.m_model.m_moveRange.maxX-this.m_model.m_displacementCounter.x;

            this.m_model.m_vel.x = - this.m_model.m_vel.x;
        }



        // if(this.m_model.m_displacementCounter.y+this.m_model.m_vel.y<this.m_model.m_moveRange.minY){
        //     dy = this.m_model.m_moveRange.minY-this.m_model.m_displacementCounter.y;
        //
        //     this.m_model.m_vel.y = - this.m_model.m_vel.y;
        // }else if(this.m_model.m_displacementCounter.y+this.m_model.m_vel.y>this.m_model.m_moveRange.maxY){
        //     dy = this.m_model.m_moveRange.maxY-this.m_model.m_displacementCounter.y;
        //
        //     this.m_model.m_vel.y = - this.m_model.m_vel.y;
        // }
        
        var displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,dx,dy);

        this.m_model.m_displacementCounter.x += displacement.dx;
        this.m_model.m_displacementCounter.y += displacement.dy;

        if(this.m_model.m_pos.x<0){
            this.m_model.m_pos.x += gameScene.m_mapWidth;
        }else if(this.m_model.m_pos.x>gameScene.m_mapWidth){
            this.m_model.m_pos.x -= gameScene.m_mapWidth;
        }

        if(dx>0){
            this.m_sprite.setFlippedX(false);
        }else if(dx<0){
            this.m_sprite.setFlippedX(true);
        }
        
        for(var i=0;i<this.m_loads.length;i++){
            if(gameScene.m_model.m_physicsManager.isValidMove(gameScene.m_model.m_physicsManager.moveBody(this.m_loads[i].m_model.m_physicsBody,displacement.dx,displacement.dy))==false){
                // this.m_loads[i].m_standPlatform = null;
                // this.m_loads.splice(i,1);
            }
        }
        //gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,dx,dy,true);
        SpriteControllerModule.prototype.update.call(this,dt);
    }
};