class Vec3{
    
    x;
    y;

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    dot(vec3){
        return this.x * vec3.x + this.y * vec3.y;
    }

    magnitude(){
        return Math.sqrt(this.dot(this));
    }

    normalize(){
        let mag = this.magnitude();

        return new Vec3(this.x / mag, this.y / mag);
    }

    add(vec3){
        return new Vec3(this.x + vec3.x, this.y + vec3.y);
    }

    scale(x){
        return new Vec3(this.x * x, this.y * x);
    }

    reflect(normal) 
    {
        return this.add(normal.scale(-2 * this.dot(normal)));
    }

    distance(vector)
    {
        return Math.sqrt(this.x * vector.x + this.y * vector.y);
    }
}

module.exports = {
    Vec3: Vec3
};