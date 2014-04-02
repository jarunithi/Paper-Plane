var angle=0,moment=0,headup=false;
var Plane = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile('images/Plane.png');
        
    },
    update: function( dt ) {
    var pos=this.getPosition();
        
        if(headup){
            angle-=0.4;}
        else
            angle+=0.2;
        this.setRotation(angle);
        var y=Math.abs(Math.sin(angle));
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
    },
    headup : function() {
	  headup=true;
    },
    stop : function(){
      headup=false;
    }
});
