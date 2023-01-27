import { Injectable, OnInit } from '@angular/core';
import { GroceryList } from '../components/home-page/items-list';
import { Item } from '../grocery';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  Firestore,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class GroceryListServiceService {
  groceryList: GroceryList[] = [];
  newList: string = '';
  item: string;
  name: any;

  constructor(private firestore: Firestore) {
    this.onInit();
  }

  onInit(): void {
    //creez o functie noua async pe care o apelam
    (async () => {
      const querySnapshot = await getDocs(collection(this.firestore, 'lists')); //toate documentele din firebase
      const listFromFirebase = querySnapshot.docs.map((doc) => {
        return GroceryList.fromJSON(doc.data());
      });
      this.groceryList = listFromFirebase;
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    })();
    console.log('ng oninit');
  }

  db = getFirestore();

  docRef = doc(this.db, 'lists', '1');

  getAllLists() {
    return [...this.groceryList]; //The spread operator returns all the elements of the array
  }

  syncWithFirestore() {}

  createList(name: string | undefined) {
    if (!name?.length) return;
    let newList = new GroceryList(name);
    this.groceryList.push(newList);
    addDoc(collection(this.firestore, 'lists'), { ...newList }).then(
      console.log
    );
    console.log(this.groceryList);
  }

  editList(listId: string, name: string) {
    let listIndex = this.groceryList.findIndex((list) => list.id === listId);
    if (listIndex !== -1) {
      this.groceryList[listIndex].name = name;
    }
    console.log(this.groceryList, listIndex);
  }

  toggleListDone(listId: string) {
    let listIndex = this.groceryList.findIndex((list) => list.id === listId);
    if (listIndex) {
      this.groceryList[listIndex].done = !this.groceryList[listIndex].done;
    }
  }

  deleteList(listId: string) {
    let listIndex = this.groceryList.findIndex((list) => list.id === listId);
    if (listIndex !== -1) {
      this.groceryList.splice(listIndex, 1);
    }
    deleteDoc(this.docRef)
      .then(() => {
        console.log('Entire Document has been deleted successfully.');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getListbyId(listId: string): GroceryList {
    return this.groceryList.find((it) => it.id === listId);
  }

  createListItem(listId: string, item: Item) {
    let listIndex = this.groceryList.findIndex((list) => list.id === listId);
    console.log(listId, listIndex);
    if (listIndex !== -1) {
      console.log(listIndex, this.groceryList[listIndex]);
      this.groceryList[listIndex].items.push(item);
    }
    this.groceryList = [...this.groceryList];
  }

  editListItem(listId: string, itemId: string, editItem: Item) {
    console.log(editItem);

    const currentList = this.groceryList.find((list) => list.id === listId);
    if (!currentList) {
      throw Error('list not found');
    }

    let item = currentList?.items.find((item) => item.id === itemId);
    if (!item) {
      throw Error('item not found');
    }

    item.name = editItem.name;
    item.quantity = editItem.quantity;
    item.option = editItem.option;
    item.price = editItem.price;
  }

  toggleListItem(listId: string, itemId: string) {
    const currentList = this.groceryList.find((list) => list.id === listId);
    if (!currentList) return;
    let item = currentList.items.find((item) => item.id === itemId);
    if (!item) return;
    item.done = !item.done;
  }

  deleteListItem(listId: string, itemId: string) {
    const currentList = this.groceryList.find((list) => list.id === listId);
    if (!currentList) return;
    currentList.items = currentList.items.filter((item) => item.id !== itemId);
  }

  getItem(itemId: string, listId: string): Item {
    const list = this.groceryList.find((it) => it.id === listId);
    const item = list.items.find((it) => it.id === itemId);

    if (!item) {
      throw Error('item not found');
    }
    return { ...item };
  }
}
