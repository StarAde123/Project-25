class Paper {
    constructor(x,y,r) {
        var options={
            restitution: 0.3,
            friction: 10000000000000000,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("paper.png");
        this.w = 70;
        this.h = 70;
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);
    }
}