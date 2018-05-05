import { Injectable } from '@angular/core';

@Injectable()
export class AuditorService {

  constructor() { }

  loga(msg:string){
    console.log(msg)
  }
  onInit(){
    console.log("Inicionou Rio Tinto")
  }
  onDestroy(){
    console.log("Destruiu Rio Tinto")
  }

}
