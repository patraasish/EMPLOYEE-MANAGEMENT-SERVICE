import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './model/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  url="http://localhost:8074/api/employee";
  constructor(public httpClient:HttpClient) { }

  getEmployees():any{
    return (this.httpClient.get<Employee[]>(this.url));
  }

  getEmployeeById(id:number):any{
    return this.httpClient.get(`${this.url}/${id}`);
  }
  saveEmployee(employee:Employee){

    return this.httpClient.post(this.url,employee);
  }

  updateEmployee(id:number, employee:Employee){
    return this.httpClient.put(`${this.url}/${id}`,employee);

  }
  
  deleteEmployeeById(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
    
  }
}
