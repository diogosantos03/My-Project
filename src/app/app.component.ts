import { Component } from '@angular/core';
import { AuditorService } from './auditor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuditorService]
})
export class AppComponent {
  constructor(private auditor: AuditorService){}
  title = 'Diogooo';
  names=["Diogo", "Jose", "Maria"]
  selected='';

  select(name: string){
    this.auditor.loga(name);
    //console.log(name);
    this.selected = name;
  }

}
