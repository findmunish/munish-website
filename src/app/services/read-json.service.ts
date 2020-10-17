import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable()
export class ReadJsonService {

  constructor(private httpClient: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
  }
  public getJSON(): Observable<any> {
      return this.httpClient.get("./assets/mydata.json");
  }
}