import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.getRequests();

    
  }
  private getRequests(){
    this.employeeService.getRequestList().subscribe( data => {
      this.employees = data;
    })
  }

  deleteRequest(id: number)
  {
    this.employeeService.deleteRequest(id).subscribe(data =>
      {
        console.log(data);
        this.getRequests();
      })
  }

}
