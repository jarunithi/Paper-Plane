var speed=2,temp,distance,total;
var Background = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile('images/images.jpg');
        temp=0;
        distance=0;
        total=0;
        count=0;
        
    },
    update: function(dt) {
        var pos = this.getPosition();
        if(pos.x!=-400){
         this.setPosition( new cc.Point( pos.x-speed,300 ) );}
        else{
         this.setPosition( new cc.Point( 1600,300 ) );   
        }
        
    },
    getTemp: function(dt){
        var pos = this.getPosition();
        if(pos.x==200)temp++;
        if(pos.x<200)
        distance=pos.x-200;
        else
        distance=(pos.x-200)-2000;
        total=temp*1400+Math.abs(distance);
       return (total-200)/10;
    },
    stop:function(){
        speed=0;
    }
 });    