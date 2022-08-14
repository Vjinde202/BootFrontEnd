import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private requestURL = "http://localhost:8080/request/assets";
  private delReq = "http://localhost:8080/request/delete";

  constructor(private httpClient: HttpClient) { }


  getRequestList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.requestURL}`);
  }

  getRequestById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.requestURL}/${id}`);
  }

  deleteRequest(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.delReq}/${id}`);
  }


}
