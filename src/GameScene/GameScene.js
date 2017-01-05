/**
 * Created by atom on 16/8/27.
 */
GameSceneConstant = {};
GameSceneConstant.SHOW_TEST_LABELS = false;
GameSceneConstant.TEST_LABEL_NUM = 5;

GameSceneConstant.GOUND_FG_SCROLLABLE_LAYER_Z_ORDER = 11;
GameSceneConstant.WATER_FG_SCROLLABLE_LAYER_Z_ORDER = 10;
GameSceneConstant.PLAYER_SPRITE_SCROLLABLE_LAYER_Z_ORDER = 5;
GameSceneConstant.AIRPLANE_SPRITE_SCROLLABLE_LAYER_Z_ORDER = 1;
GameSceneConstant.BOAT_BACK_SPRITE_SCROLLABLE_LAYER_Z_ORDER = 3;
GameSceneConstant.BOAT_FRONT_SPRITE_SCROLLABLE_LAYER_Z_ORDER = 9;
GameSceneConstant.HOT_AIR_BALLOON_SPRITE_SCROLLABLE_LAYER_Z_ORDER = 8;
GameSceneConstant.CLOUD_SPRITE_SCROLLABLE_LAYER_Z_ORDER = 2;
GameSceneConstant.HELICOPTER_SPRITE_SCROLLABLE_LAYER_Z_ORDER = 4;
GameSceneConstant.BIRD_SPRITE_SCROLLABLE_LAYER_Z_ORDER = 7;
GameSceneConstant.PAPER_PLANE_SPRITE_SCROLLABLE_LAYER_Z_ORDER = 6;

GameSceneConstant.SCROLLABLE_LAYER_SCENE_VIEW_Z_ORDER = 2;

GameSceneConstant.TEST_LABEL_SCENE_VIEW_Z_ORDER = 3;
GameSceneConstant.HEIGHT_DISPLAY_LABEL_SCENE_VIEW_Z_ORDER = 4;
GameSceneConstant.ENDING_LABEL_SCENE_VIEW_Z_ORDER = 6;
GameSceneConstant.PLAY_AGAIN_LABEL_SCENE_VIEW_Z_ORDER = 7;
GameSceneConstant.STORY_LABEL_SCENE_VIEW_Z_ORDER = 5;

GameSceneConstant.PLAYER_SPRITE_SCALE = 0.5;
GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH  = 30;
GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT = 110;

GameSceneConstant.AIRPLANE_PHYSICS_BODY_RECT_WIDTH  = 440;
GameSceneConstant.AIRPLANE_PHYSICS_BODY_RECT_HEIGHT = 88;

GameSceneConstant.GRAVITY_ACC = 18/GlobalConstant.FPS;
GameSceneConstant.PLAYER_LAUNCH_ROTATE_SPEED_TRESHOLD = 8;
GameSceneConstant.PLAYER_ROTATE_LIFT_ACC_TO_SPEED_RATIO = GameSceneConstant.GRAVITY_ACC/GameSceneConstant.PLAYER_LAUNCH_ROTATE_SPEED_TRESHOLD;
GameSceneConstant.PLAYER_ROTATE_ACC_PER_INPUT = 2;
GameSceneConstant.PLAYER_HORIZONTAL_ACC_PER_INPUT = 64/GlobalConstant.FPS;
GameSceneConstant.PLAYER_ON_LAND_HORIZONTAL_DECLINE_ACC = 0.4;

GameSceneConstant.PLAYER_MAX_HORIZONTAL_SPEED = 256/GlobalConstant.FPS;

GameSceneConstant.GROUND_PHYSICS_BODY_WIDTH = 960;
GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT = 320;
GameSceneConstant.WATER_PHYSICS_BODY_WIDTH = 960;
GameSceneConstant.WATER_PHYSICS_BODY_HEIGHT = 200;

GameSceneConstant.PLAYER_SPRITE_REPEAT_FLYING_ACTION_TAG = 1;
GameSceneConstant.PLAYER_FLYING_SPRITE_FRAME_NAME_PREFIX = "bamboo_copter_0";


GameSceneConstant.MIN_PLAYER_SPRITE_WIN_POS_X = GlobalConstant.WINDOW_WIDTH/2.0;
GameSceneConstant.MAX_PLAYER_SPRITE_WIN_POS_X = GlobalConstant.WINDOW_WIDTH/2.0;
GameSceneConstant.MIN_PLAYER_SPRITE_WIN_POS_Y = GlobalConstant.WINDOW_HEIGHT*2/5.0;
GameSceneConstant.MAX_PLAYER_SPRITE_WIN_POS_Y = GlobalConstant.WINDOW_HEIGHT*2/5.0;

GameSceneConstant.WATER_SUB_SPRITE_NUM = 2;
GameSceneConstant.BG_SUB_SPRITE_NUM = 2;

GameSceneConstant.WATER_FLOW_SPEED = 60/GlobalConstant.FPS;

GameSceneConstant.BOAT_PHYSICS_BODY_RECT_WIDTH = 350;
GameSceneConstant.BOAT_PHYSICS_BODY_RECT_HEIGHT = 30;
GameSceneConstant.BOAT_SPRITE_SCALE_X = 0.5;
GameSceneConstant.BOAT_SPRITE_SCALE_Y = 0.75;

GameSceneConstant.BOAT_INIT_VEL_X = -64.0/GlobalConstant.FPS;
GameSceneConstant.BOAT_INIT_POS_X = GlobalConstant.WINDOW_WIDTH*3/2.0;
GameSceneConstant.BOAT_INIT_POS_Y = 300;

GameSceneConstant.GROUND_FG_NUM = 1;

GameSceneConstant.PLAYER_INIT_POS_X = GlobalConstant.WINDOW_WIDTH/2.0;
GameSceneConstant.PLAYER_INIT_POS_Y = GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT+GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0;

GameSceneConstant.GAME_ENDING_DELAY_TIME = 1.0;

// GameSceneConstant.HOT_AIR_BALLOON_INIT_VEL_X = 0;
// GameSceneConstant.HOT_AIR_BALLOON_INIT_VEL_Y = 64.0/GlobalConstant.FPS;

GameSceneConstant.HOT_AIR_BALLOON_PHYSICS_BODY_RECT_WIDTH = 120;
GameSceneConstant.HOT_AIR_BALLOON_PHYSICS_BODY_RECT_HEIGHT = 24;

GameSceneConstant.HOT_AIR_BALLOON_SPRITE_SCALE_X = 0.5;
GameSceneConstant.HOT_AIR_BALLOON_SPRITE_SCALE_Y = 0.5;

// GameSceneConstant.HOT_AIR_BALLOON_INIT_POS_X = GlobalConstant.WINDOW_WIDTH*2 + 640;
// GameSceneConstant.HOT_AIR_BALLOON_INIT_POS_Y = GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT +300;

GameSceneConstant.CLOUD_PHYSICS_BODY_RECT_WIDTH = 340;
GameSceneConstant.CLOUD_PHYSICS_BODY_RECT_HEIGHT = 45;

GameSceneConstant.CLOUD_SPRITE_SCALE_X = 0.5;
GameSceneConstant.CLOUD_SPRITE_SCALE_Y = 0.5;

GameSceneConstant.COLLIDE_CHECK_OFF_X = 0.5;
GameSceneConstant.COLLIDE_CHECK_OFF_Y = 0.5;

GameSceneConstant.BIRD_FLYING_ANIMATION_NAME = "bird_flying";
GameSceneConstant.HELICOPTER_FLYING_ANIMATION_NAME = "helicopter_flying";

GameSceneConstant.BIRD_SPRITE_SCALE_X = 0.6;
GameSceneConstant.BIRD_SPRITE_SCALE_Y = 0.6;
GameSceneConstant.BIRD_PHYSICS_BODY_RECT_WIDTH = 98;
GameSceneConstant.BIRD_PHYSICS_BODY_RECT_HEIGHT = 58;

GameSceneConstant.AIRPLANE_SPRITE_SCALE_X = 1.0;
GameSceneConstant.AIRPLANE_SPRITE_SCALE_Y = 1.0;

GameSceneConstant.HELICOPTER_SPRITE_SCALE_X = 1.2;
GameSceneConstant.HELICOPTER_SPRITE_SCALE_Y = 1.2;

GameSceneConstant.HELICOPTER_PHYSICS_BODY_RECT_WIDTH = 295;
GameSceneConstant.HELICOPTER_PHYSICS_BODY_RECT_HEIGHT = 20;

GameSceneConstant.COLLIDE_FROM_UP_SIDE_MIN_BOUNCE_ACC = GameSceneConstant.GRAVITY_ACC*30;

GameSceneConstant.PAPER_PLANE_SPRITE_SCALE_X = 0.5;
GameSceneConstant.PAPER_PLANE_SPRITE_SCALE_Y = 0.5;

GameSceneConstant.PAPER_PLANE_PHYSICS_BODY_RECT_WIDTH = 200;
GameSceneConstant.PAPER_PLANE_PHYSICS_BODY_RECT_HEIGHT = 30;

AirplanesData = [];
CloudsData = [];
HotAirBalloonsData = [];
BirdsData = [];
HelicoptersData = [];
PaperPlanesData = [];

