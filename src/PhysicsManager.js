/**
 * Created by atom on 16/8/27.
 */
var PhysicsManager = function(){
    this.m_physicsBodies = [];
    this.m_needCollideCallback = true;

    this.onCollidePre = null;
    this.onCollideBegin = null;
    this.onCollideEnd = null;
}

PhysicsManager.prototype.checkMoveCollision=function(body1,dx,dy,force){

    var body1DestColliderGlobalRect = {
        x:body1.m_pos.x+body1.m_colliderLocalRect.x+dx,
        y:body1.m_pos.y+body1.m_colliderLocalRect.y+dy,
        width:body1.m_colliderLocalRect.width,
        height:body1.m_colliderLocalRect.height};

    for(var i=0;i<this.m_physicsBodies.length;i++){
        var body2 = this.m_physicsBodies[i];

        if(body1 == body2){
            continue;
        }

        if(body1.m_collisionGroup != undefined && body2.m_collisionGroup != undefined
            && body1.m_collisionGroup == body2.m_collisionGroup){
            continue;
        }

        var body2ColliderGlobalRect = {x:body2.m_pos.x+body2.m_colliderLocalRect.x,
            y:body2.m_pos.y+body2.m_colliderLocalRect.y,width:body2.m_colliderLocalRect.width,
            height:body2.m_colliderLocalRect.height};
        var rectIntersection = Geometry.getRectIntersection(body1DestColliderGlobalRect,body2ColliderGlobalRect);

        if(rectIntersection.width>GlobalConstant.MIN_INTERSECTION_WIDTH
            && rectIntersection.height>GlobalConstant.MIN_INTERSECTION_HEIGHT){

            var holdbackRatio=0;
            if(dx == 0 && dy == 0){

            }else{
                if(dx!=0 && dy!=0){
                    holdbackRatio = Math.min(1,Math.min(
                        Math.abs(rectIntersection.width/dx),
                        Math.abs(rectIntersection.height/dy)));

                }else {
                    if(dx==0){
                        holdbackRatio = Math.min(1,
                            Math.abs(rectIntersection.height/dy));

                    }else if(dy==0) {
                        holdbackRatio = Math.min(1,
                            Math.abs(rectIntersection.width/dx));
                    }
                }

                if(force==undefined || force==false){

                    dx = dx*(1-holdbackRatio);
                    dy = dy*(1-holdbackRatio);

                }else{
                    holdbackRatio = holdbackRatio/2.0;

                    dx = dx*(1-holdbackRatio);
                    dy = dy*(1-holdbackRatio);
                }
                body1DestColliderGlobalRect = {
                    x:body1.m_pos.x+body1.m_colliderLocalRect.x+dx,
                    y:body1.m_pos.y+body1.m_colliderLocalRect.y+dy,
                    width:body1.m_colliderLocalRect.width,
                    height:body1.m_colliderLocalRect.height
                };
            }
        }

    }
    return {dx:dx,dy:dy};
}

