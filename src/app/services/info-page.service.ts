import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  load = false;
  team: any[] = [];

  constructor( private http:HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: InfoPage) => {
        this.load = true;
        this.info = resp        
      });
  }
  private cargarEquipo(){
    this.http.get('https://angular-html-30756-default-rtdb.firebaseio.com/team.json')
    .subscribe((resp: any) => {
      console.log(resp)
      this.team = resp;
    })
  }
}
