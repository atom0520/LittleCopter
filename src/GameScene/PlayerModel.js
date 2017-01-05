/**
 * Created by atom on 16/8/27.
 */
var PlayerModel = function(x,y){
    this.m_state = null;
    
    PhysicsModelModule.call(this);
    this.m_pos=Geometry.createPoint(x,y);
    this.m_vel = cc.p(0,0);
    
    this.m_rotateSpeed = 0
    this.m_rotateSpeedDeclineCounter = 0;
    
    this.update=function(dt){
        PhysicsModelModule.prototype.update.call(this);
    };

    this.m_physicsBody = new RectPhysicsBody(
        x,y,
        Geometry.createRect(
            -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0,
            -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0,
            GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH,
            GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT));
    this.m_physicsBody.m_owner = this;
}