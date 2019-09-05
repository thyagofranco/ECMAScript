const Container = function(capacity = 10) {

    this._capacity = capacity;

    return {
        setCapacity : (value) => {this._capacity = value; },
        getCapacity : () => this._capacity,
        showCapacity : ()=> console.log(`${this._capacity} Litros`)
    }
}

const container = Container()
container._capacity = 11
container.showCapacity();
container.setCapacity(12);
container.showCapacity();

const Cup = function (material = 'vidro') {
    
    this._material = material;

    return {
        setMaterial : (value) => { this._material = value; },
        getMaterial : ()=> this._material,
        showMaterial : ()=> console.log(`É de ${this._material}`)
    }
};

Cup.prototype = Object.create(container);

const myCup = new Cup();
//myCup.capacity = 10;
//myCup.showCapacity();
myCup.material ='glass';
myCup.showMaterial();


/*
class Container {
    constructor(capacity) {
        this._capacity = capacity;
    }
    get capacity() {
        return this._capacity;
    }
    set capacity(value) {
        this._capacity = value;
    }
    showCapacity() {
        console.log(this._capacity);
    }

}

class Cup extends Container {
    constructor(material) {
        super(Container);
        this._material = material;
    }
    get material() {
        return this._material;
    }
    set material(value) {
        this._material = value;
    }
    showGlass(){
        console.log(`The Cup is a ${this._material.toUpperCase()} cup, and has ${this._capacity} L of capacity!`);
    }
    
}

const myCup = new Cup();
myCup.capacity = 10;
myCup.showCapacity();
myCup.material ='glass';
myCup.showGlass();

*/