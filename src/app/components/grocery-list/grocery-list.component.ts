import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/grocery';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  items: Items[] = [];
  newItem: string;
  //items: Items[] = [
  //  { name:'kiwi', quantity: 23, price: 50, done: true },
  //  { name:'grapes', quantity: 3, price: 65, done: true },
  //  { name:'milk', quantity: 1, price: 15, done: true },
  //];


  constructor() { }

  ngOnInit() { }

 saveItem() {
  if(this.newItem){
    let item = new Items();
    item.name = this.newItem;
    item.done = true;
    this.items.push(item);
    this.newItem = '';
  }
 }

 done(id:number){
  this.items[id].done =!this.items[id].done;
 }

 remove(id:number){
  this.items = this.items.filter((v,i)=> i !== id);
 }

}
