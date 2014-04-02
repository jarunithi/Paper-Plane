var speed=5,time=0;
var Ship = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile('images/ship.png');
        this.direction = Ship.DIR.UP;
    },
    update: function( dt ) {
        time++;
        
        //if(time>=360)time=0;
        //this.setRotation(time);
    
	var pos = this.getPosition();
        /*if(time%1==0){
        if(Math.random()<0.25){this.direction = Ship.DIR.UP;this.setRotation( 0 );}
        else if(Math.random()<0.5){this.direction = Ship.DIR.DOWN;this.setRotation( 180 );}
        else if(Math.random()<0.75){this.direction = Ship.DIR.RIGHT;this.setRotation( 90 );}
        else {this.direction = Ship.DIR.LEFT;this.setRotation( 270 );}
        }*/
    if(this.direction == Ship.DIR.UP){
	if ( pos.y < screenHeight ) {
	    this.setPosition( new cc.Point( pos.x, pos.y + speed ) );
	} else {
	    this.setPosition( new cc.Point( pos.x, 0 ) );
	}}
    if(this.direction == Ship.DIR.RIGHT){
    if ( pos.x < screenWidth ) {
	    this.setPosition( new cc.Point( pos.x+speed, pos.y ) );
	} else {
	    this.setPosition( new cc.Point( 0,pos.y ) );
	}}
    if(this.direction == Ship.DIR.DOWN){
	if ( pos.y >0  ) {
	    this.setPosition( new cc.Point( pos.x, pos.y - speed ) );
	} else {
	    this.setPosition( new cc.Point( pos.x, screenHeight ) );
	}}
    if(this.direction == Ship.DIR.LEFT){
    if ( pos.x >0 ) {
	    this.setPosition( new cc.Point( pos.x-speed, pos.y ) );
	} else {
	    this.setPosition( new cc.Point( screenWidth,pos.y ) );
	}}
    },
    switchDirection: function(temp) {
	if (temp==39){
	    this.direction = Ship.DIR.RIGHT;
        this.setRotation( 90 );
	} if (temp==38){
	    this.direction = Ship.DIR.UP;
        this.setRotation( 0 );
	}if (temp==40){
	    this.direction = Ship.DIR.DOWN;
        this.setRotation( 180 );
	}if (temp==37){
	    this.direction = Ship.DIR.LEFT;
        this.setRotation( 270 );
	}
    }
});
Ship.DIR = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};