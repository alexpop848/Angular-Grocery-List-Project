import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/grocery';
import { GroceryList } from '../home-page/items-list';
import { GroceryListServiceService } from 'src/app/services/grocery-list-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  itemId: string;
  listId: string;
  item: Item;
  editItem: Item;

  quantityOptions: string[] = ['kg', 'g', 'l', 'ml', 'item'];

  constructor(
    private groceryService: GroceryListServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('itemId');
    this.listId = this.route.snapshot.paramMap.get('listId');
    //aduc din service lista cu id-ul listei primit ca parametru
    this.item = this.groceryService.getItem(this.itemId, this.listId);
    this.editItem = { ...this.item }; //clone item
    console.log(this.item, this.listId);
    console.log(this.item, 'item');
  }

  get groceryListItems() {
    return this.groceryService.getAllLists();
  }

  saveItemClick(): void {
    console.log(this.item, 'editedItem');
    this.groceryService.editListItem(this.listId, this.itemId, this.editItem);
    this.router.navigateByUrl(`/list/${this.listId}`);
  }
}
