import { v4 as uuid } from 'uuid';

export class Item{
    constructor(name: string) {
        this.name = name;
        this.id = uuid();
        this.quantity = 1;
        this.price = 0;
        this.done = false;
    }

    id: string;
    name: string;
    quantity: number;
    price: number;
    done: boolean;
}

