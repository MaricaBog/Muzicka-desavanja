import { Pipe, PipeTransform } from '@angular/core';
import { Eventi } from '../models/events.model';

@Pipe({
  name: 'ticketsSum'
})
export class TicketsSumPipe implements PipeTransform {

  transform(events: Eventi[]): number {
    return events.map(e=>e.cena).reduceRight((acc,next)=>acc+next,0);
  }

}
