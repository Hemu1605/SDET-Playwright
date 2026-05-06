class CoffeMachine {
    #waterTemperature = 90;
 
    #boilWater() {
        return `Boiling water to ${this.#waterTemperature} degrees.`;
    }
 
    #grindBeans() {
        return "Grinding beans.";
    }
 
    brew() {
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grindBeans();
        return `${boilMessage} ${grindMessage} Brewing coffee.`;
    }
}
 
const myCoffeMachine = new CoffeMachine();
console.log(myCoffeMachine.brew());


////////////////////
// Example
///////////////////

class Car {
    // private properties
    #engineStatus = false;

    // private method
    #startEngine() {
        this.#engineStatus = true;
        return "Engine started.";
    }

    // public method
    drive() {
        const message = this.#startEngine();
        return `${message} Car is now driving.`;
    }
}

const myCar = new Car();

console.log(myCar.drive());


// Output
// Engine started. Car is now driving.