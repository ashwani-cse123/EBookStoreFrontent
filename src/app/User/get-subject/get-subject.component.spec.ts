import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSubjectComponent } from './get-subject.component';

describe('GetSubjectComponent', () => {
  let component: GetSubjectComponent;
  let fixture: ComponentFixture<GetSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
