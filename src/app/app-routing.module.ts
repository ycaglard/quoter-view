import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomBookComponent } from './random-book/random-book.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'randomBook', component : RandomBookComponent },
  { path: 'login', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
