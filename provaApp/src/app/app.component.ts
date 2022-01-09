import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'provaApp';
  articles = new Array<string>();
  addSpam(testo : HTMLInputElement,numero : HTMLInputElement): boolean
{
return false;
  }
}
