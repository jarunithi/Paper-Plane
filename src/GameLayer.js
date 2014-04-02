var score,time;
var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.Bg1 =new Background();
        this.Bg2 =new Background();
        this.Bg3 =new Background();
        this.Bg1.setPosition( new cc.Point( 0, 300 ) );
        this.Bg2.setPosition( new cc.Point( 800, 300 ) );
        this.Bg3.setPosition( new cc.Point( 1600, 300 ) );
        this.addChild(this.Bg1);
        this.addChild(this.Bg2);
        this.addChild(this.Bg3);
        this.Bg1.scheduleUpdate();
        this.Bg2.scheduleUpdate();
        this.Bg3.scheduleUpdate();
        this.plane=new Plane();
        this.plane.setPosition(new cc.Point(200,300));
        this.addChild(this.plane);
        this.plane.scheduleUpdate();
        this.scheduleUpdate();  
        this.setKeyboardEnabled( true );
    
        return true;
    },
    onKeyDown: function( e ) {
	    this.plane.headup();
    },
    onKeyUp: function ( e ){
       this.plane.stop();
    },
    update: function() {
        
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

