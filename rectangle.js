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

    draw(){
        let ctx = document.getElementById("ka").getContext("2d");
        ctx.fillStyle = "#c726c2";
        ctx.fillRect(0, 0, this.width, this.height);
    }

}
//Khai báo lớp

// tao doi tuong
let dtCuaKA = new Rectangle2(70, 50);
let dkCuaKA = new Rectangle2(6, 3);
dtCuaKA.draw();


//sử dụng phương thức của đối tượng
//Tên đối tượng.tên của phương thưc()
console.log(dkCuaKA.getP());
console.log(dtCuaKA.getS());
