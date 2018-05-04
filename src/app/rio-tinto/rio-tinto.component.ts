import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-rio-tinto',
  templateUrl: './rio-tinto.component.html',
  styleUrls: ['./rio-tinto.component.css']
})
export class RioTintoComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("Criou Rio-tinto");
  }

  ngOnDestroy(){
    console.log("Removeu Rio-tinto")
  }

}
