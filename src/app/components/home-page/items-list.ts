import { Item } from "src/app/grocery";
import { v4 as uuid } from 'uuid';

export class GroceryList{
    constructor(name: string) {
        this.name = name;
        this.items =[];
        this.id = uuid();
        this.done = false;
    }

    id: string;
    name: string;
    done: boolean;
    items: Item [];
}