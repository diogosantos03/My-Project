import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuditorService } from '../auditor.service';

@Component({
  selector: 'app-rio-tinto',
  templateUrl: './rio-tinto.component.html',
  styleUrls: ['./rio-tinto.component.css']
})
export class RioTintoComponent implements OnInit, OnDestroy {

  constructor(private auditor: AuditorService) { }

  ngOnInit() {
    this.auditor.onInit();
    //console.log("Criou Rio-tinto");
  }

  ngOnDestroy(){
    //console.log("Removeu Rio-tinto")
    this.auditor.onDestroy();
  }

}
