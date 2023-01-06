import { Component, OnInit } from '@angular/core';
import { Lists } from './items-list';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  lists: Lists[] = [];
  newList: string;

  constructor() { }

  ngOnInit() {}

  saveList() {
    if(this.newList){
      let list = new Lists();
      list.name = this.newList;
      list.done = true;
      this.lists.push(list);
      this.newList = '';
    }
   }

   done(id:number){
    this.lists[id].done =!this.lists[id].done;
   }

}
