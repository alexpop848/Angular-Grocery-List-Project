import { v4 as uuid } from 'uuid';

export class Item{
    constructor(name: string) {
        this.name = name;
        this.id = uuid();
        this.quantity = 1;
        this.price = '$0';
        this.done = false;
        this.option = "kg";
    }

    id: string;
    name: string;
    quantity: number;
    price: string;
    done: boolean;
    option: string;
}

