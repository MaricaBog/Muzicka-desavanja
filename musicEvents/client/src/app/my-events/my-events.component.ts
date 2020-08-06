import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Eventi } from '../models/events.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {


  public items: Eventi[] = [];
  public createForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private eventService: EventService) {
    this.items = this.eventService.getEvents();

    this.createForm = this.formBuilder.group({
      detalji: ['', [Validators.pattern('[0-9a-zA-Z ]*')]],
      nazivDog: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]],
      cena: ['', [Validators.required, Validators.min(0)]],
      kapacitet: ['', [Validators.required, Validators.min(0)]],
      datum: ['', [Validators.required]],
      vrstaMuzike: ['', [Validators.required, Validators.pattern('jazz|rock|techno|ethno|rave|classical')]],
      vrstaDogadjaja: ['', [Validators.required, Validators.pattern('concert|gig|festival')]],
      adresa: ['', [Validators.required, Validators.pattern('[a-zA-Z]+ [0-9]+')]],
      slobodanUlaz:['',[Validators.required,Validators.pattern('yes|no')]]
      
    }
    );
  }

  ngOnInit(): void {
  }


  public submitForm(data) {
    console.log(data);
    if (!this.createForm.valid) {
      window.alert('Not valid');
      return;
    }else
    {
      window.alert("Event created!");
      this.createForm.reset();
    } 
   }


  public detalji() {
    return this.createForm.get('detalji');
  }
  public nazivDog() {
    return this.createForm.get('nazivDog');
  }

  public adresa() {
    return this.createForm.get('adresa');
  }

  public datum() {
    return this.createForm.get('datum');
  }

  public cena() {
    return this.createForm.get('cena');
  }

  public kapacitet() {
    return this.createForm.get('kapacitet');
  }

  public vrstaMuzike() {
    return this.createForm.get('vrstaMuzike');
  }

  public vrstaDogadjaja() {
    return this.createForm.get('vrstaDogadjaja');
  }

  public slobodanUlaz() {
    return this.createForm.get('slobodanUlaz');
  }

}
