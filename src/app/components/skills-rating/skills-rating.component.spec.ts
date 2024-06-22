import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsRatingComponent } from './skills-rating.component';

describe('SkillsRatingComponent', () => {
  let component: SkillsRatingComponent;
  let fixture: ComponentFixture<SkillsRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsRatingComponent]
    });
    fixture = TestBed.createComponent(SkillsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
