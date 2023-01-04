import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[]=[];
  constructor(public service:EmployeeService,public router:Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }

getEmployee():any{
return this.service.getEmployees().subscribe((data: Employee[]) => 
  this.employees=data)
}
delete(id:number){
  this.service.deleteEmployeeById(id).subscribe(data=>{
    this.getEmployee();
  });
  
}


deleteEmployee(id:number){
  this.delete(id);  
}
}
