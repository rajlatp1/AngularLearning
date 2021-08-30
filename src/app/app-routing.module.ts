import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddToDoItemComponent } from './components/add-to-do-item/add-to-do-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { TodoSummaryComponent } from './components/todo-summary/todo-summary.component';

const routes: Routes = [
  { path: '',   redirectTo: '/signup', pathMatch: 'full' },
  { path: 'todo-add', component: AddToDoItemComponent, canActivate: [AuthGuard] },
  { path: 'todo-summary', component: TodoSummaryComponent },
  { path: 'signup', component: SignupComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
