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
  let t = testo.value;
  let n = Number(numero.value);

  for (let index = 0; index < n; index++) {
    this.articles.push(t)
    
  }
return false;
  }
}
