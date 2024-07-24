import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemanagmentComponent } from './employeemanagment.component';

describe('EmployeemanagmentComponent', () => {
  let component: EmployeemanagmentComponent;
  let fixture: ComponentFixture<EmployeemanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeemanagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeemanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
