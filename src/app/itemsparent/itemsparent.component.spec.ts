import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsparentComponent } from './itemsparent.component';

describe('ItemsparentComponent', () => {
  let component: ItemsparentComponent;
  let fixture: ComponentFixture<ItemsparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
