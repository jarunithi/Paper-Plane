var speed=2,temp=0;
var Background = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile('images/images.jpg');
        
    },
    update: function(dt) {
        var pos = this.getPosition();
        if(pos.x!=-400){
         this.setPosition( new cc.Point( pos.x-speed,300 ) );}
        else
         this.setPosition( new cc.Point( 1600,300 ) );
    }
 });    