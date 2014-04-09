var angle=0,moment=0,headup=false;
var Plane = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile('images/Plane.png');
        
    },
    update: function( dt ) {
    var pos=this.getPosition();
        
        if(headup){
            angle-=0.23;}
        else
            angle+=0.1;
        this.setRotation(angle);
        var y=Math.abs(Math.sin(angle*4))*Math.abs(angle/10);
        if(angle>0)
    this.setPosition( new cc.Point( 200, pos.y-y) );
        else
      this.setPosition( new cc.Point( 200, pos.y+y) );
    if(angle>=20){
        angle=20;
        }
        if(angle<=-20){
        angle=-20;
        }
    if(pos.y>600||pos.y<0) this.setPosition( new cc.Point( 200, 300) );
    },
    headup : function() {
	  headup=true;
    },
    stop : function(){
      headup=false;
    }
});
