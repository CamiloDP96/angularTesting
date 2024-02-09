import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<p class="mensaje">Valor por defecto</p>'
})
export class AppComponent {
  title = 'greetings';
  mensaje: string = 'Valor por defecto';
}