GameSceneConstant.refreshData = function(){
    AirplanesData = [
        {
            initPosX:GlobalConstant.WINDOW_WIDTH/2.0,
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT+115
        }
    ]

    CloudsData = [
        //LEVEL 1
        {
            initPosX:GameSceneConstant.CLOUD_PHYSICS_BODY_RECT_WIDTH/2.0+ getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/2),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT/2.0
        },


        //LEVEL 2
        {
            initPosX:GlobalConstant.WINDOW_WIDTH/3.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/6),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*3/2.0 +
            GlobalConstant.WINDOW_HEIGHT/3.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/6)
        },

        {
            initPosX:GlobalConstant.WINDOW_WIDTH*2/3.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/6),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*3/2.0 +
            GlobalConstant.WINDOW_HEIGHT*2/3.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/6)
        },

        {
            initPosX:GlobalConstant.WINDOW_WIDTH*3/3.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/6),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*3/2.0 +
            GlobalConstant.WINDOW_HEIGHT*3/3.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/6)
        },

        {
            initPosX:GlobalConstant.WINDOW_WIDTH*4/3.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/6),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*3/2.0 +
            GlobalConstant.WINDOW_HEIGHT*4/3.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/6)
        },

        {
            initPosX:GlobalConstant.WINDOW_WIDTH*5/3.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/6),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*3/2.0 +
            GlobalConstant.WINDOW_HEIGHT*5/3.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/6)
        },

        {
            initPosX:GlobalConstant.WINDOW_WIDTH*6/3.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/6),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*3/2.0 +
            GlobalConstant.WINDOW_HEIGHT*6/3.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/6)
        },

        //LEVEL 3
        {
            initPosX:GlobalConstant.WINDOW_WIDTH/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/4),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*7/2.0 +
            GlobalConstant.WINDOW_HEIGHT/2.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/4)
        },

        {
            initPosX:GlobalConstant.WINDOW_WIDTH*2/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/4),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*7/2.0 +
            GlobalConstant.WINDOW_HEIGHT*2/2.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/4)
        },

        {
            initPosX:GlobalConstant.WINDOW_WIDTH*3/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/4),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*7/2.0 +
            GlobalConstant.WINDOW_HEIGHT*3/2.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/4)
        },

        {
            initPosX:GlobalConstant.WINDOW_WIDTH*4/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/4),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*7/2.0 +
            GlobalConstant.WINDOW_HEIGHT*4/2.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/4)
        },


        //LEVEL 4
        {
            initPosX:GlobalConstant.WINDOW_WIDTH + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/2),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*11/2.0 +
            GlobalConstant.WINDOW_HEIGHT+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/2)
        },

        {
            initPosX:GlobalConstant.WINDOW_WIDTH*2 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/2),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*11/2.0 +
            GlobalConstant.WINDOW_HEIGHT*2+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/2)
        },

        //LEVEL 5
        {
            initPosX:GlobalConstant.WINDOW_WIDTH/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/2),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*15/2.0 +
            GlobalConstant.WINDOW_HEIGHT+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/2)
        },

        {
            initPosX:GlobalConstant.WINDOW_WIDTH*3/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/2),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*15/2.0 +
            GlobalConstant.WINDOW_HEIGHT*2+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/2)
        },


    ]

    HotAirBalloonsData = [
        {
            initPosX:GlobalConstant.WINDOW_WIDTH*3/2.0,
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT+GlobalConstant.WINDOW_HEIGHT/2.0,
            initVelX:0,
            initVelY:64.0/GlobalConstant.FPS,
            moveRange:{
                minX:0,
                maxX:0,
                minY:0,
                maxY:GlobalConstant.WINDOW_HEIGHT,
            }
        },
        {
            initPosX:GlobalConstant.WINDOW_WIDTH/2.0+getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*7/2.0 +
            GlobalConstant.WINDOW_HEIGHT*2/2.0,
            initVelX:0,
            initVelY:64.0/GlobalConstant.FPS,
            moveRange:{
                minX:0,
                maxX:0,
                minY:0,
                maxY:GlobalConstant.WINDOW_HEIGHT*2,
            }
        },
        {
            initPosX:0+getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*11/2.0 +
            GlobalConstant.WINDOW_HEIGHT*3/2,
            initVelX:0,
            initVelY:64.0/GlobalConstant.FPS,
            moveRange:{
                minX:0,
                maxX:0,
                minY:0,
                maxY:GlobalConstant.WINDOW_HEIGHT,
            }
        }
    ]

    BirdsData = [
        //LEVEL3
        {
            initPosX:GlobalConstant.WINDOW_WIDTH/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/4),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*7/2.0 +
            GlobalConstant.WINDOW_HEIGHT*2/2.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/4),
            initVelX:192.0/GlobalConstant.FPS,
            initVelY:48/GlobalConstant.FPS,
            moveRange:{
                minX:-GlobalConstant.WINDOW_WIDTH/2.0,
                maxX:GlobalConstant.WINDOW_WIDTH/2.0,
                minY:-GlobalConstant.WINDOW_HEIGHT/2.0,
                maxY:GlobalConstant.WINDOW_HEIGHT/2.0,
            }
        },
        {
            initPosX:GlobalConstant.WINDOW_WIDTH*4/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/4),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*7/2.0 +
            GlobalConstant.WINDOW_HEIGHT*3/2.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/4),
            initVelX:-192.0/GlobalConstant.FPS,
            initVelY:-48.0/GlobalConstant.FPS,
            moveRange:{
                minX:-GlobalConstant.WINDOW_WIDTH/2.0,
                maxX:GlobalConstant.WINDOW_WIDTH/2.0,
                minY:-GlobalConstant.WINDOW_HEIGHT/2.0,
                maxY:GlobalConstant.WINDOW_HEIGHT/2.0,
            }
        },


        //LEVEL4
        {
            initPosX:GlobalConstant.WINDOW_WIDTH*0/3.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/6),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*11/2.0 +
            GlobalConstant.WINDOW_HEIGHT*0/6.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/6),
            initVelX:224.0/GlobalConstant.FPS,
            initVelY:64/GlobalConstant.FPS,
            moveRange:{
                minX:-GlobalConstant.WINDOW_WIDTH/2.0,
                maxX:GlobalConstant.WINDOW_WIDTH/2.0,
                minY:-GlobalConstant.WINDOW_HEIGHT/2.0,
                maxY:GlobalConstant.WINDOW_HEIGHT/2.0,
            }
        },
        {
            initPosX:GlobalConstant.WINDOW_WIDTH*2/3.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/6),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*11/2.0 +
            GlobalConstant.WINDOW_HEIGHT*2/6.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/6),
            initVelX:-240.0/GlobalConstant.FPS,
            initVelY:0/GlobalConstant.FPS,
            moveRange:{
                minX:-GlobalConstant.WINDOW_WIDTH/2.0,
                maxX:GlobalConstant.WINDOW_WIDTH/2.0,
                minY:-GlobalConstant.WINDOW_HEIGHT/2.0,
                maxY:GlobalConstant.WINDOW_HEIGHT/2.0,
            }
        },
        {
            initPosX:GlobalConstant.WINDOW_WIDTH*4/3.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/6),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*11/2.0 +
            GlobalConstant.WINDOW_HEIGHT*4/6.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/6),
            initVelX:-224.0/GlobalConstant.FPS,
            initVelY:-64.0/GlobalConstant.FPS,
            moveRange:{
                minX:-GlobalConstant.WINDOW_WIDTH/2.0,
                maxX:GlobalConstant.WINDOW_WIDTH/2.0,
                minY:-GlobalConstant.WINDOW_HEIGHT/2.0,
                maxY:GlobalConstant.WINDOW_HEIGHT/2.0,
            }
        },

        //LEVEL5
        {
            initPosX:GlobalConstant.WINDOW_WIDTH*0/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/4),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*15/2.0 +
            GlobalConstant.WINDOW_HEIGHT*1/2.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/4),
            initVelX:256.0/GlobalConstant.FPS,
            initVelY:80/GlobalConstant.FPS,
            moveRange:{
                minX:-GlobalConstant.WINDOW_WIDTH*3/2.0,
                maxX:GlobalConstant.WINDOW_WIDTH*3/2.0,
                minY:-GlobalConstant.WINDOW_HEIGHT/2.0,
                maxY:GlobalConstant.WINDOW_HEIGHT/2.0,
            }
        },
        {
            initPosX:GlobalConstant.WINDOW_WIDTH*2/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/4),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*15/2.0 +
            GlobalConstant.WINDOW_HEIGHT*3/2.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/4),
            initVelX:-256.0/GlobalConstant.FPS,
            initVelY:-80.0/GlobalConstant.FPS,
            moveRange:{
                minX:-GlobalConstant.WINDOW_WIDTH*3/2.0,
                maxX:GlobalConstant.WINDOW_WIDTH*3/2.0,
                minY:-GlobalConstant.WINDOW_HEIGHT/2.0,
                maxY:GlobalConstant.WINDOW_HEIGHT/2.0,
            }
        },
    ]

    HelicoptersData = [
        {
            initPosX:GlobalConstant.WINDOW_WIDTH/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/2),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*15/2.0 +
            GlobalConstant.WINDOW_HEIGHT*3+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/2),
            initVelX:-128.0/GlobalConstant.FPS,
            initVelY:0/GlobalConstant.FPS,
            moveRange:{
                minX:-180,
                maxX:180,
                minY:0,
                maxY:0,
            }
        }
    ]


    PaperPlanesData = [
        // LEVEL 2
        {
            initPosX:GlobalConstant.WINDOW_WIDTH*1/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/4),
                initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*3/2.0 +
        GlobalConstant.WINDOW_HEIGHT*2/4.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/4),
            initVelX:192.0/GlobalConstant.FPS,
            initVelY:0/GlobalConstant.FPS,
            moveRange:{
            minX:-GlobalConstant.WINDOW_WIDTH/2.0,
                maxX:GlobalConstant.WINDOW_WIDTH/2.0,
                minY:-GlobalConstant.WINDOW_HEIGHT/2.0,
                maxY:GlobalConstant.WINDOW_HEIGHT/2.0,
            }
        },

        {
            initPosX:GlobalConstant.WINDOW_WIDTH*3/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/4),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*3/2.0 +
            GlobalConstant.WINDOW_HEIGHT*3/4.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/4),
            initVelX:192.0/GlobalConstant.FPS,
            initVelY:0/GlobalConstant.FPS,
            moveRange:{
                minX:-GlobalConstant.WINDOW_WIDTH/2.0,
                maxX:GlobalConstant.WINDOW_WIDTH/2.0,
                minY:-GlobalConstant.WINDOW_HEIGHT/2.0,
                maxY:GlobalConstant.WINDOW_HEIGHT/2.0,
            }
        },
        // LEVEL 3
        {
            initPosX:GlobalConstant.WINDOW_WIDTH*3/2.0 + getIntRandBetween(0,GlobalConstant.WINDOW_WIDTH/4),
            initPosY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*7/2.0 +
            GlobalConstant.WINDOW_HEIGHT/2.0+getIntRandBetween(0,GlobalConstant.WINDOW_HEIGHT/4),
            initVelX:-192.0/GlobalConstant.FPS,
            initVelY:0/GlobalConstant.FPS,
            moveRange:{
                minX:-GlobalConstant.WINDOW_WIDTH/2.0,
                maxX:GlobalConstant.WINDOW_WIDTH/2.0,
                minY:-GlobalConstant.WINDOW_HEIGHT/2.0,
                maxY:GlobalConstant.WINDOW_HEIGHT/2.0,
            }
        },
    ]
}

