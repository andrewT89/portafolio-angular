import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from './../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

info: InfoPage = {};
team: any[] = [];

load = false;

  constructor( private http: HttpClient ) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
     // Read file JSON
    this.http.get('assets/data/data-page.json')
    .subscribe((res: InfoPage) => {
      this.load = true;
      this.info = res;
    });
   }

   private loadTeam() {
    this.http.get('https://angular-html-b7506.firebaseio.com/equipo.json')
    .subscribe((resp: any) => {
      this.load = true;
      this.team = resp;
    });
   }
}
