import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'dashbooard',component:DashbooardComponent , children:[
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
  {path:'Cart',component:CartComponent}
 
]},

{path:'', redirectTo: 'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
