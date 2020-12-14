class ball{
    constructor(x,y,radius){
         var options={
         frictionAir:0.05,
        density:0.4
         }
         this.image=loadImage("polygon.png");
         this.body=Bodies.circle(x,y,radius,options);
         this.radius=radius;
         World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("red");
        image(this.image,0,0,this.radius,this.radius);
        pop ();
    }
}