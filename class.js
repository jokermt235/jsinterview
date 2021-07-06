class Car {
    constructor(corps, engine , transmission, model){
        this.model = model;
        this.engine = engine;
        this.corps  = corps;
        this.transmission = transmission;
    }

    getCarInfo(){
        return `model : ${this.model}, Engine -  type : ${this.engine.getType()} ,volume : ${this.engine.getVolume()} , Transmission : ${this.transmission.getType()}`;
    }
}

class Engine {
    constructor(type, volume){
        this.type = type;
        this.volume = volume;
    }

    getType(){
        return this.type;
    }

    getVolume(){
        return this.volume;
    }
}

class Transmission {
    constructor(type){
        this.type = type;
    }

    getType(){
        return this.type;
    }
}

class Car1 extends Car{
    constructor(corps, engine, transmission, model){
        super(corps, engine, transmission, model);
    }
}

var toyota = new Car1(null, new Engine("i", "250"), new Transmission("Mannual"),"Toyota corolla");


console.log(toyota.getCarInfo());
