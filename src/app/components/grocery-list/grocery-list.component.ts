import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/grocery';
import { GroceryListServiceService } from 'src/app/services/grocery-list-service.service';
import { GroceryList } from '../home-page/items-list';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  items: Item[] = [];
  newItem: string;
  id : string;

  groceryList: GroceryList = new GroceryList("undefined");

  constructor(private groceryService: GroceryListServiceService,
              private route: ActivatedRoute,
              private router: Router) {
    console.log("constructor")
   }

  ngOnInit() { 
    //iau din ruta id-ul listei
    this.id = this.route.snapshot.paramMap.get('id')        // iau parametru din url
    console.log("ngOnInit");
    //aduc din service lista cu id-ul listei primit ca parametru
    this.groceryList = this.groceryService.getListbyId(this.id);
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
