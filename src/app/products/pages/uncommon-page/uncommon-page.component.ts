import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Axel'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  };
  deleteClient(): void {
    this.clients.shift();
  }


  //JsonPipe
  public jsonPipe = {
    'name': 'Jonathan Axel',
    'address': 'La mocte',
    'age': 29
  }

  //AsyncPipe
  public myObservableTimer = interval(2000);

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500)
  })
}
