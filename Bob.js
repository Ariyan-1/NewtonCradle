class Bob {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:0.1,
          friction:0.1,
          density:0.5
      }
      this.body = Bodies.circle(x, y,radius/2,options);
      this.radius = radius;
      
      World.add(world,this.body)
    }
    
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //ellipseMode(CENTER)
      strokeWeight(3);
      stroke("pink");
      fill("pink");
      ellipse(0,0,this.radius);
      pop();
    }
  };