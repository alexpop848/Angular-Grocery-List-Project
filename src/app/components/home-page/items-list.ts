import { Item } from 'src/app/grocery';
import { v4 as uuid } from 'uuid';

export class GroceryList {
  constructor(name: string) {
    this.name = name;
    this.items = [];
    this.id = uuid();
    this.done = false;
    this.userId = '';
  }

  static fromJSON(json: any): GroceryList {
    //we create a new instance of the GroceryList class from a JSON object
    const list = new GroceryList(json.name);
    list.id = json.id;
    list.items = json.items;
    list.done = json.done;
    list.userId = json.userId;
    return list;
  }

  id: string;
  name: string;
  done: boolean;
  items: Item[];
  userId: string;
}
