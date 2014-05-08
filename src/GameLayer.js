var GameLayer = cc.LayerColor.extend({
    init: function() {
        this.isOver=false;
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.Bg1 =new Background();
        this.Bg2 =new Background();
        this.Bg3 =new Background();
        this.head = new headBar();
        this.body = new bodyBar();
        this.tail = new tailBar();
        this.Bg1.setPosition( new cc.Point( 0, 300 ) );
        this.Bg2.setPosition( new cc.Point( 800, 300 ) );
        this.Bg3.setPosition( new cc.Point( 1600, 300 ) );
        this.head.setPosition( new cc.Point( 140, 555 ) );
        this.body.setPosition( new cc.Point( 462, 555 ) );
        this.tail.setPosition( new cc.Point( 784, 555 ) );
        this.body.setScaleX(0.95);
        this.addChild(this.Bg1);
        this.addChild(this.Bg2);
        this.addChild(this.Bg3);
        this.staminaLabel = cc.LabelTTF.create( '0', 'Arial', 30 );
	   this.staminaLabel.setPosition( new cc.Point( 80, 550 ) );
        this.distance = cc.LabelTTF.create( '0', 'Arial', 40 );
	   this.distance.setPosition( new cc.Point( 700, 500 ) );
        this.plane=new Plane(this);
        this.plane.setScale(0.7);
        this.plane.setPosition(new cc.Point(200,300));
        this.addChild(this.plane);
        this.sta=100;
        this.staminaLabel.setString("Stamina ");
        this.distance.setString(0);
        this.addChild(this.head);
        this.addChild(this.tail);
        this.addChild(this.body);
	   this.addChild( this.staminaLabel );
        this.addChild(this.distance);
        this.time=0;
        this.scheduleUpdate();  
        this.setKeyboardEnabled( true );
        return true;
    },
    onKeyDown: function( e ) {
        if(this.sta>0&&!this.isOver){
	    this.plane.headup();
        this.sta-=0.4;
        this.staminaLabel.setString( "Stamina ");}
        else {this.plane.headdown();}
        if(e==13&&this.isOver){this.re();}
    },
    onKeyUp: function ( e ){
       this.plane.headdown();
    },
    update: function() {
        this.time++;
        var temp=this.Bg1.getTemp();
        this.distance.setString( sprintf("%.1f m", temp));
        if(!this.isOver){
        this.Bg1.scheduleUpdate();
        this.Bg2.scheduleUpdate();
        this.Bg3.scheduleUpdate();
        this.plane.scheduleUpdate();
        if(this.sta>=100)this.sta=100;
        if(!this.plane.getheadup())this.sta+=0.1;
        this.body.updatepos(this.sta);
        this.tail.updatepos(this.sta);
        }
        else{
            this.overbg=new OverScene();
            this.addChild(this.overbg);
            this.overbg.runAction(cc.FadeTo.create(2,100));
            this.scheduleOnce(this.fadeGameOver,2);
            this.unscheduleUpdate();
            this.plane.unscheduleUpdate();
            this.Bg1.unscheduleUpdate();
            this.Bg2.unscheduleUpdate();
            this.Bg3.unscheduleUpdate();
            this.scheduleOnce(this.fadela,4);
            this.scheduleOnce(this.fadeScore,6);
            }
        if(this.time%50==0){
            var i=(-1+(Math.random()*(3-0)));
            if(i<1.8)this.genMissile();
            else {
                this.genMissile();
                this.scheduleOnce(this.genMissile,0.4);
            }
            
        }
    },
    re:function(){
        this.isOver=false;
        this.plane.ReOver();
        var director=cc.Director.getInstance();
        director.replaceScene(cc.TransitionFade.create(1,new StartScene()));
    },
    fadeGameOver:function(obj){
        this.overtex=new Overtext();
        this.addChild(this.overtex);
        this.overtex.runAction(cc.FadeIn.create(2));
    },
    fadela:function(obj){
        this.scorela= cc.LabelTTF.create( '0', 'Arial', 30 );
	        this.scorela.setPosition( new cc.Point( 400, 275 ) );
            this.scorela.setString("Your score is ");
            this.scorela.setOpacity(0);
            this.addChild(this.scorela);
        this.scorela.runAction(cc.FadeIn.create(2));
    },
    fadeScore:function(obj){
        this.score= cc.LabelTTF.create( '0', 'Arial', 50 );
	        this.score.setPosition( new cc.Point( 400, 200 ) );
            this.score.setString(sprintf("%d",this.Bg1.getTemp()*100));
            this.score.setOpacity(0);
            this.addChild(this.score);
            this.score.runAction(cc.FadeIn.create(2));
    },
    genMissile:function(){
        this.mis=new missile(this);
        this.mis.random();
        this.addChild(this.mis);
        this.mis.scheduleUpdate(this.plane);
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



