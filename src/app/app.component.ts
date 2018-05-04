import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diogooo';
  names=["Diogo", "Jose", "Maria"]
  selected='';

  select(name: string){
    console.log(name);
    this.selected = name;
  }
}
