ar speedg=0.5;
var Gold = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/bomb.png' );
        var dudd=true;
        
    },
 
    randomPosition: function() {
        // --- your task is to write this method
        var x=Math.random()*800;
        var y=Math.random()*600;
        this.setPosition( new cc.Point( x, y ) );
    },
    
    getnear: function(obj){
        var oPos = obj.getPosition();
        var myPos = this.getPosition();
        var x=myPos.x-oPos.x;
        var y=myPos.y-oPos.y;
        var angle=Math.atan(x/y);
        
        if(myPos.y<oPos.y){
        var speedx=myPos.x+speedg*Math.sin(angle);
        var speedy=myPos.y+speedg*Math.cos(angle);x
        this.setRotation(angle*62-90);}
        else{
        var speedx=myPos.x-speedg*Math.sin(angle);
        var speedy=myPos.y-speedg*Math.cos(angle);
        this.setRotation(angle*62+90);}
        speedg+=0.05;
         this.setPosition(new cc.Point( speedx, speedy ) );
       
    },
     setspeed: function(){
         speedg=0.5;
    },
                            
    closeTo: function( obj ) {
	var myPos = this.getPosition();
	var oPos = obj.getPosition();
  	return ( ( Math.abs( myPos.x - oPos.x ) <= 10 ) && ( Math.abs( myPos.y - oPos.y ) <= 10));
    }
});