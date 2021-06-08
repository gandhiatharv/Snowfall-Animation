class Snow {
    constructor (x, y){
        var options = {
            isStatic:false,
            restitution:0,
            friction:0.2,
            density:0.5
        }
        this.width = 30;
        this.height = 30;
        this.body = Bodies.rectangle(x, y, this.height, this.width, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }

    display(){
        push(); 
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER); 
        image(this.image, 0, 0, this.width, this.height); 
        pop(); 
    }
}