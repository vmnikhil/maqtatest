import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  employee: any;
  form!: FormGroup;

  constructor(public empService: EmployeeService,
    private route: ActivatedRoute, private datePipe: DatePipe, private router:Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      fullName: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required)
    });

    const id = this.route.snapshot.params['id'];
    this.empService.getEmployee(id).subscribe((data: any) => {
      data.dob = this.datePipe.transform(data.dob, 'yyyy-MM-dd')
      this.employee = data;
    });
  }

  get fc() {
    return this.form.controls;
  }

  update() {
    this.empService.update(this.employee.id, this.form.value).subscribe(res => {
      this.router.navigate(['']);
    })
  }

}
