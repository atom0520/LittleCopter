/**
 * Created by atom on 16/8/27.
 */
var GameSceneView = cc.LayerColor.extend({
    m_testLabels:null,
    m_scrollableLayer:null,

    m_groundFgSprites:null,
    m_waterFgSprites:null,

    m_waterFgSubSprites:null,

    m_bgSubSprites:null,

    m_heightDisplayLabel:null,

    m_storyLabels:null,

    ctor:function(){
        this._super();
        this.init(cc.color(240,255,255,255));

        this.m_groundFgSprites = [];
        this.m_waterFgSprites = [];
        
        this.m_waterFgSubSprites = [];

        this.m_bgSubSprites = [];

        this.m_scrollableLayer = new cc.Layer();
        this.addChild(this.m_scrollableLayer,GameSceneConstant.SCROLLABLE_LAYER_SCENE_VIEW_Z_ORDER);
        
        if(GameSceneConstant.SHOW_TEST_LABELS == true){
            this.m_testLabels = [];
            for(var i=0;i<GameSceneConstant.TEST_LABEL_NUM;i++){

                this.m_testLabels[i] = new cc.LabelTTF("","",18);
                this.m_testLabels[i].setAnchorPoint(cc.p(0,0));
                this.m_testLabels[i].setPosition(cc.p(18,18+i*32));
                this.m_testLabels[i].setFontFillColor(cc.color(0,0,0,255));

                this.addChild(this.m_testLabels[i],GameSceneConstant.TEST_LABEL_SCENE_VIEW_Z_ORDER);

            }
        }
        
      


        
    }
});