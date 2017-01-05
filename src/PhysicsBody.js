/**
 * Created by atom on 16/8/27.
 */
PhysicsBody = function(x,y){
    this.m_owner = null;
    // if(owner != null){
    //     this.m_pos = owner.m_pos;
    // }else{
    //     this.m_pos = Geometry.createPoint(x,y);
    // }
    this.m_pos = Geometry.createPoint(x,y);
    this.m_contactedBodies = [];
    
}

PhysicsBody.prototype.moveBy = function(dx,dy){
    this.m_pos.x += dx;
    this.m_pos.y += dy;
}

RectPhysicsBody = function(x,y,rect){
    PhysicsBody.call(this,x,y);
    this.m_colliderLocalRect = rect;
}