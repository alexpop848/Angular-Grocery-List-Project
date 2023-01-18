import { Injectable } from '@angular/core';
import { GroceryList } from '../components/home-page/items-list';
import { Item } from '../grocery';

//Sa persist serviciul in local storage
//Read from local storage

@Injectable({
  providedIn: 'root'
})
export class GroceryListServiceService {
  groceryList: GroceryList[] = [];
  

  constructor() { }

  getAllLists() {
    return [...this.groceryList];  //The spread operator returns all the elements of the array
  }

  createList(name:string | undefined) { 
    if(!name?.length) return;
    let newList = new GroceryList(name);
    this.groceryList.push(newList);
    console.log(this.groceryList);
  }

  editList(listId: string, name:string) { 
    let listIndex = this.groceryList.findIndex((list) => list.id === listId);
    if(listIndex !== -1) {
      this.groceryList[listIndex].name = name;
    }
    console.log(this.groceryList, listIndex);

  }
  toggleListDone(listId: string) { 
    let listIndex = this.groceryList.findIndex((list) => list.id === listId);
    if(listIndex) {
      this.groceryList[listIndex].done = !this.groceryList[listIndex].done;
    }
  }

  
  deleteList(listId:string) {
    let listIndex = this.groceryList.findIndex((list) => list.id === listId);
    if(listIndex !== -1) {
      this.groceryList.splice(listIndex, 1);
    }
  }
  

  getListbyId(listId: string) : GroceryList {
    return this.groceryList.find(it => it.id === listId) 
  }

  createListItem(listId: string, item: Item) {
    let listIndex = this.groceryList.findIndex((list) => list.id === listId);
    console.log(listId, listIndex);
    if(listIndex !==-1) {
      console.log(listIndex, this.groceryList[listIndex])
      this.groceryList[listIndex].items.push(item);
    }
    this.groceryList = [...this.groceryList];
    console.log(this.groceryList);
  }

  editListItem(listId:string, itemId: string, name:string) {
    const currentList = this.groceryList.find(list => list.id === listId);
    if(!currentList) return 
    let item = currentList.items.find((item) => item.id === itemId);
    if(!item) return 
      item.name = name;
  }
  toggleListItem(listId:string, itemId: string) {
    const currentList = this.groceryList.find(list => list.id === listId);
    if(!currentList) return 
    let item = currentList.items.find((item) => item.id === itemId);
    if(!item) return 
      item.done = !item.done;
  }

  deleteListItem(listId:string, itemId: string) {
    const currentList = this.groceryList.find(list => list.id === listId);
    if(!currentList) return 
    currentList.items = currentList.items.filter(item => item.id !== itemId);
  }
}
