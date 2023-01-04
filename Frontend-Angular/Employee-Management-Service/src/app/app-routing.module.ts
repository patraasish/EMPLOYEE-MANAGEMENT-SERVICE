import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'info-employee/:id',component:ViewEmployeeComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
