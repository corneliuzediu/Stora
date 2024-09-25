import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStorageDialogComponent } from './add-storage-dialog.component';

describe('AddStorageDialogComponent', () => {
  let component: AddStorageDialogComponent;
  let fixture: ComponentFixture<AddStorageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStorageDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStorageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
