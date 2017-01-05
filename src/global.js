/**
 * Created by atom on 16/8/27.
 */
GlobalConstant={};

GlobalConstant.SHOW_PHYSICS_BODY_COLLIDER = false;


GlobalConstant.WINDOW_WIDTH = 960;
GlobalConstant.WINDOW_HEIGHT = 640;
GlobalConstant.BAMBOO_COPTER_FLYING_ANIMATION_NAME = "bamboo_copter_flying";
GlobalConstant.FPS = 60;

GlobalConstant.MIN_OFF_X = 0.01;
GlobalConstant.MIN_OFF_Y = 0.01;

GlobalConstant.MIN_INTERSECTION_WIDTH = 0.01;
GlobalConstant.MIN_INTERSECTION_HEIGHT = 0.01;

Direction = {
    left:0,
    right:1,
}

GameOverType = {
    drownToDeath:0,
    win:1,
}

getIntRandBetween = function(a,b){
    var rand = 0 | Math.random()*(b-a)*100;
    return (a + rand % (b-a+1));

}