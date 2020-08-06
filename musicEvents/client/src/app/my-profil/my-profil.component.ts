import { Component, OnInit } from '@angular/core';
import { ReserveTicketsService } from '../services/reserve-tickets.service';
import { Eventi } from '../models/events.model';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css']
})
export class MyProfilComponent implements OnInit {

  public items: Eventi[]=[];
 
  constructor(private resTicket: ReserveTicketsService) { 
    this.items = this.resTicket.getItems();
  
  }

  ngOnInit(): void {
  }

  public numberOfAllCarts() : Number
  {
    if(this.items==[])
    {
      this.resTicket.num=0;
    }
    
      return this.resTicket.num;    
  }




  public buy(){
    window.alert("Your reservation has been send!");
    this.items = this.resTicket.deleteReservation();
    this.resTicket.num=0;
    
  }

}
