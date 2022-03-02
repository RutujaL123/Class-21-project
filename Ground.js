class Ground 
{
  constructor(x, y, w, h)
  {
    let options = {  
    isStatic: true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
}
}
//method or a function....dont need to mention function...no need to write function
display()
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);
    pop();
