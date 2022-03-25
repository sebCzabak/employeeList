import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from 'src/app/emp-service.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any;


  constructor(private service: EmpServiceService) { }

  ngOnInit() {
    this.employees = this.service.getEmployees().subscribe((data => this.employees = data));

  }
  public deleteEmployee(id: number) {
    let response = this.service.deleteEmployee(id);
    response.subscribe((data) => this.employees = data);
  }
}
