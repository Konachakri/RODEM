import { createComponent, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HomeComponent } from './home/home.component';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { DashbooardComponent } from './dashbooard/dashbooard.component';

import { AmazonComponent } from './amazon/amazon.component';
import { EmployeemanagmentComponent } from './employeemanagment/employeemanagment.component';
import { EmptableComponent } from './emptable/emptable.component';
import { VehicleComponent } from './vehicle/vehicle.component';
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
import { AuthenticationGuard } from './authentication.guard';
import { UserComponent } from './user/user.component';
import { NotifyGuard } from './notify.guard';
import { CompanyComponent } from './company/company.component';
import { ParentComponent } from './parent/parent.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { TextComponent } from './text/text.component';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { ItemsparentComponent } from './itemsparent/itemsparent.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'dashbooard', canActivate:[AuthenticationGuard],component:DashbooardComponent , children:[
  {path:'Welcome',component:WelcomeComponent},
  {path:'Calculator',component:CalculatorComponent},
  {path:'Data-Binding',component:DataBindingComponent},
  {path:'Home',component:HomeComponent},
  {path:'Circle',component:CircleComponent},
  {path:'Rectangle',component:RectangleComponent},
  {path:'Bmi',component:BmiComponent},
  {path:'Directives',component:DirectivesComponent},
  {path:'Pipes',component:PipesComponent},
  {path:'Employees',component:EmployeesComponent},
  {path:'Event Registration',component:EventregistrationComponent},
  {path:'Cart',component:CartComponent},
  {path:'Amazon',component:AmazonComponent},
  {path:'Employee-management',component:EmployeemanagmentComponent},
  {path:'Emp-Table',component:EmptableComponent},
  {path:'vehicle',component:VehicleComponent},
  {path:'account',component:AccountComponent},
  {path:'myntra',component:MyntraComponent},
  {path:'Mail',component:MailComponent},
  {path:'Reload',component:ReloadComponent},
  {path:'Photo',component:PhotoComponent},
  {path:'create-vehicle',component:CreateVehicleComponent},
  {path:'create-account',component:CreateAccountComponent},
  {path:'student',component:StudentComponent},
  {path:'new -student'},
  {path:'create-student',component:CreateStudentComponent},
  {path:'vehicle-details/:id',component:VehicleDetailsComponent},
  {path:'edit-vehicle/:id',component:CreateVehicleComponent},
  {path:'account-details/:id',component:AccountDetailsComponent},
  {path:'edit-account/:id',component:CreateAccountComponent},
  {path:'student-details/:id',component:StudentDetailsComponent},
  {path:'edit-student/:id',component:CreateStudentComponent},
  {path:'User', canDeactivate:[NotifyGuard],component:UserComponent},
  {path:'company',canDeactivate:[NotifyGuard],component:CompanyComponent},
  {path:'parent',component:ParentComponent},
  {path:'calculator2',component:Calculator2Component},
  {path:'text',component:TextComponent},
  {path:'about-company',component:AboutCompanyComponent},
  {path:'who'},

  {path:'eee'},

  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
  },
  {path:'itemsparent',component:ItemsparentComponent}
  
 
]},

{path:'', redirectTo: 'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
