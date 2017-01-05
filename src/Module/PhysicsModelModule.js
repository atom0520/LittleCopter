/**
 * Created by atom on 16/8/27.
 */
var PhysicsModelModule = function(){
    this.m_pos = null;
    this.m_vel = null;
    this.m_physicsBody = null;
}

PhysicsModelModule.prototype.moveBy = function(dx,dy){
    this.m_pos.x += dx;
    this.m_pos.y += dy;
}

PhysicsModelModule.prototype.update = function(){
    this.m_pos = this.m_physicsBody.m_pos;
}
