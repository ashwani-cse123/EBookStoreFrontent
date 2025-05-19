import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoryfindComponent } from './all-categoryfind.component';

describe('AllCategoryfindComponent', () => {
  let component: AllCategoryfindComponent;
  let fixture: ComponentFixture<AllCategoryfindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCategoryfindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCategoryfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
