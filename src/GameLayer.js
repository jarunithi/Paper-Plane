var GameLayer = cc.LayerColor.extend({
    init: function() {
        var isOver=true;
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
        this.staminaLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
	   this.staminaLabel.setPosition( new cc.Point( 650, 550 ) );
        this.distance = cc.LabelTTF.create( '0', 'Arial', 40 );
	   this.distance.setPosition( new cc.Point( 650, 500 ) );
        this.plane=new Plane();
        this.plane.setScale(0.7);
        this.plane.setPosition(new cc.Point(200,300));
        this.addChild(this.plane);
        this.sta=100;
        this.staminaLabel.setString("Stamina : "+ this.sta  );
        this.distance.setString(0);
	   this.addChild( this.staminaLabel );
        this.addChild(this.distance);   
        this.plane.scheduleUpdate();
        this.scheduleUpdate();  
        this.setKeyboardEnabled( true );
    
        return true;
    },
    onKeyDown: function( e ) {
        if(this.sta>0){
	    this.plane.headup();
        this.sta-=0.1;            
        this.staminaLabel.setString( "Stamina : "+Math.round(this.sta)  );}
        else this.plane.stop();
    },
    onKeyUp: function ( e ){
       this.plane.stop();
    },
    update: function() {
        var temp=this.Bg1.getTemp();
        this.distance.setString( sprintf("%.1f", temp));
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

