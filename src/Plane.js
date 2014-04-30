var angle=0,headup=false,over=false;
var Plane = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile('images/Plane.png');
        
    },
    update: function( dt ) {
    
        this.rotage();
        this.updateY(dt);
        this.limitAngle();
        this.test(dt);
    },  
    rotage:function(){
        if(headup){
            angle-=0.23;}
        else
            if(angle==-20)
            angle+=0.12;    
        else angle+=0.23;
        this.setRotation(angle);
    },
    updateY:function(dt){
        if(!over){
        var pos=this.getPosition();
        var y=Math.abs(Math.sin(angle*4))*Math.abs(angle/10);
        if(angle>=0)
        this.setPosition( new cc.Point( 200, pos.y-y) );
        else
        this.setPosition( new cc.Point( 200, pos.y+y) );
        }
    },
    limitAngle:function(){
        if(angle>=20){
            angle=20;
        }
        if(angle<=-20){
            angle=-20;
        }
        
    },
    test:function(dt){
        var pos=this.getPosition();
       if(pos.y>600||pos.y<0) over=true;
    },
    getOver:function(){
        return over;
    },
    headup : function() {
	  headup=true;
    },
    headdown : function(){
      headup=false;
    }
});
