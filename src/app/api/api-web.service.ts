import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiWebService {

  private urlApi = 'https://manual-do-tecnico-backend.onrender.com/';

  constructor(private http:HttpClient) { }

  public getData(url: String):Observable<any>{
    return this.http.get<any>(this.urlApi+url);
  }
}
