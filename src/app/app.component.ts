import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListaRegistroComponent } from './listaregistro/listaregistro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ListaRegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'T35.2-Componentes';
  nombre: string = '';
  email: any = '';
  mensaje: string = '';
  anti_spam: string = '';
  registros: Array<object> = [];

  guardar()
  {
    if(this.nombre != '' &&  this.email != '' &&  this.mensaje != '' && this.anti_spam == '5')
    {
      this.registros.push({nombre: this.nombre, email: this.email, mensaje: this.mensaje});
    }
  }
}