/**
 * Created by atom on 16/8/27.
 */
Geometry = {}

Geometry.createPoint=function(x,y){
    return {x:x,y:y};
}

Geometry.createRect=function(x,y,width,height){
    return {x:x,y:y,width:width,height:height};
}

Geometry.getRectIntersection=function(rect1,rect2){
    var intersection = Geometry.createRect(
        Math.max(rect1.x, rect2.x),
        Math.max(rect1.y, rect2.y),
        0, 0);

    intersection.width = Math.min(rect1.x+rect1.width, rect2.x+rect2.width) - intersection.x;
    intersection.height = Math.min(rect1.y+rect1.height, rect2.y+rect2.height) - intersection.y;
    return intersection;
}