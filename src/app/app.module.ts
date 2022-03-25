import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employeelist/employeelist.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpServiceService } from './emp-service.service';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddnewemployeeComponent } from './components/addnewemployee/addnewemployee.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'addnewemployee', component: AddnewemployeeComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
]


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomepageComponent,
    AddnewemployeeComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
