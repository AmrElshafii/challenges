'use strict';
// // First coding challenge
// let car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }
// car.prototype.accelerate = function() {
//     this.speed = this.speed + 10;
//     console.log(this.speed + 'hm/h');
// }
// car.prototype.brake = function() {
//     this.speed = this.speed - 5;
//     console.log(this.speed + 'km/h');
// }
// let BMW = new car('bmw', 120);
// let Mercedes = new car('mercedes', 95);

// coding challenge 2
// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }
//     accelerate() {
//         this.speed += 10;
//         console.log(this.speed + 'km/h');
//     }
//     brake() {
//         this.speed -= 5;
//         console.log(this.speed + 'km/h');
//     }
//     get speedUS() {
//         return this.speed / 1.6
//     }
//     set speedUS(speed) {
//         this.speed = speed * 1.6
//     }
// }

// let ford = new CarCl('ford', 120)
// ford.speedUS = 100
// console.log(ford.speed)

// coding challenge 3
// let car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }
// car.prototype.accelerate = function() {
//     this.speed = this.speed + 10;
//     console.log(this.speed + 'hm/h');
// }
// car.prototype.brake = function() {
//     this.speed = this.speed - 5;
//     console.log(this.speed + 'km/h');
// }
// let EV = function(make, speed, charge) {
//     let o = car.bind(this, make, speed)
//     o(make, speed)
//     this.charge = charge
// }
// EV.prototype = Object.create(car.prototype)
// EV.prototype.accelerate = function() {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// }
// EV.prototype.chargeBattery = function(charge) {
//     this.charge = charge
// }
// let Tesla = new EV('tesla', 120, 50)
// Tesla.chargeBattery(79)
// Tesla.accelerate()
// Tesla.accelerate()
// Tesla.accelerate()
// Tesla.accelerate()
// Tesla.accelerate()
// Tesla.accelerate()
// Tesla.brake()
// console.dir(EV.prototype)

// coding challenge 4
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed = this.speed + 10;
        console.log(this.speed + 'hm/h');
    }
    brake() {
        this.speed = this.speed - 5;
        console.log(this.speed + 'km/h');
        return this;
    }
} 
class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }
    chargeBattery(charge) {
        this.#charge = charge;
        return this;
    }
}
let Rivian = new EVCl('Rivian', 120, 23);
Rivian.accelerate().chargeBattery(22).accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().brake()
console.log(Rivian)