GameSceneConstant.STORY_LABELS_DATA = [
    //LEVEL 1
    {
        text:"Go up high!  child.\nYour future is up there.",
        minY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT/2.0,
        maxY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT+GlobalConstant.WINDOW_HEIGHT/2.0,
    },
    //LEVEL 2
    {
        text:"We get our technologies from nature\nI get my dreams by nature.",
        minY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*3/2.0 +
        GlobalConstant.WINDOW_HEIGHT/3.0,
        maxY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*3/2.0 +
        GlobalConstant.WINDOW_HEIGHT*6/3.0,
    },
    //LEVEL 3
    {
        text:"Birds joke about me but so what?\nI fly my own way.",
        minY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*7/2.0 +
        GlobalConstant.WINDOW_HEIGHT/2.0,
        maxY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*7/2.0 +
        GlobalConstant.WINDOW_HEIGHT*4/2.0,
    },
    //LEVEL 4
    {
        text:"All the obstacles will be my stages.\nPave the way to my future.",
        minY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*11/2.0 +
        GlobalConstant.WINDOW_HEIGHT,
        maxY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*11/2.0 +
        GlobalConstant.WINDOW_HEIGHT*2,
    },
    //LEVEL 5
    {
        text:"As air becomes thin.\nI know my final get closer and closer...",
        minY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*15/2.0 +
        GlobalConstant.WINDOW_HEIGHT,
        maxY:GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT + GlobalConstant.WINDOW_HEIGHT*15/2.0 +
        GlobalConstant.WINDOW_HEIGHT*2,
    },
]

GameSceneGameState = {
    pause:0,
    inTheGame:1,
    ending:2
}

PlayerState = {
    onLand:0,
    flying:2,
}

