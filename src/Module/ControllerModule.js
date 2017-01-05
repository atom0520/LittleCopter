/**
 * Created by atom on 16/8/27.
 */
var ControllerModule = function(){
    this.m_model = {};
}

//SpriteControllerModule
var SpriteControllerModule= function(){
    ControllerModule.call(this);
    this.m_sprite = null;
}

SpriteControllerModule.prototype.update = function(dt){
    this.m_model.update(dt);
    if(this.m_sprite!=null){
        this.m_sprite.setPosition(this.m_model.m_pos);
    }
}

//SceneControllerModule
var SceneControllerModule = function(){
    ControllerModule.call(this);
    this.m_view = null;
}