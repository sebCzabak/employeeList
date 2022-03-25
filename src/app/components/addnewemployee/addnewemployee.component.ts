import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { EmpServiceService } from 'src/app/emp-service.service';

@Component({
  selector: 'app-addnewemployee',
  templateUrl: './addnewemployee.component.html',
  styleUrls: ['./addnewemployee.component.css']
})
export class AddnewemployeeComponent implements OnInit {

  emplyoee: Employee = new Employee();
  departments: any;
  message: any;
  constructor(private service: EmpServiceService) { }

  ngOnInit(): void {
  }
  public registration() {
    let response = this.service.addNewEmployee(this.emplyoee);
    response.subscribe((data) => this.message = data);
  }

}
