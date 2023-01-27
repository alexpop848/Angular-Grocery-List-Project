import { Item } from "src/app/grocery";
import { v4 as uuid } from 'uuid';

export class GroceryList{
    constructor(name: string) {
        this.name = name;
        this.items =[];
        this.id = uuid();
        this.done = false;  
    }

    static fromJSON(json: any): GroceryList{   
        const list = new GroceryList(json.name);
        list.id = json.id;
        list.items = json.items;
        list.done = json.done;
        return list;
    }

    id: string;
    name: string;
    done: boolean;
    items: Item [];
}