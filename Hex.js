class Hex
{
    constructor(x,y)
    {
        var options=
        {
          isStatic:false,
		  restitution:0,
		  friction:1,
		  density:1.2
		}
        this.x=x;
		this.y=y;
        
        this.polygon = Bodies.circle(50,200,20,options)
        World.add(world,polygon)

       
        
    }
    display()
    {
        
        push()
         
        imageMode(CENTER)
        image(polygon_img,polygon.position.x,polygon.position.y,40,40)
        ellipse(50,200,20)
        pop()
    }
}
