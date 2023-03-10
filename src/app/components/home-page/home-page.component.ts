import { Component, OnInit } from '@angular/core';
import { GroceryListServiceService } from 'src/app/services/grocery-list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {
  // lists: GroceryList[] = [];
  newList: string;
  id : string;
  name: string;
  toggledItemId: string;

  constructor(private listService: GroceryListServiceService, private router: Router) { }

  //ngOnInit() {
  //  this.lists = this.listService.getAllLists();
  //}

  get groceryLists() {
    return this.listService.getAllLists();
  }

  // saveLocalLists(list:any){
  //   let lists: any;
  //   //Check if we already have a list in there
  //   if(localStorage.getItem('lists') === null){
  //     lists = [];
  //   } else{
  //     lists = JSON.parse(localStorage.getItem('lists'));
  //   }
  //   lists.push(list);
  //   localStorage.setItem('lists', JSON.stringify(lists));
  // }

  saveList() {
    this.listService.createList(this.newList);
    // this.saveLocalLists(this.groceryLists);
    this.newList = '';
    
   }

    done(id:string){
     this.listService.toggleListDone(id);
   }

   toggleListNameEdit(listId: string) {
    //this.listService.editList(this.id, this.newList);
    this.toggledItemId = listId;
   }

   editListName(listId: string, event: any) {   //////////////
    const newName = event.target.value;
    this.listService.editList(listId, newName);
    console.log(listId, newName);
   }

  removeList(listId: string) {
    this.listService.deleteList(listId);
   }

   
   //isShow = true;  

   // toggleDisplay() {
  // this.isShow = !this.isShow;
   //}

  navigateToList(listId: string) {
    this.router.navigateByUrl(`/list/${listId}`) //////////////
  }

}
