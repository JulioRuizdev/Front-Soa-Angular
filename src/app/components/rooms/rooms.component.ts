import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  
  titulo = 'Listado de habitaciones';

  constructor() {
    
  }

  ngOnInit(){}

}
