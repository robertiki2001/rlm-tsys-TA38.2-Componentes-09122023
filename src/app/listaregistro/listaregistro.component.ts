import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-listaregistro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listaregistro.component.html',
  styleUrl: './listaregistro.component.css'
})
export class ListaRegistroComponent implements OnInit {

  @Input() datos: any;

  constructor() { }

  ngOnInit(): void {
  }

}