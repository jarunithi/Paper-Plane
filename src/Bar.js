var headBar = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile(s_headBar);
        
    }
 });
var bodyBar = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile(s_bodyBar);
        
    },
    updatepos:function(scale){
        
        this.temp=scale/100;
        this.setScaleX(0.95*this.temp);
        this.setPosition( new cc.Point(144+(this.temp*318),555 ) ); 
    }
 });
var tailBar = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile(s_tailBar);
        
    },
    updatepos:function(scale){
        
        this.temp=scale/100;
        this.setPosition( new cc.Point( 148+(this.temp*636.5),555 ) ); 
    }
 });
var OverScene = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile(s_OverScene);
        this.setOpacity(0);
        this.setPosition( new cc.Point( 400,300 ) );  
    }
 });
var Overtext = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile(s_Overtext);
        this.setOpacity(0);
        this.setPosition( new cc.Point( 400,400 ) );  
        
    }
 });
