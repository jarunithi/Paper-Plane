var angle=0,headup=false;
var Plane = cc.Sprite.extend({
    ctor: function (gamelayer) {
        this._super();
        this.initWithFile(s_Plane);
        this.gameLayer=gamelayer;
    },
    update: function( dt ) {
        this.rotage();
        this.updateY(dt);
        this.limitAngle();
        this.test(dt);
    },  
    rotage:function(){
        if(headup){
            angle-=0.27;}
        else{
            if(angle>=20)angle+=0.27;    
            else angle+=0.19*2;
        }
        this.setRotation(angle);
    },
    updateY:function(dt){   
        if(!this.gameLayer.isOver){
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
       if(pos.y>630||pos.y<-30) this.gameLayer.isOver=true;
    },
    getheadup:function(){
        return headup;
    },
    ReOver:function(){
        over=false;
    },
    headup : function() {
	  headup=true;
    },
    headdown : function(){
      headup=false;
    }
});
