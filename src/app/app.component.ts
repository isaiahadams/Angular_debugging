import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';

  response = 'Nothing';

  color = 'green';

  respond() {
    this.response = 'Success';
  }

  changeColor(color) {
	  color = "yellow";
    this.color = color;
  }

}
