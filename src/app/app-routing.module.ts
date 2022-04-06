import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component'


const routes: Routes = [
  { path: '', redirectTo: 'employee/all', pathMatch: 'full'},
  { path: 'employee/all', component: ViewComponent },
  { path: 'employee/view/:id', component: EmployeeDetailsComponent },
  { path: 'employee/create', component: CreateComponent },
  { path: 'employee/update/:id', component: UpdateComponent },
  { path: 'employee/delete/:id', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
