import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public upper = 'jonathan';
  public lower = 'JONATHAN';
  public title = 'JoNaThAn';

  public customDate: Date = new Date();
}
