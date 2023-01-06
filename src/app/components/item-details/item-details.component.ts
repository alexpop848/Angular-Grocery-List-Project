import { Component, Input, OnInit } from '@angular/core';
import { Items } from 'src/app/grocery';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() items: Items;

  constructor() { 
    
  }

  ngOnInit() {
  
  } 



}
