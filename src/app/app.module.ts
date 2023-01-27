import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';


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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
