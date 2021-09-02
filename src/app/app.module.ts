import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDoItemComponent } from './components/add-to-do-item/add-to-do-item.component';
import { ListToDoItemComponent } from './components/list-to-do-item/list-to-do-item.component';
import { TodoSummaryComponent } from './components/todo-summary/todo-summary.component';
import { VowToUpperConToLowerPipe } from './pipes/vow-to-upper-con-to-lower.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddToDoItemComponent,
    ListToDoItemComponent,
    TodoSummaryComponent,
    VowToUpperConToLowerPipe,
    PageNotFoundComponent,
    SignupComponent,
    HeaderComponent,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
