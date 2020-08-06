import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms"
import {FormsModule} from "@angular/forms"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { EventsComponent } from './events/events.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MyProfilComponent } from './my-profil/my-profil.component';
import { EventsListComponent } from './events-list/events-list.component';
import { TicketsSumPipe } from './pipes/tickets-sum.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    AdministratorComponent,
    EventsComponent,
    MyEventsComponent,
    MyProfilComponent,
    EventsListComponent,
    TicketsSumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
