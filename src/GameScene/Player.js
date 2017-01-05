/**
 * Created by atom on 16/8/27.
 */
var Player = function(x,y){
    SpriteControllerModule.call(this);

    this.m_model = new PlayerModel(x,y);

    this.m_sprite = new cc.Sprite();
    this.m_sprite.setAnchorPoint(cc.p(0.5,0.42));
    this.m_sprite.setPosition(cc.p(x,y));
    this.m_sprite.setScale(GameSceneConstant.PLAYER_SPRITE_SCALE);

    this.m_spriteFrameIndex = 1;
    this.m_spriteFrameCounter = 0;

    if(GlobalConstant.SHOW_PHYSICS_BODY_COLLIDER == true){
        var physicsBodyLayerColor = new cc.LayerColor(cc.color(0,255,0,55),
            GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/GameSceneConstant.PLAYER_SPRITE_SCALE,
            GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/GameSceneConstant.PLAYER_SPRITE_SCALE);
        //physicsBodyLayerColor.setAnchorPoint(cc.p(0.5,0.5));
        physicsBodyLayerColor.setPosition(cc.p(
            this.m_sprite.getAnchorPoint().x*200-GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2/GameSceneConstant.PLAYER_SPRITE_SCALE,
            this.m_sprite.getAnchorPoint().y*260-GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2/GameSceneConstant.PLAYER_SPRITE_SCALE));
        
        this.m_sprite.addChild(physicsBodyLayerColor);
    }
    
    
    this.m_standPlatform = null;

    this.setState=function(state){
        switch (state){
            case PlayerState.onLand:
                this.m_model.m_state = PlayerState.onLand;
                this.m_spriteFrameIndex = 1;
                this.m_spriteFrameCounter = 0;
                this.m_sprite.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame(GameSceneConstant.PLAYER_FLYING_SPRITE_FRAME_NAME_PREFIX+this.m_spriteFrameIndex+".png"));

                break;
            case PlayerState.flying:
                this.m_model.m_state = PlayerState.flying;

                break;
        }
    }
    
    this.update = function(dt,gameScene){

        switch (this.m_model.m_state){
            case PlayerState.onLand:

                if(this.m_model.m_rotateSpeed > 0){
                    this.updateRotateSpriteFrameIndex(dt);
                    this.updateRotateSpeedDecline(dt);
                }
                if(this.m_model.m_vel.x > 0){
                    this.m_model.m_vel.x = Math.max(0,this.m_model.m_vel.x-GameSceneConstant.PLAYER_ON_LAND_HORIZONTAL_DECLINE_ACC);
                }else if(this.m_model.m_vel.x < 0){
                    this.m_model.m_vel.x = Math.min(0,this.m_model.m_vel.x+GameSceneConstant.PLAYER_ON_LAND_HORIZONTAL_DECLINE_ACC);
                }

                //this.m_model.m_vel.y -= GameSceneConstant.GRAVITY_ACC;
                if(this.m_model.m_vel.x != 0 ){
                    gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,this.m_model.m_vel.x,0);
                }

                var checkMaxDropDistY = Math.abs(
                    gameScene.m_model.m_physicsManager.checkMoveCollision(this.m_model.m_physicsBody,0,-GameSceneConstant.GRAVITY_ACC).dy
                );
                if(checkMaxDropDistY>GlobalConstant.MIN_OFF_Y){
                    if(this.m_standPlatform != null){
                        var platformLoadIndexOfPlayer = this.m_standPlatform.m_loads.indexOf(this);
                        this.m_standPlatform.m_loads.splice(platformLoadIndexOfPlayer,1);
                        this.m_standPlatform = null;
                    }
                    this.setState(PlayerState.flying);
                }


                // var replacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,this.m_model.m_vel.x,this.m_model.m_vel.y);
                // if(Math.abs(replacement.dy)>GlobalConstant.MIN_OFF_Y){
                //     if(this.m_standPlatform != null){
                //         var platformLoadIndexOfPlayer = this.m_standPlatform.m_loads.indexOf(this);
                //         this.m_standPlatform.m_loads.splice(platformLoadIndexOfPlayer,1);
                //         this.m_standPlatform = null;
                //     }
                //     this.setState(PlayerState.flying);
                // }


                break;

            case PlayerState.flying:

                if(this.m_model.m_rotateSpeed > 0){
                    this.updateRotateSpriteFrameIndex(dt);
                    this.updateRotateSpeedDecline(dt);
                }

                this.m_model.m_vel.y += this.m_model.m_rotateSpeed*GameSceneConstant.PLAYER_ROTATE_LIFT_ACC_TO_SPEED_RATIO;
                this.m_model.m_vel.y -= GameSceneConstant.GRAVITY_ACC;
                
                gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,this.m_model.m_vel.x,this.m_model.m_vel.y);

                break;
        }

        // if(this.m_standPlatform != null){
        //     var platFormBody = this.m_standPlatform.m_model.m_physicsBody;
        //
        //     if(platFormBody.m_pos.y+platFormBody.m_colliderLocalRect.y+platFormBody.m_colliderLocalRect.height-
        //         (this.m_model.m_physicsBody.m_pos.y+this.m_model.m_physicsBody.m_colliderLocalRect.height)
        // }
        
        SpriteControllerModule.prototype.update.call(this,dt);
        this.m_sprite.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame(GameSceneConstant.PLAYER_FLYING_SPRITE_FRAME_NAME_PREFIX+this.m_spriteFrameIndex+".png"));
    }

    this.updateRotateSpriteFrameIndex = function(dt){
        this.m_spriteFrameCounter = Math.max(0,this.m_spriteFrameCounter-dt);
        if(this.m_spriteFrameCounter<=0){
            this.m_spriteFrameCounter = 1/this.m_model.m_rotateSpeed;
            this.m_spriteFrameIndex = 1+(this.m_spriteFrameIndex)%5;
        }
    }

    this.updateRotateSpeedDecline = function(dt){
        this.m_model.m_rotateSpeedDeclineCounter = Math.max(0,this.m_model.m_rotateSpeedDeclineCounter-dt);
        if(this.m_model.m_rotateSpeedDeclineCounter<=0){
            this.m_model.m_rotateSpeed = Math.max(0,this.m_model.m_rotateSpeed-1);
            if(this.m_model.m_rotateSpeed > 0){
                this.m_model.m_rotateSpeedDeclineCounter = 1/this.m_model.m_rotateSpeed;
            }else{
                this.m_model.m_rotateSpeedDeclineCounter = 0;
                this.m_spriteFrameIndex = 1;
            }
        }
    }
}
