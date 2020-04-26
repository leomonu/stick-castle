class Triangle{
  constructor(x1, y1, x2,y2,x3,y3) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.Triangle(x1, y1, x2, y2, x3,y3);
      this.x1 = x1;
      this.y2 = y2;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;        

      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      //translate(this.body.position.x1, this.body.position.y1,this.body.position.x2,this.body.position.y2,this.body.position.x3,this.body.position.y3);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
        
      triangle(0,0,this.width,this.height)
      pop();
    }
}