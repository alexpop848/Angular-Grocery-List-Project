import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

const routes: Routes = [
  { path:'', component: HomePageComponent },
  { path:'list/:id', component: GroceryListComponent },
  { path:'edit/:listId/:itemId', component: ItemDetailsComponent }
];

//De implementat list guard pentru grocery list si item details
//Altfel go to 404 not found

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
