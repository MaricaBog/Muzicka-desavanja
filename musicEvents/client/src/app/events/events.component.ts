import { Component, OnInit } from '@angular/core';
import { Eventi } from '../models/events.model';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReserveTicketsService } from '../services/reserve-tickets.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public event : Eventi;
  private sub : Subscription=null;


  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private resTicket: ReserveTicketsService) {

this.sub = this.route.paramMap.subscribe(param=>{
const eId : number = Number(param.get('eventId'));

this.event = this.eventService.getEvents()
.filter(e => e.eventId === eId)[0];


}); }


public buyTicket(){
  this.resTicket.buyTicket(this.event);
  if(this.event.kapacitet>this.event.ticketsReserved){
    this.event.ticketsReserved++;
  }else
  {
    window.alert('No more tickets');
    return;
  }
}


  ngOnInit(): void {
  }

}
