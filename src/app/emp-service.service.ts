import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get("http://localhost:8080/employees");
  }
  addNewEmployee(employee: any) {
    return this.http.post("http://localhost:8080/addNewEmployee", employee);
  }
  deleteEmployee(id: any) {
    return this.http.delete("http://localhost:8080/deleteEmployee/" + id);

  }

}
