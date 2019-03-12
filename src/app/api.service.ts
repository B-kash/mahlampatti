import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

  }

  login(challange):Observable{
    return this.http.post("http://localhost:3000/api/v1/users/login",challange);
  }

}
