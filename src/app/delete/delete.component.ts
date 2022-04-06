import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  employee: any;

  constructor(public empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.empService.getEmployee(id).subscribe((data: any)=>{
      this.employee = data;
    });
  }

  delete() {
    this.empService.deleteEmployee(this.employee.id).subscribe((data: any)=>{
      this.router.navigate(['']);
    });
  }

}
