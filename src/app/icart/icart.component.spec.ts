import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcartComponent } from './icart.component';

describe('IcartComponent', () => {
  let component: IcartComponent;
  let fixture: ComponentFixture<IcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
