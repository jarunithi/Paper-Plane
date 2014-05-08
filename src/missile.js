var missile = cc.Sprite.extend({
    ctor: function (game,diff) {
        this._super();
        this.initWithFile(s_missile);
        this.speedg=3;
        if(diff>1.3)this.difficult=diff;
        else this.diff=1;
        this.gameLayer=game;
        this.setScale(0.2);
    },
    update:function(dt){
        var oPos=this.gameLayer.plane.getPosition();
        this.getnear(oPos);
        this.closeTo(oPos);
        if(this.gameLayer.isOver==true)this.unscheduleUpdate();
        this.speedg-=0.0051;
        this.test();
    },
 
    getnear: function(oPos){
        var myPos = this.getPosition();
        var x=myPos.x-oPos.x;
        var y=myPos.y-oPos.y;
        var angle=Math.atan(x/y);
        if(myPos.y<oPos.y){
        var speedx=myPos.x-this.speedg;
        var speedy=myPos.y+this.speedg/this.difficult*Math.cos(angle);
        this.setRotation(angle*57.5-90);}
        else{
        var speedx=myPos.x-this.speedg;
        var speedy=myPos.y-this.speedg/this.difficult*Math.cos(angle);
        this.setRotation(angle*57.5+90);}
         this.setPosition(new cc.Point( speedx, speedy ) );
    },
     closeTo: function(oPos){
	var myPos = this.getPosition();
  	if( ( Math.abs( myPos.x - oPos.x ) <= 30 ) && ( Math.abs( myPos.y - oPos.y ) <= 20))
        this.gameLayer.isOver=true;
    },
     test:function(){
        var pos=this.getPosition();
       if(pos.x<-30){ this.gameLayer.removeChild(this)};
       if(pos.x>201&&pos.x<202){this.gameLayer.miscount+=1;}
    },
    random:function(){
    var y=25+Math.random()*550;
    this.setPosition( new cc.Point( 850, y ) );
    },
    setoPos:function(obj){
        oPos=obj.getPosition();
    }
});
