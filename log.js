class Log {
    constructor(x,y,w,h) {

        var options = {
            
          isStatic : true
        }

        
        this.body = Bodies.rectangle (x,y,w,h,options);
        this.width = w;
        this.height = h;

        World.add (myWorld , this.body);
    }

    display (){
        var pos = this.body.position;

        var angle = this.body.angle;

        var sprite = createSprite(this.body.position.x, this.body.position.y, this.width,this.height);

        sprite.shapeColor=color(255,0,0);



        push ();
        translate (pos.x , pos.y);
        rotate (angle);

        rectMode (CENTER);
        fill( "red" );
        strokeWeight (4);
        stroke ("black");

        rect ( 0 , 0 , this.width , this.height);

        pop ();

    }
}