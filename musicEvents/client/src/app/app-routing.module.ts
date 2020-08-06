import { AdministratorComponent } from './administrator/administrator.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events/events.component';
import {EventsListComponent} from './events-list/events-list.component';
import {MyProfilComponent} from './my-profil/my-profil.component';
import {MyEventsComponent} from './my-events/my-events.component'; 

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:ProfileComponent},
  {path:"administrator",component:AdministratorComponent},
  //MARICA
  {path: 'events/:eventId', component: EventsComponent}, 
  {path: 'my-events', component: MyEventsComponent },
  {path: 'my-profil', component: MyProfilComponent },
  {path: 'events-list', component: EventsListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
