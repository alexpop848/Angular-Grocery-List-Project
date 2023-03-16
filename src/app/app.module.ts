import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    HomePageComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-ucc10n70hf7yuxe3.us.auth0.com',
      clientId: 'RVjD3vxxAlJQg0RiURN3drAnzCJRPYy6',
      redirect_uri: window.location.origin
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