var GameScene = cc.Scene.extend({
    
    m_player:null,
    m_airplanes:null,
    m_hotAirBallons:null,
    m_boats:null,
    m_paperPlanes:null,
    
    m_rotateKey1Pressed:false,
    m_rotateKey2Pressed:false,
    m_launchKeyPressed:false,

    m_mapWidth:null,
    m_mapHeight:null,

    ctor:function(){
        SceneControllerModule.call(this);
        this._super();

        GameSceneConstant.refreshData();
        
        this.m_model = new GameSceneModel()
        this.m_view = new GameSceneView();
        this.addChild(this.m_view);

        this.m_boats = [];
        this.m_airplanes = [];
        this.m_hotAirBallons = [];
        this.m_clouds = [];
        
        this.m_birds = [];
        this.m_helicopters = [];

        this.m_paperPlanes = [];

        this.m_mapWidth = 0;
        this.m_mapHeight = 960;

        this.m_model.m_physicsManager.onCollidePre=function(body1,body2){
            //cc.log("GameScene onCollidePre!")
            if(body1.m_owner == this.m_player.m_model){

                for(var i=0;i<this.m_view.m_waterFgSprites.length;i++){
                    if(body2.m_owner == this.m_view.m_waterFgSprites[i]){
                        //cc.log("player collide water pre!");

                        return false;
                    }
                }

                for(var i=0;i<this.m_airplanes.length;i++){
                    if(body2.m_owner==this.m_airplanes[i].m_model){
                        //cc.log("player collide airplane Pre!");
                        return this.onPlayerCollideWithPlatformPre(this.m_airplanes[i]);
                        // if(this.m_player.m_model.m_pos.y
                        //     -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                        //     >= this.m_airplanes[i].m_pos.y
                        //     + this.m_airplanes[i].m_physicsBody.m_colliderLocalRect.height/2.0
                        //     -GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                        //
                        //     if(this.m_player.m_standPlatform != null
                        //         && this.m_player.m_standPlatform != this.m_airplanes[i]){
                        //         return false;
                        //     }
                        //
                        //     return true;
                        // }else{
                        //     return false;
                        // }

                    }
                }

                for(var i=0;i<this.m_hotAirBallons.length;i++){
                    if(body2.m_owner==this.m_hotAirBallons[i].m_model){
                        //cc.log("player collide hotAirBallon Pre!");
                        return this.onPlayerCollideWithPlatformPre(this.m_hotAirBallons[i]);
                        // if(this.m_player.m_model.m_pos.y
                        //     -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                        //     >= this.m_hotAirBallons[i].m_pos.y
                        //     +this.m_hotAirBallons[i].m_physicsBody.m_colliderLocalRect.height/2.0
                        //     -GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                        //
                        //     if(this.m_player.m_standPlatform != null
                        //         && this.m_player.m_standPlatform != this.m_hotAirBallons[i]){
                        //         return false;
                        //     }
                        //
                        //     return true;
                        // }else{
                        //     return false;
                        // }
                    }
                }

                for(var i=0;i<this.m_clouds.length;i++){
                    if(body2.m_owner==this.m_clouds[i].m_model){
                        //cc.log("player collide cloud Pre!");
                        return this.onPlayerCollideWithPlatformPre(this.m_clouds[i]);
                        // if(this.m_player.m_model.m_pos.y
                        //     -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                        //     >= this.m_clouds[i].m_pos.y
                        //     +this.m_clouds[i].m_physicsBody.m_colliderLocalRect.height/2.0
                        //     -GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                        //
                        //     if(this.m_player.m_standPlatform != null
                        //         && this.m_player.m_standPlatform != this.m_clouds[i]){
                        //         return false;
                        //     }
                        //
                        //     return true;
                        // }else{
                        //     return false;
                        // }
                    }
                }

                for(var i=0;i<this.m_helicopters.length;i++){
                    if(body2.m_owner==this.m_helicopters[i].m_model){
                        //cc.log("player collide helicopter Pre!");
                        return this.onPlayerCollideWithPlatformPre(this.m_helicopters[i]);
                        // if(this.m_player.m_model.m_pos.y
                        //     -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                        //     >= this.m_helicopters[i].m_pos.y
                        //     +this.m_helicopters[i].m_physicsBody.m_colliderLocalRect.height/2.0
                        //     -GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                        //
                        //     if(this.m_player.m_standPlatform != null
                        //         && this.m_player.m_standPlatform != this.m_helicopters[i]){
                        //         return false;
                        //     }
                        //
                        //     return true;
                        // }else{
                        //     return false;
                        // }
                    }
                }

                for(var i=0;i<this.m_paperPlanes.length;i++){
                    if(body2.m_owner==this.m_paperPlanes[i].m_model){
                        //cc.log("player collide paper plane Pre!");
                        return this.onPlayerCollideWithPlatformPre(this.m_paperPlanes[i]);
                        // if(this.m_player.m_model.m_pos.y
                        //     -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                        //     >= this.m_paperPlanes[i].m_pos.y
                        //     +this.m_paperPlanes[i].m_physicsBody.m_colliderLocalRect.height/2.0
                        //     -GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                        //
                        //     if(this.m_player.m_standPlatform != null
                        //         && this.m_player.m_standPlatform != this.m_paperPlanes[i]){
                        //         return false;
                        //     }
                        //
                        //     return true;
                        // }else{
                        //     return false;
                        // }

                    }
                }

            }else if(body2.m_owner == this.m_player.m_model){
                for(var i=0;i<this.m_view.m_waterFgSprites.length;i++){
                    if(body1.m_owner == this.m_view.m_waterFgSprites[i]){
                        //cc.log("player collide water pre!");

                        return false;
                    }
                }

                for(var i=0;i<this.m_airplanes.length;i++){
                    if(body1.m_owner==this.m_airplanes[i].m_model){
                        //cc.log("player collide airplane Pre!");
                        return this.onPlayerCollideWithPlatformPre(this.m_airplanes[i]);
                        // if(this.m_player.m_model.m_pos.y
                        //     -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                        //     >= this.m_airplanes[i].m_pos.y
                        //     + this.m_airplanes[i].m_physicsBody.m_colliderLocalRect.height/2.0
                        //     -GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                        //
                        //     if(this.m_player.m_standPlatform != null
                        //         && this.m_player.m_standPlatform != this.m_airplanes[i]){
                        //         return false;
                        //     }
                        //
                        //     return true;
                        // }else{
                        //     return false;
                        // }
                    }
                }

                for(var i=0;i<this.m_hotAirBallons.length;i++){
                    if(body1.m_owner==this.m_hotAirBallons[i].m_model){
                        //cc.log("player collide hotAirBallons Pre!");
                        return this.onPlayerCollideWithPlatformPre(this.m_hotAirBallons[i]);
                        // if(this.m_player.m_model.m_pos.y
                        //     -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                        //     >= this.m_hotAirBallons[i].m_pos.y
                        //     +this.m_hotAirBallons[i].m_physicsBody.m_colliderLocalRect.height/2.0
                        //     -GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                        //
                        //     if(this.m_player.m_standPlatform != null
                        //         && this.m_player.m_standPlatform != this.m_hotAirBallons[i]){
                        //         return false;
                        //     }
                        //
                        //     return true;
                        // }else{
                        //     return false;
                        // }
                    }
                }

                for(var i=0;i<this.m_clouds.length;i++){
                    if(body1.m_owner==this.m_clouds[i].m_model){
                        //cc.log("player collide cloud Pre!");
                        return this.onPlayerCollideWithPlatformPre(this.m_clouds[i]);
                        // if(this.m_player.m_model.m_pos.y
                        //     -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                        //     >= this.m_clouds[i].m_pos.y
                        //     +this.m_clouds[i].m_physicsBody.m_colliderLocalRect.height/2.0
                        //     -GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                        //
                        //     if(this.m_player.m_standPlatform != null
                        //         && this.m_player.m_standPlatform != this.m_clouds[i]){
                        //         return false;
                        //     }
                        //
                        //     return true;
                        // }else{
                        //     return false;
                        // }
                    }
                }

                for(var i=0;i<this.m_helicopters.length;i++){
                    if(body1.m_owner==this.m_helicopters[i].m_model){
                        //cc.log("player collide helicopter Pre!");
                        return this.onPlayerCollideWithPlatformPre(this.m_helicopters[i]);
                        // if(this.m_player.m_model.m_pos.y
                        //     -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                        //     >= this.m_helicopters[i].m_pos.y
                        //     +this.m_helicopters[i].m_physicsBody.m_colliderLocalRect.height/2.0
                        //     -GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                        //
                        //     if(this.m_player.m_standPlatform != null
                        //         && this.m_player.m_standPlatform != this.m_helicopters[i]){
                        //         return false;
                        //     }
                        //
                        //     return true;
                        // }else{
                        //     return false;
                        // }
                    }
                }

                for(var i=0;i<this.m_paperPlanes.length;i++){
                    if(body1.m_owner==this.m_paperPlanes[i].m_model){
                        //cc.log("player collide paper plane Pre!");
                        return this.onPlayerCollideWithPlatformPre(this.m_paperPlanes[i]);
                        // if(this.m_player.m_model.m_pos.y
                        //     -GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                        //     >= this.m_paperPlanes[i].m_pos.y
                        //     +this.m_paperPlanes[i].m_physicsBody.m_colliderLocalRect.height/2.0
                        //     -GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                        //
                        //     if(this.m_player.m_standPlatform != null
                        //         && this.m_player.m_standPlatform != this.m_paperPlanes[i]){
                        //         return false;
                        //     }
                        //
                        //     return true;
                        // }else{
                        //     return false;
                        // }

                    }
                }
            }
        }.bind(this);
        this.m_model.m_physicsManager.onCollideBegin=function(body1,body2){
            if(body1.m_owner == this.m_player.m_model){
                if(body2.m_owner == null){
                    //cc.log("player collide water bottom begin!");
                    this.m_player.setState(PlayerState.onLand);
                    this.m_player.m_model.m_vel.y = 0;

                    return false;
                }

                for(var i=0;i<this.m_view.m_groundFgSprites.length;i++){
                    if(body2.m_owner == this.m_view.m_groundFgSprites[i]){
                        //cc.log("player collide ground Begin!");
                        // this.m_player.setState(PlayerState.onLand);
                        // this.m_player.m_model.m_vel.y = 0;
                        //this.m_player.m_model.m_vel.x = 0;

                        if(this.m_player.m_model.m_pos.y - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                            >= body2.m_pos.y + body2.m_colliderLocalRect.height-GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                            this.m_player.setState(PlayerState.onLand);
                            this.m_player.m_model.m_vel.y = 0;

                        }else if(this.m_player.m_model.m_pos.x + GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            <= body2.m_pos.x+GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }else if(this.m_player.m_model.m_pos.x - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            >= body2.m_pos.x + body2.m_colliderLocalRect.width-GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }

                        return;
                    }
                }

                for(var i=0;i<this.m_view.m_waterFgSprites.length;i++){
                    if(body2.m_owner == this.m_view.m_waterFgSprites[i]){
                        //cc.log("player collide water Begin!");
                        //go to die!
                        this.enterEnding(GameOverType.drownToDeath);
          
                        return;
                    }
                }

                for(var i=0;i<this.m_airplanes.length;i++){
                    if(body2.m_owner==this.m_airplanes[i].m_model){
                        //cc.log("player collide airplane Begin!");
                        var body1IndexOfBody2 = this.m_model.m_physicsManager.getContactedBodyIndex(body1,body2);
                        if(body1.m_contactedBodies[body1IndexOfBody2].collided == true){
                            this.m_player.setState(PlayerState.onLand);
                            this.m_player.m_model.m_vel.y = 0;
                        }
                        return;
                    }
                }

                for(var i=0;i<this.m_hotAirBallons.length;i++){
                    if(body2.m_owner==this.m_hotAirBallons[i].m_model){
                        //cc.log("player collide hotAirBallon Begin!");
                        var body1IndexOfBody2 = this.m_model.m_physicsManager.getContactedBodyIndex(body1,body2);
                        if(body1.m_contactedBodies[body1IndexOfBody2].collided == true){

                            if(this.m_hotAirBallons[i].m_loads.indexOf(this.m_player)==-1 && this.m_player.m_standPlatform == null){
                                this.m_player.setState(PlayerState.onLand);
                                this.m_player.m_model.m_vel.y = 0;

                                this.m_hotAirBallons[i].m_loads.push(this.m_player);
                                this.m_player.m_standPlatform = this.m_hotAirBallons[i];
                            }
                        }
                        return;
                    }
                }

                for(var i=0;i<this.m_clouds.length;i++){
                    if(body2.m_owner==this.m_clouds[i].m_model){
                        //cc.log("player collide cloud Begin!");
                        var body1IndexOfBody2 = this.m_model.m_physicsManager.getContactedBodyIndex(body1,body2);
                        if(body1.m_contactedBodies[body1IndexOfBody2].collided == true){
                            this.m_player.setState(PlayerState.onLand);
                            this.m_player.m_model.m_vel.y = 0;
                        }
                        return;
                    }
                }

                for(var i=0;i<this.m_boats.length;i++){
                    if(body2.m_owner==this.m_boats[i].m_model){
                        //cc.log("player collide boat Begin!");

                        if(this.m_player.m_model.m_pos.y - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                            >= body2.m_pos.y + body2.m_colliderLocalRect.height/2.0-GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                            this.m_player.setState(PlayerState.onLand);
                            this.m_player.m_model.m_vel.y = 0;

                            if(this.m_boats[i].m_loads.indexOf(this.m_player)==-1 && this.m_player.m_standPlatform == null){
                                this.m_boats[i].m_loads.push(this.m_player);
                                this.m_player.m_standPlatform = this.m_boats[i];
                            }


                        }else if(this.m_player.m_model.m_pos.x + GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            <= body2.m_pos.x - body2.m_colliderLocalRect.width/2.0+GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }else if(this.m_player.m_model.m_pos.x - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            >= body2.m_pos.x + body2.m_colliderLocalRect.width/2.0-GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }

                        return;
                    }
                }

                for(var i=0;i<this.m_birds.length;i++){
                    if(body2.m_owner == this.m_birds[i].m_model){
                        //cc.log("player collide bird Begin!");

                        if(this.m_player.m_model.m_pos.y - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                            >= body2.m_pos.y + body2.m_colliderLocalRect.height/2.0-GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                            if(this.m_player.m_model.m_vel.y<=0){
                                this.m_player.m_model.m_vel.y = Math.max(GameSceneConstant.COLLIDE_FROM_UP_SIDE_MIN_BOUNCE_ACC,-this.m_player.m_model.m_vel.y/2.0);
                            }else{
                                this.m_player.m_model.m_vel.y = Math.max(GameSceneConstant.COLLIDE_FROM_UP_SIDE_MIN_BOUNCE_ACC,this.m_player.m_model.m_vel.y/2.0);
                            }

                        }else if(this.m_player.m_model.m_pos.x + GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            <= body2.m_pos.x - body2.m_colliderLocalRect.width/2.0+GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }else if(this.m_player.m_model.m_pos.x - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            >= body2.m_pos.x + body2.m_colliderLocalRect.width/2.0-GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }else{
                            if(this.m_player.m_model.m_vel.y>0){
                                this.m_player.m_model.m_vel.y = 0;
                            }

                        }

                        return;
                    }
                }

                for(var i=0;i<this.m_helicopters.length;i++){
                    if(body2.m_owner==this.m_helicopters[i].m_model){
                        //cc.log("player collide helicopter Begin!");
                        var body1IndexOfBody2 = this.m_model.m_physicsManager.getContactedBodyIndex(body1,body2);
                        if(body1.m_contactedBodies[body1IndexOfBody2].collided == true){
                            this.m_player.setState(PlayerState.onLand);
                            this.m_player.m_model.m_vel.y = 0;

                            if(this.m_helicopters[i].m_loads.indexOf(this.m_player)==-1 && this.m_player.m_standPlatform == null){
                                this.m_helicopters[i].m_loads.push(this.m_player);
                                this.m_player.m_standPlatform = this.m_helicopters[i];
                            }

                            this.enterEnding(GameOverType.win);
                        }


                        return;
                    }
                }

                for(var i=0;i<this.m_paperPlanes.length;i++){
                    if(body2.m_owner==this.m_paperPlanes[i].m_model){
                        //cc.log("player collide paper planes Begin!");
                        var body1IndexOfBody2 = this.m_model.m_physicsManager.getContactedBodyIndex(body1,body2);
                        if(body1.m_contactedBodies[body1IndexOfBody2].collided == true){

                            if(this.m_paperPlanes[i].m_loads.indexOf(this.m_player)==-1 && this.m_player.m_standPlatform == null){
                                this.m_player.setState(PlayerState.onLand);
                                this.m_player.m_model.m_vel.y = 0;

                                this.m_paperPlanes[i].m_loads.push(this.m_player);
                                this.m_player.m_standPlatform = this.m_paperPlanes[i];
                            }
                        }
                        return;
                    }
                }

            }else if(body2.m_owner == this.m_player.m_model){
                if(body1.m_owner == null){
                    //cc.log("player collide water bottom begin!");
                    //this.m_player.setState(PlayerState.onLand);
                    this.m_player.m_model.m_vel.y = 0;

                    return false;
                }

                for(var i=0;i<this.m_view.m_groundFgSprites.length;i++){

                    if(body1.m_owner == this.m_view.m_groundFgSprites[i]){
                        //cc.log("player collide ground Begin!");

                        if(this.m_player.m_model.m_pos.y - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                            >= body1.m_pos.y + body1.m_colliderLocalRect.height-GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                            this.m_player.setState(PlayerState.onLand);
                            this.m_player.m_model.m_vel.y = 0;

                        }else if(this.m_player.m_model.m_pos.x + GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            <= body1.m_pos.x+GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }else if(this.m_player.m_model.m_pos.x - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            >= body1.m_pos.x + body1.m_colliderLocalRect.width-GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }

                        return;
                    }
                }

                for(var i=0;i<this.m_view.m_waterFgSprites.length;i++){
                    if(body1.m_owner == this.m_view.m_waterFgSprites[i]){
                        //cc.log("player collide water Begin!");
                        //go to die!

                        this.enterEnding(GameOverType.drownToDeath);
                        return;
                    }
                }

                for(var i=0;i<this.m_airplanes.length;i++){
                    if(body1.m_owner==this.m_airplanes[i].m_model){
                        //cc.log("player collide airplane Begin!");

                        var body2IndexOfBody1 = this.m_model.m_physicsManager.getContactedBodyIndex(body2,body1);

                        if(body2.m_contactedBodies[body2IndexOfBody1].collided == true){
                            this.m_player.setState(PlayerState.onLand);
                            this.m_player.m_model.m_vel.y = 0;
                        }
                        return;
                    }
                }

                for(var i=0;i<this.m_hotAirBallons.length;i++){
                    if(body1.m_owner==this.m_hotAirBallons[i].m_model){
                        //cc.log("player collide hotAirBallon Begin!");
                        var body2IndexOfBody1 = this.m_model.m_physicsManager.getContactedBodyIndex(body2,body1);
                        if(body2.m_contactedBodies[body2IndexOfBody1].collided == true){

                            if(this.m_hotAirBallons[i].m_loads.indexOf(this.m_player)==-1 && this.m_player.m_standPlatform == null){
                                this.m_player.setState(PlayerState.onLand);
                                this.m_player.m_model.m_vel.y = 0;
                                this.m_hotAirBallons[i].m_loads.push(this.m_player);
                                this.m_player.m_standPlatform = this.m_hotAirBallons[i];
                            }
                        }
                        return;
                    }
                }

                for(var i=0;i<this.m_clouds.length;i++){
                    if(body1.m_owner==this.m_clouds[i].m_model){
                        //cc.log("player collide cloud Begin!");
                        var body2IndexOfBody1 = this.m_model.m_physicsManager.getContactedBodyIndex(body1,body2);
                        if(body2.m_contactedBodies[body2IndexOfBody1].collided == true){
                            this.m_player.setState(PlayerState.onLand);
                            this.m_player.m_model.m_vel.y = 0;
                        }
                        return;
                    }
                }

                for(var i=0;i<this.m_boats.length;i++){
                    if(body1.m_owner==this.m_boats[i].m_model){
                        //cc.log("player collide boat Begin!");

                        if(this.m_player.m_model.m_pos.y - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                            >= body1.m_pos.y + body1.m_colliderLocalRect.height/2.0-GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                            this.m_player.setState(PlayerState.onLand);

                            this.m_player.m_model.m_vel.y = 0;

                            if(this.m_boats[i].m_loads.indexOf(this.m_player)==-1 && this.m_player.m_standPlatform == null){
                                this.m_boats[i].m_loads.push(this.m_player);
                                this.m_player.m_standPlatform = this.m_boats[i];
                            }

                        }else if(this.m_player.m_model.m_pos.x + GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            <= body1.m_pos.x - body1.m_colliderLocalRect.width/2.0+GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }else if(this.m_player.m_model.m_pos.x - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            >= body1.m_pos.x + body1.m_colliderLocalRect.width/2.0-GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }

                        return;
                    }
                }

                for(var i=0;i<this.m_birds.length;i++){
                    if(body1.m_owner == this.m_birds[i].m_model){
                        //cc.log("player collide bird Begin!");

                        if(this.m_player.m_model.m_pos.y - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
                            >= body1.m_pos.y + body1.m_colliderLocalRect.height/2.0-GameSceneConstant.COLLIDE_CHECK_OFF_Y){
                            if(this.m_player.m_model.m_vel.y<=0){
                                this.m_player.m_model.m_vel.y = Math.max(GameSceneConstant.COLLIDE_FROM_UP_SIDE_MIN_BOUNCE_ACC,-this.m_player.m_model.m_vel.y/2.0);
                            }else{
                                this.m_player.m_model.m_vel.y = Math.max(GameSceneConstant.COLLIDE_FROM_UP_SIDE_MIN_BOUNCE_ACC,this.m_player.m_model.m_vel.y/2.0);
                            }
                        }else if(this.m_player.m_model.m_pos.x + GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            <= body1.m_pos.x - body1.m_colliderLocalRect.width/2.0-GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }else if(this.m_player.m_model.m_pos.x - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_WIDTH/2.0
                            >= body1.m_pos.x + body1.m_colliderLocalRect.width/2.0+GameSceneConstant.COLLIDE_CHECK_OFF_X){
                            this.m_player.m_model.m_vel.x = 0;
                        }else{
                            if(this.m_player.m_model.m_vel.y>0){
                                this.m_player.m_model.m_vel.y = 0;
                            }
                        }

                        return;
                    }
                }

                for(var i=0;i<this.m_helicopters.length;i++){
                    if(body1.m_owner==this.m_helicopters[i].m_model){
                        //cc.log("player collide helicopter Begin!");
                        var body2IndexOfBody1 = this.m_model.m_physicsManager.getContactedBodyIndex(body2,body1);
                        if(body2.m_contactedBodies[body2IndexOfBody1].collided == true){
                            this.m_player.setState(PlayerState.onLand);
                            this.m_player.m_model.m_vel.y = 0;

                            if(this.m_helicopters[i].m_loads.indexOf(this.m_player)==-1 && this.m_player.m_standPlatform == null){
                                this.m_helicopters[i].m_loads.push(this.m_player);
                                this.m_player.m_standPlatform = this.m_helicopters[i];

                                this.enterEnding(GameOverType.win);
                            }
                        }
                        return;
                    }
                }

                for(var i=0;i<this.m_paperPlanes.length;i++){
                    if(body1.m_owner==this.m_paperPlanes[i].m_model){
                        //cc.log("player collide paper planes Begin!");
                        var body2IndexOfBody1 = this.m_model.m_physicsManager.getContactedBodyIndex(body2,body1);
                        if(body2.m_contactedBodies[body2IndexOfBody1].collided == true){

                            if(this.m_paperPlanes[i].m_loads.indexOf(this.m_player)==-1 && this.m_player.m_standPlatform == null){
                                this.m_player.setState(PlayerState.onLand);
                                this.m_player.m_model.m_vel.y = 0;

                                this.m_paperPlanes[i].m_loads.push(this.m_player);
                                this.m_player.m_standPlatform = this.m_paperPlanes[i];
                            }
                        }
                        return;
                    }
                }

            }else{
                for(var i=0;i<this.m_view.m_groundFgSprites.length;i++){
                    if(body1.m_owner == this.m_view.m_groundFgSprites[i]){
                        for(var j=0;j<this.m_boats.length;j++){
                            if(body2.m_owner == this.m_boats[j].m_model){
                                this.m_boats[j].m_model.m_vel.x = -this.m_boats[j].m_model.m_vel.x;
                                return;
                            }
                        }
                    }else if(body2.m_owner == this.m_view.m_groundFgSprites[i]){
                        for(var j=0;j<this.m_boats.length;j++){
                            if(body1.m_owner == this.m_boats[j].m_model){
                                this.m_boats[j].m_model.m_vel.x = -this.m_boats[j].m_model.m_vel.x;
                                return;
                            }
                        }
                    }
                }
            }
        }.bind(this);
        this.m_model.m_physicsManager.onCollideEnd=function(body1,body2){
        }.bind(this);

        this.addFgs();
        this.addPlayer();

        this.addAirplanes();
        this.addHotAirBalloons();
        this.addBoats();
        this.addClouds();
        this.addBirds();
        this.addHelicopters();

        this.addPaperPlanes();

        this.addGUI();
        this.addStoryLabels();
        this.updateWindowMapPos();

        var gameHelpLabel1 = new cc.LabelTTF(
            "- When on land\n  Press Key A and Key S Quickly To Rotate.\n  Press Key SPACE to launch.",
            "arial",
            21);
        gameHelpLabel1.setAnchorPoint(cc.p(0,0));
        gameHelpLabel1.setPosition(cc.p(GlobalConstant.WINDOW_WIDTH/2.0-200,220));
        gameHelpLabel1.setFontFillColor(cc.color(0,33,0,255));

        var gameHelpLabel2 = new cc.LabelTTF(
            "- When flying\n  Press Key LEFT and Key RIGHT to navigate.",
            "arial",
            21);
        gameHelpLabel2 .setAnchorPoint(cc.p(0,0));
        gameHelpLabel2 .setPosition(cc.p(GlobalConstant.WINDOW_WIDTH/2.0-200,150));
        gameHelpLabel2 .setFontFillColor(cc.color(0,33,0,255));

        this.m_view.m_scrollableLayer.addChild(gameHelpLabel1,12);
        this.m_view.m_scrollableLayer.addChild(gameHelpLabel2,12);

    },
    onEnterTransitionDidFinish:function() {
        this._super();

        cc.eventManager.addListener({
            event:cc.EventListener.KEYBOARD,
            swallowTouches:false,

            onKeyPressed:function(keyCode,event){

                switch (this.m_player.m_model.m_state){
                    case PlayerState.onLand:
                        switch (keyCode){
                            case cc.KEY.a:
                                if(this.m_rotateKey1Pressed==false){
                                    //cc.log("rotateKey1Pressed!");
                                    this.m_rotateKey1Pressed = true;

                                    this.m_player.m_model.m_rotateSpeed += GameSceneConstant.PLAYER_ROTATE_ACC_PER_INPUT;

                                }

                                break;
                            case cc.KEY.s:
                                if(this.m_rotateKey2Pressed==false){
                                    //cc.log("rotateKey2Pressed!");
                                    this.m_rotateKey2Pressed = true;

                                    this.m_player.m_model.m_rotateSpeed += GameSceneConstant.PLAYER_ROTATE_ACC_PER_INPUT;

                                }

                                break;
                            case cc.KEY.space:
                                if(this.m_model.m_gameState != GameSceneGameState.inTheGame){
                                    return;
                                }

                                this.m_player.setState(PlayerState.flying);
                                
                                if(this.m_player.m_standPlatform != null){

                                    var platformLoadIndexOfPlayer = this.m_player.m_standPlatform.m_loads.indexOf(this.m_player);
                                    this.m_player.m_standPlatform.m_loads.splice(platformLoadIndexOfPlayer,1);

                                    for(var i=0;i<this.m_hotAirBallons.length;i++){
                                        if(this.m_hotAirBallons[i]==this.m_player.m_standPlatform){
                                            if(this.m_player.m_standPlatform.m_model.m_vel.y>0){
                                                this.m_player.m_model.m_vel.y = this.m_player.m_standPlatform.m_model.m_vel.y;
                                                break;
                                            }
                                        }
                                    }

                                    for(var i=0;i<this.m_paperPlanes.length;i++){
                                        if(this.m_paperPlanes[i]==this.m_player.m_standPlatform){
                                            this.m_player.m_model.m_vel.y = 128.0/GlobalConstant.FPS;
                                            break;
                                        }
                                    }

                                    this.m_player.m_standPlatform = null;

                                }
                                break;
                        }
                        break;
                    case PlayerState.flying:
                        switch (keyCode){
                            case cc.KEY.left:
                                this.m_player.m_model.m_vel.x = Math.max(-GameSceneConstant.PLAYER_MAX_HORIZONTAL_SPEED,
                                    this.m_player.m_model.m_vel.x-GameSceneConstant.PLAYER_HORIZONTAL_ACC_PER_INPUT);
                                break;
                            case cc.KEY.right:
                                this.m_player.m_model.m_vel.x = Math.min(GameSceneConstant.PLAYER_MAX_HORIZONTAL_SPEED,
                                    this.m_player.m_model.m_vel.x+GameSceneConstant.PLAYER_HORIZONTAL_ACC_PER_INPUT);
                                break;
                        }
                        break;
                }
            }.bind(this),
            onKeyReleased:function(keyCode,event){

                switch (this.m_player.m_model.m_state){
                    case PlayerState.onLand:
                        switch (keyCode){
                            case cc.KEY.a:
                                //cc.log("rotateKey1Released!");
                                this.m_rotateKey1Pressed = false;

                                break;
                            case cc.KEY.s:
                                //cc.log("rotateKey2Released!");
                                this.m_rotateKey2Pressed = false;

                                break;

                            case cc.KEY.space:
                                if(this.m_model.m_gameState != GameSceneGameState.inTheGame){
                                    return;
                                }
                                //cc.log("launchKeyReleased!");
                                //this.m_launchKeyPressed = false;

                                break;
                        }
                        break;
                    case PlayerState.flying:
                        break;
                }

            }.bind(this)

        },this.m_view);

        cc.audioEngine.playMusic(res.bgm1_mp3,true);
        this.m_model.m_gameState = GameSceneGameState.inTheGame;
        this.schedule(this.update.bind(this),1/GlobalConstant.FPS);
    },
    onExitTransitionDidStart:function(){
        this._super();
        cc.audioEngine.stopMusic();
        this.unscheduleAllCallbacks();

        cc.eventManager.removeAllListeners();

        //clear test label text
        if(GameSceneConstant.SHOW_TEST_LABELS == true) {
            for (var i = 0; i < GameSceneConstant.TEST_LABEL_NUM; i++) {
                this.m_view.m_testLabels[i].setString("");
            }
        }
    },
    update:function(dt){
        this._super(dt);

        switch (this.m_model.m_gameState){
            case GameSceneGameState.pause:
                this.updateWindowMapPos();
                break;
            case GameSceneGameState.inTheGame:
                this.m_player.update(dt,this);

                for(var i=0;i<this.m_airplanes.length;i++){
                    this.m_airplanes[i].update(dt,this);
                }

                for(var i=0;i<this.m_boats.length;i++){
                    this.m_boats[i].update(dt,this);
                }
                for(var i=0;i<this.m_hotAirBallons.length;i++){
                    this.m_hotAirBallons[i].update(dt,this);
                }
                for(var i=0;i<this.m_birds.length;i++){
                    this.m_birds[i].update(dt,this);
                }
                for(var i=0;i<this.m_clouds.length;i++){
                    this.m_clouds[i].update(dt,this);
                }
                for(var i=0;i<this.m_helicopters.length;i++){
                    this.m_helicopters[i].update(dt,this);
                }
                for(var i=0;i<this.m_paperPlanes.length;i++){
                    this.m_paperPlanes[i].update(dt,this);
                }

                this.updateWaterMove();
                this.updateWindowMapPos();
                //this.m_model.m_physicsManager.update(dt);

                break;
            case GameSceneGameState.ending:
                switch (this.m_model.m_gameEndingType){
                    case GameOverType.drownToDeath:
                        if(this.m_model.m_gameEndingCounter<=0){
                            cc.director.runScene(new GameOverScene(this.m_model.m_gameEndingType));
                        }else{
                            this.m_model.m_gameEndingCounter -= dt;
                        }

                        break;
                    case GameOverType.win:


                        break;

                }

                this.m_player.update(dt,this);

                for(var i=0;i<this.m_airplanes.length;i++){
                    this.m_airplanes[i].update(dt,this);
                }

                for(var i=0;i<this.m_boats.length;i++){
                    this.m_boats[i].update(dt,this);
                }
                for(var i=0;i<this.m_hotAirBallons.length;i++){
                    this.m_hotAirBallons[i].update(dt,this);
                }
                for(var i=0;i<this.m_birds.length;i++){
                    this.m_birds[i].update(dt,this);
                }
                for(var i=0;i<this.m_clouds.length;i++){
                    this.m_clouds[i].update(dt,this);
                }
                for(var i=0;i<this.m_helicopters.length;i++){
                    this.m_helicopters[i].update(dt,this);
                }
                for(var i=0;i<this.m_paperPlanes.length;i++){
                    this.m_paperPlanes[i].update(dt,this);
                }

                this.updateWaterMove();

                if(this.m_model.m_gameEndingType != GameOverType.win){
                    this.updateWindowMapPos();
                }

                //this.m_model.m_physicsManager.update(dt);

                break;
        }

        this.m_view.m_heightDisplayLabel.setString("Current Height: "+
            Math.round(this.m_player.m_model.m_pos.y
                - GameSceneConstant.PLAYER_PHYSICS_BODY_RECT_HEIGHT/2.0
            - GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT));

        this.updateStoryLabels();
        if(GameSceneConstant.SHOW_TEST_LABELS == true){
            this.updateTestLabels();
        }
    },

    addFgs:function(){

        for(var i=0;i<GameSceneConstant.GROUND_FG_NUM;i++) {
            var groundFg1 = new cc.Sprite(res.groundFg_png);
            groundFg1.setAnchorPoint(cc.p(0, 0));
            groundFg1.setPosition(cc.p(this.m_mapWidth, 0));
            this.m_view.m_scrollableLayer.addChild(groundFg1, GameSceneConstant.GOUND_FG_SCROLLABLE_LAYER_Z_ORDER);


            //this.m_view.m_bgSubSprites[this.m_view.m_bgSubSprites.length] = groundFg;
            this.m_view.m_bgSubSprites.push(groundFg1);
            this.m_view.m_groundFgSprites.push(groundFg1);

            this.m_mapWidth += groundFg1.getContentSize().width;

            var groundPhysicsBody1 = new RectPhysicsBody(
                groundFg1.getPositionX(), groundFg1.getPositionY(),
                Geometry.createRect(
                    0, 0,
                    GameSceneConstant.GROUND_PHYSICS_BODY_WIDTH,
                    GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT)
            );

            groundPhysicsBody1.m_owner=groundFg1;

            this.m_model.m_physicsManager.m_physicsBodies.push(groundPhysicsBody1);

            //if(GlobalConstant.SHOW_PHYSICS_BODY_COLLIDER == true){
                var groundPhysicsBody1LayerColor = new cc.LayerColor(cc.color(0, 233, 0, 88),
                    GameSceneConstant.GROUND_PHYSICS_BODY_WIDTH,
                    GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT);
                groundPhysicsBody1LayerColor.setPosition(cc.p(0, 0));
                groundFg1.addChild(groundPhysicsBody1LayerColor);
            //}

        }


        var waterFg = new cc.Sprite();
        waterFg.setContentSize(cc.size(GameSceneConstant.WATER_PHYSICS_BODY_WIDTH,
            GameSceneConstant.WATER_PHYSICS_BODY_HEIGHT));

        waterFg.setAnchorPoint(cc.p(0,0));
        waterFg.setPosition(cc.p(
            this.m_mapWidth,0));

        this.m_view.m_scrollableLayer.addChild(waterFg,GameSceneConstant.WATER_FG_SCROLLABLE_LAYER_Z_ORDER);

        //this.m_view.m_bgSubSprites[this.m_view.m_bgSubSprites.length] = waterFg;
        this.m_view.m_bgSubSprites.push(waterFg);

        //this.m_view.m_waterFgSubSprites = [];
        for(var i=0;i<GameSceneConstant.WATER_SUB_SPRITE_NUM;i++){
            var waterFgSubSprite = new cc.Sprite(res.waterFg_png);
            this.m_view.m_waterFgSubSprites[i] = waterFgSubSprite;
            waterFgSubSprite.setAnchorPoint(cc.p(0,0));
            waterFgSubSprite.setPosition(cc.p(waterFgSubSprite.getContentSize().width*i,0));
            waterFg.addChild(waterFgSubSprite,1+i);
        }

        if(GlobalConstant.SHOW_PHYSICS_BODY_COLLIDER == true){
            var waterPhysicsBodyLayerColor = new cc.LayerColor(
                cc.color(255,0,0,50),
                GameSceneConstant.WATER_PHYSICS_BODY_WIDTH,
                GameSceneConstant.WATER_PHYSICS_BODY_HEIGHT);
            waterPhysicsBodyLayerColor.setPosition(cc.p(0,0));
            waterFg.addChild(waterPhysicsBodyLayerColor,3);
        }

        this.m_mapWidth += GameSceneConstant.WATER_PHYSICS_BODY_WIDTH;

        var waterPhysicsBody = new RectPhysicsBody(
            waterFg.getPositionX(),waterFg.getPositionY(),
            Geometry.createRect(
                0, 0,
                GameSceneConstant.WATER_PHYSICS_BODY_WIDTH,
                GameSceneConstant.WATER_PHYSICS_BODY_HEIGHT)
            );

        waterPhysicsBody.m_owner = waterFg;
        waterPhysicsBody.m_collisionGroup = 1;

        this.m_view.m_waterFgSprites.push(waterFg);
        this.m_model.m_physicsManager.m_physicsBodies.push(waterPhysicsBody);

        var waterBottomPhysicsBody = new RectPhysicsBody(
            waterFg.getPositionX(),waterFg.getPositionY(),
            Geometry.createRect(
                0, 0,
                GameSceneConstant.WATER_PHYSICS_BODY_WIDTH,
                10)
        );
        this.m_model.m_physicsManager.m_physicsBodies.push(waterBottomPhysicsBody);


        // var groundFg2 = new cc.Sprite(res.groundFg_png);
        // groundFg2.setAnchorPoint(cc.p(0,0));
        // groundFg2.setPosition(cc.p(this.m_mapWidth,0));
        // this.m_view.m_scrollableLayer.addChild(groundFg2,GameSceneConstant.GOUND_FG_SCROLLABLE_LAYER_Z_ORDER);
        //
        // //this.m_view.m_bgSubSprites[this.m_view.m_bgSubSprites.length] = groundFg;
        // this.m_view.m_bgSubSprites.push(groundFg2);
        //
        // this.m_mapWidth += groundFg2.getContentSize().width;
        //
        // var groundPhysicsBody2 = new RectPhysicsBody(
        //     groundFg2.getPositionX(),groundFg2.getPositionY(),
        //     Geometry.createRect(
        //         0, 0,
        //         GameSceneConstant.GROUND_PHYSICS_BODY_WIDTH,
        //         GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT)
        //     );
        // this.m_model.m_physicsManager.m_physicsBodies.push(groundPhysicsBody2);
        //
        // var groundPhysicsBody2LayerColor = new cc.LayerColor(cc.color(255,0,0,50),
        //     GameSceneConstant.GROUND_PHYSICS_BODY_WIDTH,
        //     GameSceneConstant.GROUND_PHYSICS_BODY_HEIGHT);
        // groundPhysicsBody2LayerColor.setPosition(cc.p(0,0));
        // groundFg2.addChild(groundPhysicsBody2LayerColor);

    },
    addPlayer:function(){
        this.m_player = new Player(
            GameSceneConstant.PLAYER_INIT_POS_X,
            GameSceneConstant.PLAYER_INIT_POS_Y);

        this.m_player.m_model.m_rotateSpeed = 0;
        this.m_player.setState(PlayerState.onLand);

        this.m_view.m_scrollableLayer.addChild(this.m_player.m_sprite,GameSceneConstant.PLAYER_SPRITE_SCROLLABLE_LAYER_Z_ORDER)
        this.m_model.m_physicsManager.m_physicsBodies.push(this.m_player.m_model.m_physicsBody);


    },
    addAirplanes:function(){
        for(var i=0;i<AirplanesData.length;i++){
            var airplaneData = AirplanesData[i];
            var airplane = new Airplane(
                airplaneData.initPosX,
                airplaneData.initPosY);

            this.m_airplanes.push(airplane);

            this.m_view.m_scrollableLayer.addChild(airplane.m_sprite,GameSceneConstant.AIRPLANE_SPRITE_SCROLLABLE_LAYER_Z_ORDER);
            this.m_model.m_physicsManager.m_physicsBodies.push(airplane.m_model.m_physicsBody);
        }

    },
    addBoats:function () {

        var boat = new Boat(GameSceneConstant.BOAT_INIT_POS_X,
            GameSceneConstant.BOAT_INIT_POS_Y);

        this.m_boats.push(boat);

        this.m_view.m_scrollableLayer.addChild(boat.m_backSprite,GameSceneConstant.BOAT_BACK_SPRITE_SCROLLABLE_LAYER_Z_ORDER);
        this.m_view.m_scrollableLayer.addChild(boat.m_frontSprite,GameSceneConstant.BOAT_FRONT_SPRITE_SCROLLABLE_LAYER_Z_ORDER);
        this.m_model.m_physicsManager.m_physicsBodies.push(boat.m_model.m_physicsBody);
    },
    addHotAirBalloons:function(){

        for(var i=0;i<HotAirBalloonsData.length;i++){
            var hotAirBalloonData = HotAirBalloonsData[i];
            var hotAirBallon = new HotAirBalloon(
                hotAirBalloonData.initPosX,
                hotAirBalloonData.initPosY,
                hotAirBalloonData.initVelX,
                hotAirBalloonData.initVelY,
                hotAirBalloonData.moveRange);
            this.m_hotAirBallons.push(hotAirBallon);

            this.m_view.m_scrollableLayer.addChild(hotAirBallon.m_sprite,GameSceneConstant.HOT_AIR_BALLOON_SPRITE_SCROLLABLE_LAYER_Z_ORDER);
            this.m_model.m_physicsManager.m_physicsBodies.push(hotAirBallon.m_model.m_physicsBody);
        }
    },

    addClouds:function(){
        for(var i=0;i<CloudsData.length;i++){
            var cloudData = CloudsData[i];
            var cloud = new Cloud(
                cloudData.initPosX,
                cloudData.initPosY);

            this.m_clouds.push(cloud);

            this.m_view.m_scrollableLayer.addChild(cloud.m_sprite,GameSceneConstant.CLOUD_SPRITE_SCROLLABLE_LAYER_Z_ORDER);
            this.m_model.m_physicsManager.m_physicsBodies.push(cloud.m_model.m_physicsBody);
        }
    },
    addBirds:function(){
        for(var i=0;i<BirdsData.length;i++){
            var birdData = BirdsData[i];
            var bird = new Bird(
                birdData.initPosX,
                birdData.initPosY,
                birdData.initVelX,
                birdData.initVelY,
                birdData.moveRange);

            this.m_birds.push(bird);

            this.m_view.m_scrollableLayer.addChild(bird.m_sprite,GameSceneConstant.BIRD_SPRITE_SCROLLABLE_LAYER_Z_ORDER);
            this.m_model.m_physicsManager.m_physicsBodies.push(bird.m_model.m_physicsBody);
        }
    },

    addHelicopters:function(){
        for(var i=0;i<HelicoptersData.length;i++){
            var helicopterData = HelicoptersData[i];
            var helicopter = new Helicopter(
                helicopterData.initPosX,
                helicopterData.initPosY,
                helicopterData.initVelX,
                helicopterData.initVelY,
                helicopterData.moveRange);

            this.m_helicopters.push(helicopter);

            this.m_view.m_scrollableLayer.addChild(helicopter.m_sprite,GameSceneConstant.HELICOPTER_SPRITE_SCROLLABLE_LAYER_Z_ORDER);
            this.m_model.m_physicsManager.m_physicsBodies.push(helicopter.m_model.m_physicsBody);
        }
    },
    addPaperPlanes:function(){
        for(var i=0;i<PaperPlanesData.length;i++){
            var paperPlaneData = PaperPlanesData[i];
            var paperPlane = new PaperPlane(
                paperPlaneData.initPosX,
                paperPlaneData.initPosY,
                paperPlaneData.initVelX,
                paperPlaneData.initVelY,
                paperPlaneData.moveRange);

            this.m_paperPlanes.push(paperPlane);

            this.m_view.m_scrollableLayer.addChild(paperPlane.m_sprite,GameSceneConstant.PAPER_PLANE_SPRITE_SCROLLABLE_LAYER_Z_ORDER);
            this.m_model.m_physicsManager.m_physicsBodies.push(paperPlane.m_model.m_physicsBody);
        }
    },

    addGUI:function(){
        var heightDisplayLabel = new cc.LabelTTF("","Marker Felt",28);
        heightDisplayLabel.setFontFillColor(cc.color(0,0,0,255));
        heightDisplayLabel.setAnchorPoint(cc.p(0,1));
        heightDisplayLabel.setPosition(cc.p(12,GlobalConstant.WINDOW_HEIGHT-12));
        this.m_view.m_heightDisplayLabel = heightDisplayLabel;

        this.m_view.addChild(heightDisplayLabel,GameSceneConstant.HEIGHT_DISPLAY_LABEL_SCENE_VIEW_Z_ORDER);
    },
    addStoryLabels:function(){
        this.m_view.m_storyLabels = [];
        for(var i=0;i<GameSceneConstant.STORY_LABELS_DATA.length;i++){

            this.m_view.m_storyLabels[i] = new cc.LabelTTF(GameSceneConstant.STORY_LABELS_DATA[i].text,"",38);
            this.m_view.m_storyLabels[i].setAnchorPoint(cc.p(0.5,0.5));
            this.m_view.m_storyLabels[i].setPosition(cc.p(GlobalConstant.WINDOW_WIDTH/2.0,GlobalConstant.WINDOW_HEIGHT*5/6.0));
            this.m_view.m_storyLabels[i].setFontFillColor(cc.color(0,0,0,255));
            this.m_view.m_storyLabels[i].setOpacity(0);
            this.m_view.m_storyLabels[i].setTag(0);

            this.m_view.addChild(this.m_view.m_storyLabels[i],GameSceneConstant.STORY_LABEL_SCENE_VIEW_Z_ORDER);

        }
    },
    updateTestLabels:function(){
        this.m_view.m_testLabels[0].setString("player rotate speed: "+this.m_player.m_model.m_rotateSpeed);
        this.m_view.m_testLabels[1].setString("player vel x:"+this.m_player.m_model.m_vel.x+" vel y:"+this.m_player.m_model.m_vel.y);
        this.m_view.m_testLabels[2].setString("player pos x:"+this.m_player.m_model.m_pos.x+" pos y:"+this.m_player.m_model.m_pos.y);
        this.m_view.m_testLabels[3].setString("boat pos x:"+this.m_boats[0].m_model.m_pos.x+" pos y:"+this.m_boats[0].m_model.m_pos.y);
        this.m_view.m_testLabels[4].setString("player standPlatform:"+this.m_player.m_standPlatform);

    },
    updateWaterMove:function(){
        for(var i=0;i<GameSceneConstant.WATER_SUB_SPRITE_NUM;i++){
            var oldSpritePosX = this.m_view.m_waterFgSubSprites[i].getPositionX();
            var newSpritePosX = oldSpritePosX-GameSceneConstant.WATER_FLOW_SPEED;
            if(newSpritePosX<=-this.m_view.m_waterFgSubSprites[i].getContentSize().width){
                newSpritePosX += GameSceneConstant.WATER_SUB_SPRITE_NUM*this.m_view.m_waterFgSubSprites[i].getContentSize().width;
            }
            this.m_view.m_waterFgSubSprites[i].setPositionX(newSpritePosX);
        }
    },
    updateWindowMapPos:function(){

        var playerSpriteMapPosX = this.m_player.m_sprite.getPositionX()*this.m_view.m_scrollableLayer.getScale();
        var playerSpriteMapPosY = this.m_player.m_sprite.getPositionY()*this.m_view.m_scrollableLayer.getScale();

        if(playerSpriteMapPosX>this.m_mapWidth - GlobalConstant.WINDOW_WIDTH + GameSceneConstant.MAX_PLAYER_SPRITE_WIN_POS_X){
            var bgSubSprites = this.m_view.m_bgSubSprites;
            var headMostSprite = bgSubSprites[0];
            for(var i=1;i<bgSubSprites.length;i++){
                if(bgSubSprites[i].getPositionX()<headMostSprite.getPositionX()){
                    headMostSprite = bgSubSprites[i];
                }
            }

            var moveX = headMostSprite.getContentSize().width;

            var scrollableLayerNodes = this.m_view.m_scrollableLayer.getChildren();
            for(var i=0;i<scrollableLayerNodes.length;i++){
                var oldNodePosX = scrollableLayerNodes[i].getPositionX();
                var newNodePosX = oldNodePosX-moveX;
                if(newNodePosX<0){
                    newNodePosX += this.m_mapWidth;
                }
                scrollableLayerNodes[i].setPositionX(newNodePosX);
            }

            var physicsBodies = this.m_model.m_physicsManager.m_physicsBodies;
            for(var i=0;i<physicsBodies.length;i++){
                var oldBodyPosX = physicsBodies[i].m_pos.x;
                var newBodyPosX = oldBodyPosX-moveX;
                if(newBodyPosX<0){
                    newBodyPosX += this.m_mapWidth;
                }
                physicsBodies[i].m_pos.x = newBodyPosX;
            }

        }else if(playerSpriteMapPosX<GameSceneConstant.MIN_PLAYER_SPRITE_WIN_POS_X){
            var bgSubSprites = this.m_view.m_bgSubSprites;
            var backMostSprite = bgSubSprites[0];
            for(var i=1;i<bgSubSprites.length;i++){
                if(bgSubSprites[i].getPositionX()>backMostSprite.getPositionX()){
                    backMostSprite = bgSubSprites[i];

                }
            }

            var moveX = backMostSprite.getContentSize().width;

            var scrollableLayerNodes = this.m_view.m_scrollableLayer.getChildren();
            for(var i=0;i<scrollableLayerNodes.length;i++){
                var oldNodePosX = scrollableLayerNodes[i].getPositionX();
                var newNodePosX = oldNodePosX+moveX;
                if(newNodePosX>=this.m_mapWidth){
                    newNodePosX -= this.m_mapWidth;
                }
                scrollableLayerNodes[i].setPositionX(newNodePosX);
            }

            var physicsBodies = this.m_model.m_physicsManager.m_physicsBodies;
            for(var i=0;i<physicsBodies.length;i++){
                var oldBodyPosX = physicsBodies[i].m_pos.x;
                var newBodyPosX = oldBodyPosX+moveX;
                if(newBodyPosX>=this.m_mapWidth){
                    newBodyPosX -= this.m_mapWidth;
                }
                physicsBodies[i].m_pos.x = newBodyPosX;
            }
        }


        playerSpriteMapPosX = this.m_player.m_sprite.getPositionX()*this.m_view.m_scrollableLayer.getScale();
        playerSpriteMapPosY = this.m_player.m_sprite.getPositionY()*this.m_view.m_scrollableLayer.getScale();

        var mapPosX = this.m_view.m_scrollableLayer.getPositionX();
        var mapPosY = this.m_view.m_scrollableLayer.getPositionY();
        var playerSpriteWinPosX = playerSpriteMapPosX+mapPosX;
        var playerSpriteWinPosY = playerSpriteMapPosY+mapPosY;

        if(playerSpriteWinPosX > GameSceneConstant.MAX_PLAYER_SPRITE_WIN_POS_X){
            this.m_view.m_scrollableLayer.setPositionX(mapPosX-(playerSpriteWinPosX-GameSceneConstant.MAX_PLAYER_SPRITE_WIN_POS_X));
        }else if(playerSpriteWinPosX < GameSceneConstant.MIN_PLAYER_SPRITE_WIN_POS_X){
            this.m_view.m_scrollableLayer.setPositionX(mapPosX+(GameSceneConstant.MIN_PLAYER_SPRITE_WIN_POS_X-playerSpriteWinPosX));
        }

        if(playerSpriteWinPosY > GameSceneConstant.MAX_PLAYER_SPRITE_WIN_POS_Y){
            this.m_view.m_scrollableLayer.setPositionY(mapPosY-(playerSpriteWinPosY-GameSceneConstant.MAX_PLAYER_SPRITE_WIN_POS_Y));
        }else if(playerSpriteWinPosY < GameSceneConstant.MIN_PLAYER_SPRITE_WIN_POS_Y){
            this.m_view.m_scrollableLayer.setPositionY(mapPosY+(GameSceneConstant.MIN_PLAYER_SPRITE_WIN_POS_Y-playerSpriteWinPosY));
        }
    },

    updateStoryLabels:function(){
        for(var i=0;i<GameSceneConstant.STORY_LABELS_DATA.length;i++){
            if(this.m_player.m_model.m_pos.y<=GameSceneConstant.STORY_LABELS_DATA[i].maxY
            && this.m_player.m_model.m_pos.y>=GameSceneConstant.STORY_LABELS_DATA[i].minY){
                if(this.m_view.m_storyLabels[i].getTag() == 0){
                    this.m_view.m_storyLabels[i].setTag(1);
                    //this.m_view.m_storyLabels[i].setOpacity(0);
                    this.m_view.m_storyLabels[i].runAction(cc.fadeTo(1.0,255));
                }
            }else{
                if(this.m_view.m_storyLabels[i].getTag() == 1){
                    this.m_view.m_storyLabels[i].setTag(0);
                    this.m_view.m_storyLabels[i].runAction(cc.fadeTo(1.0,0));
                }
            }

            // if(this.m_player.m_model.m_pos.y<=GameSceneConstant.STORY_LABELS_DISPLAY_RANGE[i].maxY){
            //     break;
            // }
        }
    },

    enterEnding:function(gameOverType){
        switch (gameOverType){
            case GameOverType.drownToDeath:
                cc.audioEngine.stopMusic();
               
                this.m_model.m_gameEndingCounter = GameSceneConstant.GAME_ENDING_DELAY_TIME;

                break;
            case GameOverType.win:
                cc.audioEngine.stopMusic();

                var endingLabel = new cc.LabelTTF("","arial",38);
                endingLabel.setFontFillColor(cc.color(0,0,0,255));
                endingLabel.setAnchorPoint(cc.p(0.5,0.5));
                endingLabel.setOpacity(0);
                this.m_view.addChild(endingLabel,GameSceneConstant.ENDING_LABEL_SCENE_VIEW_Z_ORDER)

                this.runAction(cc.sequence(
                    cc.delayTime(0.5),
                    cc.callFunc(function(){
                        var helicopterPosX = this.m_helicopters[0].m_model.m_pos.x-this.m_helicopters[0].m_model.m_displacementCounter.x;
                        var helicopterPosY = this.m_helicopters[0].m_model.m_pos.y-this.m_helicopters[0].m_model.m_displacementCounter.y;

                        this.m_view.m_scrollableLayer.runAction(cc.moveTo(1.0,
                            cc.p(-(helicopterPosX-GlobalConstant.WINDOW_WIDTH/2),
                                -(helicopterPosY-GlobalConstant.WINDOW_HEIGHT/6))
                        ));

                    }.bind(this)),
                    cc.delayTime(1.0),
                    cc.callFunc(function(){
                        cc.audioEngine.playMusic(res.bgm2_mp3,true);
                        endingLabel.setPosition(cc.p(GlobalConstant.WINDOW_WIDTH/2,
                            GlobalConstant.WINDOW_HEIGHT*3/4));
                        endingLabel.setString("Finally bamboo-copter get his future!");

                        endingLabel.runAction(cc.sequence(
                            cc.fadeIn(1.0),
                            cc.delayTime(1.0),
                            cc.fadeOut(1.0)
                        ));

                    }.bind(this)),
                    cc.delayTime(4.0),
                    cc.callFunc(function(){
                        endingLabel.setPosition(cc.p(GlobalConstant.WINDOW_WIDTH/2,
                            GlobalConstant.WINDOW_HEIGHT*3/4));
                        endingLabel.setString("- Game Design\n  Atom & Tincy");

                        endingLabel.runAction(cc.sequence(
                            cc.fadeIn(1.0),
                            cc.delayTime(1.0),
                            cc.fadeOut(1.0)
                        ));

                    }.bind(this)),
                    cc.delayTime(4.0),
                    cc.callFunc(function(){
                        endingLabel.setPosition(cc.p(GlobalConstant.WINDOW_WIDTH/2,
                            GlobalConstant.WINDOW_HEIGHT*3/4));
                        endingLabel.setString("- Programming\n  Atom");

                        endingLabel.runAction(cc.sequence(
                            cc.fadeIn(1.0),
                            cc.delayTime(1.0),
                            cc.fadeOut(1.0)
                        ));

                    }.bind(this)),
                    cc.delayTime(4.0),
                    cc.callFunc(function(){
                        endingLabel.setPosition(cc.p(GlobalConstant.WINDOW_WIDTH/2,
                            GlobalConstant.WINDOW_HEIGHT*3/4));
                        endingLabel.setString("- Game Arts\n  Tincy");

                        endingLabel.runAction(cc.sequence(
                            cc.fadeIn(1.0),
                            cc.delayTime(1.0),
                            cc.fadeOut(1.0)
                        ));

                    }.bind(this)),
                    cc.delayTime(4.0),
                    cc.callFunc(function(){
                        endingLabel.setPosition(cc.p(GlobalConstant.WINDOW_WIDTH/2,
                            GlobalConstant.WINDOW_HEIGHT*3/4));
                        endingLabel.setString("- Audio\n  Garage Band");

                        endingLabel.runAction(cc.sequence(
                            cc.fadeIn(1.0),
                            cc.delayTime(1.0),
                            cc.fadeOut(1.0)
                        ));

                    }.bind(this)),
                    cc.delayTime(4.0),
                    cc.callFunc(function(){
                        endingLabel.setPosition(cc.p(GlobalConstant.WINDOW_WIDTH/2,
                            GlobalConstant.WINDOW_HEIGHT*3/4));
                        endingLabel.setString("Long live Ludum Dare!");

                        endingLabel.runAction(cc.repeatForever(cc.sequence(
                            cc.fadeTo(1.0,255),
                            cc.delayTime(1.0),
                            cc.fadeTo(1.0,128)
                        )));

                    }.bind(this)),
                    cc.delayTime(5.0),
                    cc.callFunc(function(){
                        var playAgainLabel = new cc.LabelTTF("Fly Again!","Marker Felt",28);
                        playAgainLabel.setFontFillColor(cc.color(192,128,0,255));
                        playAgainLabel.setAnchorPoint(cc.p(1.0,0.0));
                        playAgainLabel.setPosition(cc.p(GlobalConstant.WINDOW_WIDTH-16,16));
                        this.m_view.addChild(playAgainLabel,GameSceneConstant.PLAY_AGAIN_LABEL_SCENE_VIEW_Z_ORDER);

                        cc.eventManager.addListener({
                            event:cc.EventListener.TOUCH_ONE_BY_ONE,
                            swallowTouches:true,
                            onTouchBegan: function(touch,event){

                                var playAgainLabelBoudingBox = playAgainLabel.getBoundingBox();
                                var touchPos = touch.getLocation();
                                if(touchPos.x >= playAgainLabelBoudingBox.x
                                    && touchPos.x <= playAgainLabelBoudingBox.x+playAgainLabelBoudingBox.width
                                    && touchPos.y >= playAgainLabelBoudingBox.y
                                    && touchPos.y <= playAgainLabelBoudingBox.y+playAgainLabelBoudingBox.height){

                                    playAgainLabel.runAction(cc.scaleTo(0.2,1.2));

                                    return true;
                                }else{
                                    //cc.log("touch began! but not in tryAgainLabelBoudingBox");
                                    return false;
                                }
                            }.bind(this),
                            onTouchEnded:function(touch,event){
                                playAgainLabel.stopAllActions();
                                playAgainLabel.runAction(cc.scaleTo(0.2,1.0));
                                this.runAction(cc.sequence(
                                    cc.delayTime(0.2),
                                    cc.callFunc(function(){
                                        GameSceneConstant.refreshData();
                                        var sceneTransition = new cc.TransitionFade(1.0,new GameScene());
                                        cc.director.runScene(sceneTransition);

                                    }.bind(this))
                                ));

                            }.bind(this)
                        },playAgainLabel);

                    }.bind(this))
                ));
                break;
        }
        this.m_model.m_gameState = GameSceneGameState.ending;
        this.m_model.m_gameEndingType = gameOverType;

        
    },

    onPlayerCollideWithPlatformPre:function(platform){
        var playerBody = this.m_player.m_model.m_physicsBody;
        var platformBody = platform.m_model.m_physicsBody;
        var y1 = playerBody.m_pos.y
        +playerBody.m_colliderLocalRect.y;
        var y2 = platformBody.m_pos.y
            +platformBody.m_colliderLocalRect.y
            +platformBody.m_colliderLocalRect.height
            -GameSceneConstant.COLLIDE_CHECK_OFF_Y;
        if(playerBody.m_pos.y
            +playerBody.m_colliderLocalRect.y
            >= platformBody.m_pos.y
            +platformBody.m_colliderLocalRect.y
            +platformBody.m_colliderLocalRect.height
            -GameSceneConstant.COLLIDE_CHECK_OFF_Y){

            if(this.m_player.m_standPlatform != null
                && this.m_player.m_standPlatform != platform){
                return false;
            }

            return true;
        }else{
            return false;
        }
    }
});
