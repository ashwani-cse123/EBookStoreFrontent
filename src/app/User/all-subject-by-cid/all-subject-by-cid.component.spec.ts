import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSubjectByCIdComponent } from './all-subject-by-cid.component';

describe('AllSubjectByCIdComponent', () => {
  let component: AllSubjectByCIdComponent;
  let fixture: ComponentFixture<AllSubjectByCIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSubjectByCIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSubjectByCIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
