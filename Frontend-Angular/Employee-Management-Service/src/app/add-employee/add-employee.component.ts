import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
emp:Employee={
  id: 0,
  firstName: '',
  lastName: '',
  email: ''
}
  constructor(public router:Router,public service:EmployeeService) { }

  ngOnInit(): void {
  }
  goToList(){
  this.router.navigate(['/employees']);
  }

  onSubmit(employee:Employee){
return this.service.saveEmployee(employee).subscribe(data=>{ console.log(data)
this.goToList();
});

  }
}
