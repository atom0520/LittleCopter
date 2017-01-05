/**
 * Created by atom on 16/8/28.
 */
var HotAirBalloon = function(x,y,vx,vy,moveRange){
    SpriteControllerModule.call(this);
    this.m_model = new HotAirBalloonModel(x,y,vx,vy,moveRange);

    this.m_sprite  = new cc.Sprite(res.hotAirBalloon_png);
    this.m_sprite.setScaleX(GameSceneConstant.HOT_AIR_BALLOON_SPRITE_SCALE_X);
    this.m_sprite.setScaleY(GameSceneConstant.HOT_AIR_BALLOON_SPRITE_SCALE_Y);
    this.m_sprite.setAnchorPoint(cc.p(0.475,0.05));

    this.m_sprite.setPosition(cc.p(this.m_model.m_pos.x,this.m_model.m_pos.y));

    this.m_loads = [];

    if(GlobalConstant.SHOW_PHYSICS_BODY_COLLIDER == true){
        var physicsBodyLayerColor = new cc.LayerColor(cc.color(0,64,222,55),
            GameSceneConstant.HOT_AIR_BALLOON_PHYSICS_BODY_RECT_WIDTH/GameSceneConstant.HOT_AIR_BALLOON_SPRITE_SCALE_X,
            GameSceneConstant.HOT_AIR_BALLOON_PHYSICS_BODY_RECT_HEIGHT/GameSceneConstant.HOT_AIR_BALLOON_SPRITE_SCALE_Y);

        physicsBodyLayerColor.setPosition(cc.p(
            this.m_sprite.getAnchorPointInPoints().x-GameSceneConstant.HOT_AIR_BALLOON_PHYSICS_BODY_RECT_WIDTH/2.0/GameSceneConstant.HOT_AIR_BALLOON_SPRITE_SCALE_X,
            this.m_sprite.getAnchorPointInPoints().y-GameSceneConstant.HOT_AIR_BALLOON_PHYSICS_BODY_RECT_HEIGHT/2.0/GameSceneConstant.HOT_AIR_BALLOON_SPRITE_SCALE_Y));

        this.m_sprite.addChild(physicsBodyLayerColor,1);
    }


    this.update = function (dt,gameScene) {

        // var displacement;
        // if(this.m_model.m_pos.y+this.m_model.m_vel.y<this.m_model.m_moveRange.minY){
        //     displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,
        //         0,-this.m_model.m_pos.y+this.m_model.m_moveRange.minY);
        //     this.m_model.m_vel.y = - this.m_model.m_vel.y;
        // }else if(this.m_model.m_pos.y+this.m_model.m_vel.y>this.m_model.m_moveRange.maxY){
        //     displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,
        //         0,this.m_model.m_moveRange.maxY-this.m_model.m_pos.y);
        //     this.m_model.m_vel.y = - this.m_model.m_vel.y;
        // }else{
        //     displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,0,this.m_model.m_vel.y,true);
        // }
        // //displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,this.m_model.m_vel.x,0);

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
        var displacement;
        if(dy>0){
            displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,dx,dy,true);
        }else if(dy<0){
            displacement = gameScene.m_model.m_physicsManager.moveBody(this.m_model.m_physicsBody,dx,dy);
            for(var i=0;i<this.m_loads.length;i++){
                gameScene.m_model.m_physicsManager.moveBody(this.m_loads[i].m_model.m_physicsBody,displacement.dx,displacement.dy);
            }
        }


        this.m_model.m_displacementCounter.x += displacement.dx;
        this.m_model.m_displacementCounter.y += displacement.dy;
        

        
        SpriteControllerModule.prototype.update.call(this,dt);
    }
};