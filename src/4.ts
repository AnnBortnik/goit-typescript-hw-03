class Key {
    private signature: string;

    constructor() {
        this.signature = Math.random().toString();
    }

    public getSignature(): string {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    }

    public abstract openDoor(key: Key): void;

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        } else {
            console.log('The door is closed');
        }
    }
}

class MyHouse extends House {
    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Door has opened!');
        } else {
            console.log('The key is wrong!');
        }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

console.log(house['tenants']);

export {};