PhysicsManager.prototype.moveBody=function(body1,dx,dy,force){
    if(dx == 0 && dy == 0){
        return {dx:0,dy:0};
    }

    var body1DestColliderGlobalRect = {
        x:body1.m_pos.x+body1.m_colliderLocalRect.x+dx,
        y:body1.m_pos.y+body1.m_colliderLocalRect.y+dy,
        width:body1.m_colliderLocalRect.width,
        height:body1.m_colliderLocalRect.height};

    //var collidedBodies = [];
    for(var i=0;i<this.m_physicsBodies.length;i++){
        var body2 = this.m_physicsBodies[i];



        if(body1 == body2){
            continue;
        }

        if(body1.m_collisionGroup != undefined && body2.m_collisionGroup != undefined
            && body1.m_collisionGroup == body2.m_collisionGroup){
            continue;
        }


        var body2ColliderGlobalRect = {x:body2.m_pos.x+body2.m_colliderLocalRect.x,
            y:body2.m_pos.y+body2.m_colliderLocalRect.y,width:body2.m_colliderLocalRect.width,
            height:body2.m_colliderLocalRect.height};
        var rectIntersection = Geometry.getRectIntersection(body1DestColliderGlobalRect,body2ColliderGlobalRect);

        if(rectIntersection.width>=GlobalConstant.MIN_INTERSECTION_WIDTH
            && rectIntersection.height>=GlobalConstant.MIN_INTERSECTION_HEIGHT){

            if(this.m_needCollideCallback == true){
                if(this.getContactedBodyIndex(body1,body2) == -1){
                    cc.log("onCollidePre! ");
                    if(this.onCollidePre != null && this.onCollidePre(body1, body2) == false) {
                        body1.m_contactedBodies.push({body:body2,collided:false});
                        body2.m_contactedBodies.push({body:body1,collided:false});
                    }else{
                        body1.m_contactedBodies.push({body:body2,collided:true});
                        body2.m_contactedBodies.push({body:body1,collided:true});
                    }
                    cc.log("onCollideBegin! ");
                    if(this.onCollideBegin != null){
                        this.onCollideBegin(body1,body2);
                    }
                }
            }

            var body1IndexOfBody2 = this.getContactedBodyIndex(body1,body2);

            if(this.m_needCollideCallback == false || body1.m_contactedBodies[body1IndexOfBody2].collided == true){
                var holdbackRatio=0;

                if(dx!=0 && dy!=0){
                    holdbackRatio = Math.min(1,Math.min(
                        Math.abs(rectIntersection.width/dx),
                        Math.abs(rectIntersection.height/dy)));

                }else {
                    if(dx==0){
                        holdbackRatio = Math.min(1,
                            Math.abs(rectIntersection.height/dy));

                    }else if(dy==0) {
                        holdbackRatio = Math.min(1,
                            Math.abs(rectIntersection.width/dx));
                    }
                }

                if(force==undefined || force==false){

                    dx = dx*(1-holdbackRatio);
                    dy = dy*(1-holdbackRatio);

                }else{
                    holdbackRatio = holdbackRatio/2.0;

                    this.moveBody(body2, dx*holdbackRatio, dy*holdbackRatio, force);

                    // body2.m_pos.x += dx*holdbackRatio;
                    // body2.m_pos.y += dy*holdbackRatio;

                    dx = dx*(1-holdbackRatio);
                    dy = dy*(1-holdbackRatio);
                }
                body1DestColliderGlobalRect = {
                    x:body1.m_pos.x+body1.m_colliderLocalRect.x+dx,
                    y:body1.m_pos.y+body1.m_colliderLocalRect.y+dy,
                    width:body1.m_colliderLocalRect.width,
                    height:body1.m_colliderLocalRect.height
                };

                if(this.m_needCollideCallback == true){
                    rectIntersection = Geometry.getRectIntersection(body1DestColliderGlobalRect,body2ColliderGlobalRect);

                    if(rectIntersection.width<GlobalConstant.MIN_INTERSECTION_WIDTH
                        && rectIntersection.height<GlobalConstant.MIN_INTERSECTION_HEIGHT){
                        var body1IndexOfBody2 = this.getContactedBodyIndex(body1,body2);
                        if(body1IndexOfBody2 != -1) {
                            body1.m_contactedBodies.splice(body1IndexOfBody2,1);
                            var body2IndexOfBody1 = this.getContactedBodyIndex(body2,body1);
                            body2.m_contactedBodies.splice(body2IndexOfBody1,1);

                            cc.log("onCollideEnd! ");
                            if(this.onCollideEnd != null){
                                this.onCollideEnd(body1,body2);
                            }
                        }
                    }
                }

            }

        }else{

            if(this.m_needCollideCallback == true){
                var body1IndexOfBody2 = this.getContactedBodyIndex(body1,body2);
                if(body1IndexOfBody2 != -1) {
                    body1.m_contactedBodies.splice(body1IndexOfBody2,1);
                    var body2IndexOfBody1 = this.getContactedBodyIndex(body2,body1);
                    body2.m_contactedBodies.splice(body2IndexOfBody1,1);
                    cc.log("onCollideEnd! ");
                    if(this.onCollideEnd != null){
                        this.onCollideEnd(body1,body2);
                    }
                }
            }

        }
    }

    body1.m_pos.x += dx;
    body1.m_pos.y += dy;

    return {dx:dx,dy:dy};
}

