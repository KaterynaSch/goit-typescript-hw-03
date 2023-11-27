class Key {
    private signature: number;    
    constructor(){
        this.signature = Math.random();
    }

    getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key){}
    getKey(){
        return this.key;
    }
}

abstract class House {
    protected door: boolean;    
    protected tenants: Person[] = [];
   
    constructor(protected key: Key) {
        this.door = false;
    }

    public comeIn(person: Person): void {
        if (this.door){
            this.tenants.push(person);           
        }
    }

    abstract openDoor(key: Key): void;    
}

class MyHouse extends House {

    openDoor(key: Key): void {
        if(key.getSignature() === this.key.getSignature()){
            this.door = true;           
        }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};