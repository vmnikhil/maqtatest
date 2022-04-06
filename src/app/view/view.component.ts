import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  employees: Employee[] = [];

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((data: Employee[]) => {
      console.log(data)
      this.employees = data;
    })
  }

}
