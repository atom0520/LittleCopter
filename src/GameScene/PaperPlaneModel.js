/**
 * Created by atom on 16/8/30.
 */
var PaperPlaneModel = function(x,y,vx,vy,moveRange){
    PhysicsModelModule.call(this);

    this.m_pos=Geometry.createPoint(x,y);
    this.m_displacementCounter = cc.p(0,0);

    this.m_vel = cc.p(vx,vy);
    this.m_moveRange = moveRange;

    this.m_physicsBody = new RectPhysicsBody(x,y,Geometry.createRect(
        -GameSceneConstant.PAPER_PLANE_PHYSICS_BODY_RECT_WIDTH/2.0,
        -GameSceneConstant.PAPER_PLANE_PHYSICS_BODY_RECT_HEIGHT/2.0,
        GameSceneConstant.PAPER_PLANE_PHYSICS_BODY_RECT_WIDTH,
        GameSceneConstant.PAPER_PLANE_PHYSICS_BODY_RECT_HEIGHT));

    this.m_physicsBody.m_owner = this;
    this.m_physicsBody.m_collisionGroup = 2;

    this.update=function(dt) {
        PhysicsModelModule.prototype.update.call(this);

    }
}