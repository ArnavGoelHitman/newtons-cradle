class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:1.2,
          friction:1,
          density:1.5,
          
         
      }
      this.body = Bodies.circle(x,y,radius,options);
    
      
      
      
      
      World.add(world, this.body);
      console.log(this.body);
    }
    display(){
      var pos =this.body.position;
  
     fill("pink");
     ellipseMode(RADIUS);
     ellipse(pos.x,pos.y,15,15);
     
      
    }
}