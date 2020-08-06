import { Injectable } from '@angular/core';
import { Eventi } from '../models/events.model';

@Injectable({
  providedIn: 'root'
})
export class ReserveTicketsService {

  private items: Eventi[]=[];
  public num: number=0;
  
  constructor() { }

  public buyTicket(event: Eventi)
  {
    this.items.push(event);
    this.num++;
  }

  public numberOfTickets(): Number
  {
    return this.num;
  }
  
  public getItems(): Eventi[]
  {
    return this.items;
  }

  //clearCart
  public deleteReservation(): Eventi[]
  {
    this.items=[];
    return this.items;
  }
}
