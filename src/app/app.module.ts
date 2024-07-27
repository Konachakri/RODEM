import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { HomeComponent } from './home/home.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { CartComponent } from './cart/cart.component';
import { DashbooardComponent } from './dashbooard/dashbooard.component';
import { LoginComponent } from './login/login.component';

import { AmazonComponent } from './amazon/amazon.component';
import { EmployeemanagmentComponent } from './employeemanagment/employeemanagment.component';
import { EmptableComponent } from './emptable/emptable.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { MyntraComponent } from './myntra/myntra.component';
import { MailComponent } from './mail/mail.component';
import { PhotoComponent } from './photo/photo.component';
import { ReloadComponent } from './reload/reload.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    RectangleComponent,
    CircleComponent,
    HomeComponent,
    BmiComponent,
    DirectivesComponent,
    PipesComponent,
    EmployeesComponent,
    EventregistrationComponent,
    CartComponent,
    DashbooardComponent,
    LoginComponent,

    AmazonComponent,
     EmployeemanagmentComponent,
     EmptableComponent,
     VehicleComponent,
     AccountComponent,
     MyntraComponent,
     MailComponent,
     PhotoComponent,
     ReloadComponent,
     CreateVehicleComponent,
     CreateAccountComponent,
     StudentComponent,
     CreateStudentComponent,
     VehicleDetailsComponent,
     AccountDetailsComponent,
     StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
