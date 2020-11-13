import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '',  redirectTo: '/lists', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'lists', component: ListsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