PhysicsManager.prototype.moveBodyWithoutCollisionTo=function(body,x,y){
    body.m_pos.x = x;
    body.m_pos.y = y;
}

PhysicsManager.prototype.updateContactedBodies=function(dt){
    for(var i=0;i<this.m_physicsBodies.length;i++){
        var body1 = this.m_physicsBodies[i];
        for(var j=0;j<this.m_physicsBodies.length;j++){
            var body2 = this.m_physicsBodies[j];

            if(body1==body2){
                continue;
            }

            if(body1.m_collisionGroup != undefined && body2.m_collisionGroup != undefined
                && body1.m_collisionGroup == body2.m_collisionGroup){
                continue;
            }

            var body1DestColliderGlobalRect = {
                x:body1.m_pos.x+body1.m_colliderLocalRect.x,
                y:body1.m_pos.y+body1.m_colliderLocalRect.y,
                width:body1.m_colliderLocalRect.width,
                height:body1.m_colliderLocalRect.height};
            var body2ColliderGlobalRect = {
                x:body2.m_pos.x+body2.m_colliderLocalRect.x,
                y:body2.m_pos.y+body2.m_colliderLocalRect.y,
                width:body2.m_colliderLocalRect.width,
                height:body2.m_colliderLocalRect.height};

            var rectIntersection = Geometry.getRectIntersection(body1DestColliderGlobalRect,body2ColliderGlobalRect);

            if(rectIntersection.width>=GlobalConstant.MIN_INTERSECTION_WIDTH
                && rectIntersection.height>=GlobalConstant.MIN_INTERSECTION_HEIGHT) {

                if(this.m_needCollideCallback == true){
                    if(this.getContactedBodyIndex(body1,body2) == -1){

                        cc.log("onCollidePre! ");
                        if(this.onCollidePre != null && this.onCollidePre(body1, body2) == false) {
                            body1.m_contactedBodies.push({body:body2,collided:false});
                            body2.m_contactedBodies.push({body:body1,collided:false});
                        }else{
                            body1.m_contactedBodies.push({body:body2,collided:true});
                            body2.m_contactedBodies.push({body:body1,collided:true});
                        }
                        cc.log("onCollideBegin!");
                        if(this.onCollideBegin != null){
                            this.onCollideBegin(body1,body2);
                        }

                    }
                }

                var body1IndexOfBody2 = this.getContactedBodyIndex(body1,body2);
                if(this.m_needCollideCallback == false || body1.m_contactedBodies[body1IndexOfBody2].collided == true){
                    if(rectIntersection.width<rectIntersection.height){

                        if(body1.m_pos.x>=body2.m_pos.x){
                            if(body1.m_owner == null && body2.m_owner != null){
                                body2.m_pos.x -= rectIntersection.width;
                            }else if(body1.m_owner != null && body2.m_owner == null){
                                body1.m_pos.x += rectIntersection.width;
                            }else if(body1.m_owner != null && body2.m_owner != null){
                                body1.m_pos.x += rectIntersection.width/2.0;
                                body2.m_pos.x -= rectIntersection.width/2.0;
                            }
                        }else if(body1.m_pos.x<body2.m_pos.x){
                            if(body1.m_owner == null && body2.m_owner != null){
                                body2.m_pos.x += rectIntersection.width;
                            }else if(body1.m_owner != null && body2.m_owner == null){
                                body1.m_pos.x -= rectIntersection.width;
                            }else if(body1.m_owner != null && body2.m_owner != null){
                                body1.m_pos.x -= rectIntersection.width / 2.0;
                                body2.m_pos.x += rectIntersection.width / 2.0;
                            }
                        }
                    }else{
                        if(body1.m_pos.y>=body2.m_pos.y){
                            if(body1.m_owner == null && body2.m_owner != null){
                                body2.m_pos.y -= rectIntersection.height;
                            }else if(body1.m_owner != null && body2.m_owner == null){
                                body1.m_pos.y += rectIntersection.height;
                            }else if(body1.m_owner != null && body2.m_owner != null){
                                body1.m_pos.y += rectIntersection.height / 2.0;
                                body2.m_pos.y -= rectIntersection.height / 2.0;
                            }
                        }else if(body1.m_pos.y<body2.m_pos.y){
                            if(body1.m_owner == null && body2.m_owner != null){
                                body2.m_pos.y += rectIntersection.height;
                            }else if(body1.m_owner != null && body2.m_owner == null){
                                body1.m_pos.y -= rectIntersection.height;
                            }else if(body1.m_owner != null && body2.m_owner != null){
                                body1.m_pos.y -= rectIntersection.height / 2.0;
                                body2.m_pos.y += rectIntersection.height / 2.0;
                            }
                        }
                    }
                }

                if(this.m_needCollideCallback == true){
                    body1DestColliderGlobalRect = {
                        x:body1.m_pos.x+body1.m_colliderLocalRect.x,
                        y:body1.m_pos.y+body1.m_colliderLocalRect.y,
                        width:body1.m_colliderLocalRect.width,
                        height:body1.m_colliderLocalRect.height};
                    body2ColliderGlobalRect = {
                        x:body2.m_pos.x+body2.m_colliderLocalRect.x,
                        y:body2.m_pos.y+body2.m_colliderLocalRect.y,
                        width:body2.m_colliderLocalRect.width,
                        height:body2.m_colliderLocalRect.height};

                    rectIntersection = Geometry.getRectIntersection(body1DestColliderGlobalRect,body2ColliderGlobalRect);

                    if(rectIntersection.width<GlobalConstant.MIN_INTERSECTION_WIDTH
                        && rectIntersection.height<GlobalConstant.MIN_INTERSECTION_HEIGHT){
                        var body1IndexOfBody2 = this.getContactedBodyIndex(body1,body2);
                        if(body1IndexOfBody2 != -1) {
                            body1.m_contactedBodies.splice(body1IndexOfBody2,1);
                            var body2IndexOfBody1 = this.getContactedBodyIndex(body2,body1);
                            body2.m_contactedBodies.splice(body2IndexOfBody1,1);

                            cc.log("onCollideEnd!");
                            if(this.onCollideEnd != null){
                                this.onCollideEnd(body1,body2);
                            }
                        }
                    }
                }




            }else{

                if(this.m_needCollideCallback == true){
                    var body1IndexOfBody2 = this.getContactedBodyIndex(body1,body2);
                    if(body1IndexOfBody2 != -1) {
                        body1.m_contactedBodies.splice(body1IndexOfBody2,1);
                        var body2IndexOfBody1 = this.getContactedBodyIndex(body2,body1);
                        body2.m_contactedBodies.splice(body2IndexOfBody1,1);
                        cc.log("onCollideEnd!");
                        if(this.onCollideEnd != null){
                            this.onCollideEnd(body1,body2);
                        }
                    }
                }

            }

        }
    }
}

PhysicsManager.prototype.getContactedBodyIndex=function(body1,body2){
    for(var i=0;i<body1.m_contactedBodies.length;i++){
        if(body1.m_contactedBodies[i].body == body2){
            break;
        }
    }
    if(i<body1.m_contactedBodies.length){
        return i;
    }else{
        return -1;
    }
}

PhysicsManager.prototype.isValidMove=function(displacement){
    if(Math.abs(displacement.dx) < GlobalConstant.MIN_OFF_X && Math.abs(displacement.dy)<GlobalConstant.MIN_OFF_Y){
        return false;
    }
    return true;
}
