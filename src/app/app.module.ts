import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDoItemComponent } from './components/add-to-do-item/add-to-do-item.component';
import { ListToDoItemComponent } from './components/list-to-do-item/list-to-do-item.component';
import { TodoSummaryComponent } from './components/todo-summary/todo-summary.component';
import { VowToUpperConToLowerPipe } from './pipes/vow-to-upper-con-to-lower.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddToDoItemComponent,
    ListToDoItemComponent,
    TodoSummaryComponent,
    VowToUpperConToLowerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
