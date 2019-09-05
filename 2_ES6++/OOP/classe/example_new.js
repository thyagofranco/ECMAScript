const Container = function (capacity = 0) {
    this._capacity = capacity;
}

Container.prototype.setCapacity = function (value) {this._capacity = value; };
Container.prototype.getCapacity = function () {this._capacity};
Container.prototype.showCapacity = function() { console.log(`${this._capacity} Litros`)};


const Cup = function (material = 'vidro') {
    
    this.material = material;
    
    this.setMaterial = (value) => {
        this._material = value;    
    };
    this.getMaterial = ()=> this._material;
    this.showMaterial = ()=> console.log(`É de ${this._material}`)
};

Cup.prototype = Object.create(Container.prototype);


const myCup = new Cup();
myCup.capacity = 10;
myCup.showCapacity();
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