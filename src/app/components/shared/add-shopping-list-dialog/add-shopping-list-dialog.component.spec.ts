import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingListDialogComponent } from './add-shopping-list-dialog.component';

describe('AddShoppingListDialogComponent', () => {
  let component: AddShoppingListDialogComponent;
  let fixture: ComponentFixture<AddShoppingListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddShoppingListDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShoppingListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
