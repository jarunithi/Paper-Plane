var headBar = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile('images/headbar.png');
        
    }
 });
var bodyBar = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile('images/bodybar.png');
        
    },
    updatepos:function(scale){
        
        this.temp=scale/100;
        this.setScaleX(0.95*this.temp);
        this.setPosition( new cc.Point(140+(this.temp*322),555 ) ); 
    }
 });
var tailBar = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile('images/tailbar.png');
        
    },
    updatepos:function(scale){
        
        this.temp=scale/100;
        this.setPosition( new cc.Point( 149+(this.temp*635),555 ) ); 
    }
 });
