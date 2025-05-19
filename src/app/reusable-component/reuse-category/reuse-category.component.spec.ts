import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseCategoryComponent } from './reuse-category.component';

describe('ReuseCategoryComponent', () => {
  let component: ReuseCategoryComponent;
  let fixture: ComponentFixture<ReuseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
