class Boy{
constructor(x,y,width,height){
var options={
    isStatic:true
}
this.width = width
this.height = height
    World.add(world,options)
  
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

Display(){
    if(pointA.x < 220) {
        strokeWeight(7);
        line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
        line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
        image(this.sling3,pointA.x -30, pointA.y -10,15,30);
    }
    else{
        strokeWeight(3);
        line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
        line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
        image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
    }
   

}
}