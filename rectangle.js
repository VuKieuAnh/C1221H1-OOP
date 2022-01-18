// c1: function
let Rectangle = function(height,width){
    // thuoc tinh
    this.height = height;
    this.width = width;

    //hanh vi
    // tinh dien tich
    this.getS = function (){
        return this.width *this.height;
    }
    // tinh chu vi
    this.getP = function (){
        return(this.width + this.height) *2;
    }
}
// c2. Dung tu khoa class
class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width =width;
    }

    getS(){
        return this.width*this.height;
    }

    getP(){
        return (this.width + this.height)*2;
    }

}

// tao doi tuong
let dtCuaKA = new Rectangle(7, 5);
let dkCuaKA = new Rectangle2(6, 3);
