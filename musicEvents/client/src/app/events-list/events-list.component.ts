import { Component, OnInit } from '@angular/core';
import { Eventi } from '../models/events.model';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  public events: Eventi[];

  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
   }

  ngOnInit(): void {
  }

}
