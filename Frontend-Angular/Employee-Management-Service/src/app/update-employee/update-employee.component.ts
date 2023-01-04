import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee2: Employee={
    id: 0,
    firstName: '',
    lastName: '',
    email: ''
  };
  id2:any;
  constructor(public service:EmployeeService,public aroute:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.getId();
    this.getEmployee();
  }
onSubmit(){
this.update(this.id2,this.employee2);
setTimeout(() => {
  this.goToList();
},50);

}
getId(){
  this.id2=this.aroute.snapshot.paramMap.get('id');
}
getEmployee(){
this.service.getEmployeeById(this.id2).subscribe
((data:Employee) => this.employee2=data)
}

update(id:number,employee:Employee){
  return this.service.updateEmployee(id,employee).subscribe(data=>
    console.log(data)
    
    )
}

goToList(){
this.router.navigate(['/']);
}
}
