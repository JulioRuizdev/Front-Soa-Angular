import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-form',
  templateUrl: './rooms-form.component.html',
  styleUrl: './rooms-form.component.css'
})
export class RoomsFormComponent implements OnInit {

  titulo = 'Formulario de habitaciones';
  constructor() { }

  ngOnInit(): void {
  }


}
