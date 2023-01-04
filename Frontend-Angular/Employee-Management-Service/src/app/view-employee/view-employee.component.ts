import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
public employee:Employee={
  id: 0,
  firstName: '',
  lastName: '',
  email: ''
};
  public id:any;
  constructor(public route:ActivatedRoute,public service:EmployeeService) { }

  ngOnInit(): void {
this.getId();
this.getEmployee();


  }

  getId(){
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    
  }

  getEmployee(){
    return this.service.getEmployeeById(this.id).subscribe((data:Employee) =>{
    this.employee=data;
    console.log(this.employee);
    
    }
    
    
     );
     
     
  }

}
