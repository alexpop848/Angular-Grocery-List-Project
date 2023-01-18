import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/grocery';
import { GroceryListServiceService } from 'src/app/services/grocery-list-service.service';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  // items: Item[] = [];
   newItem: string;
  // newItemId : number = 0;
  id : string;
  //items: Items[] = [
  //  { name:'kiwi', quantity: 23, price: 50, done: true },
  //  { name:'grapes', quantity: 3, price: 65, done: true },
  //  { name:'milk', quantity: 1, price: 15, done: true },
  //];


  constructor(private groceryService: GroceryListServiceService,
              private route: ActivatedRoute,
              private router: Router) {
    console.log("constructor")
   }

  ngOnInit() { 

    this.id = this.route.snapshot.paramMap.get('id')  //////////////
    console.log("ngOnInit")
  }

  get groceryList() {
    return this.groceryService.getListbyId(this.id);
  }

 saveItem() {
  if(this.newItem){
    let newItem = new Item(this.newItem);
    this.groceryService.createListItem(this.id, newItem);
    this.newItem = '';
  }
 }

 editItem() {
  
 }

 done(id:string){
  this.groceryService.toggleListItem(this.id, id);
 }

 remove(id:string){
  this.groceryService.deleteListItem(this.id, id);
 }

 navigateToItem(itemId: string) {
  this.router.navigateByUrl(`edit/${this.id}/${itemId}`)
 }

}
