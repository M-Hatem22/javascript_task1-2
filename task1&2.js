
//task 1 rectangle with length,width,area,perim and display info

var rect = new Object()
rect.length=15;
rect.width=10;
rect.area= function(){return this.length*this.width;}
rect.perimeter=function(){return this.length+this.width*2}
rect.displayinfo = function(){console.log("the length is "+this.length+" the width is "+this.width+ " area is "+ this.area() + "perimeter is "+this.perimeter())}
console.log(rect.displayinfo())


//task 2
let obj={
    name:"Hatem",
    id:1,
    phone:53222928,
    display:function(){}
}
function getSetGen(obj){
    for(let i in obj){
        if(typeof obj[i]!=='function'){
            (function(j){
                Object.defineProperty(obj,j,{
                    get:function(){
                        return obj[j];
                    },
                    set:function(value){
                        obj[j]=value;
                    }
                })
            })(i);
        }
    }
}