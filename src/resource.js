var res = {
    groundFg_png:"res/groundFg.png",
    waterFg_png:"res/waterFg.png",
    bambooCopterAnimations_plist:"res/frames_animations/bamboo_copter_animations.plist",
    bambooCopterFrames_plist:"res/frames_animations/bamboo_copter_frames.plist",
    bambooCopterFrames_png:"res/frames_animations/bamboo_copter_frames.png",

    boatBack_png:"res/boat_01.png",
    boatFront_png:"res/boat_02.png",
    hotAirBalloon_png:"res/hot_air_balloon_01.png",
    cloud_png:"res/cloud_01.png",

    birdFrames_plist:"res/frames_animations/bird_frames.plist",
    birdFrames_png:"res/frames_animations/bird_frames.png",
    birdAnimations_plist:"res/frames_animations/bird_animations.plist",

    airplane_png:"res/airplane_01.png",

    helicopterFrames_plist:"res/frames_animations/helicopter_frames.plist",
    helicopterAnimations_plist:"res/frames_animations/helicopter_animations.plist",

    paperPlane_png:"res/paper_plane_01.png",

    bgm1_mp3:"res/sounds/bgm1.mp3",
    bgm2_mp3:"res/sounds/bgm2.mp3",
    loseEffect_mp3:"res/sounds/lose_effect.mp3",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
