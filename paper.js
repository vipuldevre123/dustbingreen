class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,r/2, options);
      this.image = loadImage("paper.png");
     this.radius = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      image(this.image,0, 0,70,70);
      pop();
    }
  };
  