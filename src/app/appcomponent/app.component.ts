import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../appcomponent/app.component.css'],
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  transferir($event) {
    console.log($event);
    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia);
  }
}
