import { Component, OnInit, Inject } from '@angular/core';
import { GroceryListServiceService } from 'src/app/services/grocery-list-service.service';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  newList: string;
  id: string;
  name: string;
  toggledItemId: string;

  constructor(
    private listService: GroceryListServiceService,
    private router: Router,
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document
  ) {}

  get groceryLists() {
    return this.listService.getAllLists();
  }

  saveList() {
    this.listService.createList(this.newList);
    this.newList = '';
  }

  done(id: string) {
    this.listService.toggleListDone(id);
  }

  toggleListNameEdit(listId: string) {
    this.toggledItemId = listId;
  }

  editListName(listId: string, event: any) {
    const newName = event.target.value;
    this.listService.editList(listId, newName);
    console.log(listId, newName);
  }

  removeList(listId: string) {
    this.listService.deleteList(listId);
  }

  navigateToList(listId: string) {
    this.router.navigateByUrl(`/list/${listId}`);
  }

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      returnTo: this.document.location.origin,
    });
  }
}
