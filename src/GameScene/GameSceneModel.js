/**
 * Created by atom on 16/8/27.
 */
var GameSceneModel = function(){
    this.m_physicsManager = new PhysicsManager();
    this.m_gameState=null;
    this.m_gameEndingType = null;
    this.m_gameEndingCounter = 0;
};