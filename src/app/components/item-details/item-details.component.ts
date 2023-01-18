import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/grocery';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() items: Item;

  newItem: string;

  constructor() { 
    console.log(this.items, 'items');
    
  }

  ngOnInit() {
  
  } 



}
