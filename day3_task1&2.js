
//task1
//shape parent of rectangle
function shape (length,width){
    if(this.constructor == shape){
        throw 'Abstract Class'
    }else{
        this._length=length
        this._width=width
    }    
}
//rectangle parent of square and inherit from shape
function rectangle (length,width){
    shape.call(this,length,width);

}
//square inerit from rectangle
var square = function(length){
    rectangle.call(this,length,length)
    square.count++;
}

rectangle.prototype = Object.create(shape.prototype);
rectangle.prototype.constructor = rectangle;


square.prototype = Object.create(rectangle.prototype);
square.prototype.constructor = square;
square.count = 0;


//properties of shape
    Object.defineProperties(shape.prototype,{
    length:{
    get:function(){return this._length;},
    configurable:false,
    enumerable:false
    },
    width:{
        get:function(){return this._width;},
        configurable:false,
        enumerable:false    
    },})

    //properties of rectangle
    Object.defineProperties(rectangle.prototype,{
    area:{
        get: function(){return this._length *this._width;},
        configurable:false,
        enumerable:false 
    },perimeter:{
        get: function(){return 2*(this._length+this._width);},
        configurable:false,
        enumerable:false
    },toString:{
        value:function(){
            return "Rectangle length = "+this._length +" ,width = "+this._width;
        },
        configurable:false,
      enumerable:false
    },valueOf:{
        value: function() {
            return this.area;
          },
          configurable:false,
          enumerable:false 
    }
})

//properties of square
Object.defineProperties(square.prototype,{
    length:{
    get:function(){return this._length;},
    configurable:false,
    enumerable:false
    },
    area:{
        get: function(){return this._length *this._length;},
        configurable:false,
        enumerable:false 
    },perimeter:{
        get: function(){return 4*(this._length);},
        configurable:false,
        enumerable:false
    },toString:{
        value:function(){
            return "square length = "+this._length ;
        },
        configurable:false,
      enumerable:false
    },valueOf:{
        value: function() {
            return this.area;
          },
          configurable:false,
          enumerable:false 
    }
})


//testing 
var rectangle1 = new rectangle(5, 10);
console.log(rectangle1.toString()); // "Rectangle { length: 5, width: 10 }"
console.log(rectangle1.area); // 50
console.log(rectangle1.perimeter); // 30

var square1 = new square(5);
console.log(square1.toString()); // "Square { length: 5 }"
console.log(square1.area); // 25
console.log(square1.perimeter); // 20

var square2 = new square(3);
    console.log(square.count); // 2
    console.log(rectangle1 + square1); // 75
    console.log(rectangle1 - square2); // 41

//********************************************* */
//task 2

function Vehicle(_speed,_color){        //vehicle class declaration
    if (this.constructor == Vehicle){
        throw 'abstract class'
    }else{
        this.speed = _speed;
        this.color = _color ;
    }
}

function Bicycle(_speed,_color){            //bicycle class declaration
    Vehicle.call(this,_speed,_color);

}
Bicycle.prototype = Object.create(Vehicle.prototype);   // linking two classes prototype
Bicycle.prototype.constructor = Bicycle;

//addin properties to vehicle class
Object.defineProperties(Vehicle.prototype,{
    _speed:{
    get:function(){return this.speed;},
    enumerable:false
    }, _color:{
        get:function(){return this.color},
        enumerable:false
    }
,turnleft : {
    value: function(){console.log("turned left")}
},turnRight : {
    value:function(){console.log("turned right")}
},star : { value:function(){console.log("started")}},
stop:{value:function(){console.log("stopped")}},
gobackwards:{value:function(_speed,accel){console.log("Going backwards at"+ _speed +" accel = "+accel)}},
goforwards:{value:function(_speed,accel){console.log("Going backwards at"+ _speed +" accel = "+accel)}}
}) //end of vehicle properties

//adding property to Bicycle
Object.defineProperty(Bicycle,"ringBell",{
    value: function(){console.log("Ding Ding")}
});
//end of bike properties

//start of Motor Vehicles
function MotorVehicle(_speed,_color,_size,lp,){
    Vehicle.call(this,_speed,_color)
    this.sizeOfEngine=_size;
    this.licencePlate=lp;
}
//end of motorvehicles
//link motor vehicles and vehicles
MotorVehicle.prototype = Object.create(Vehicle.prototype);   
MotorVehicle.prototype.constructor = MotorVehicle;

//adding properties of motorvehicle
Object.defineProperties(Vehicle.prototype,{
    getSizeofEngine:{
        get:function(){return this.sizeOfEngine;},
        enumerable:false
        }, getlicenseplate:{
            get:function(){return this.licencePlate},
            enumerable:false
        }
}) //end of MotorVehicle properties

//start of dump truck
function Dumptruck(_speed,_color,_size,lp,lc,numWheels,w){
    MotorVehicle.call(this,_speed,_color,_size,lp)
    this.loadCapacity=lc;
    this.numWheels=numWheels;
    this.weight = w;
}
//end of dumb truck
//link dumb truck to motor vehicle
Dumptruck.prototype=Object.create(MotorVehicle.prototype);
Dumptruck.constructor = Dumptruck;
//end of link
//Dumbtruck properties
Object.defineProperties(Dumptruck.prototype,{
    lowerload:{
        value:function(){console.log("Load lowered succesfully")}
    },raiseload:{value:function(){console.log("Load raised sucessfully")}}
})
//end of dumbtruck properties
//start of car 
function car(_speed,_color,_size,lp,numdoor,numwheel,w){
    MotorVehicle.call(this,_speed,_color,_size,lp)
    this.numberOfDoors = numdoor;
    this.numberOfWheels = numwheel;
    this.weight = w;
}
//end of car
//link car with Motor vehicle
car.prototype = Object.create(MotorVehicle.prototype);
car.constructor=car;
//end of linking
//add properties of car
Object.defineProperties(car.prototype,{
    switchOnAirCon:{
        value:function(){console.log("Air con On")}
    },getNumofDoors:{
        get:function(){return this.numberOfDoors}}
})
//end of car properties
//end of task2

var car1 = new car(40,"green","big",555332,4,4,1000);
