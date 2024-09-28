import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTrainingComponent } from './directive-training.component';

describe('DirectiveTrainingComponent', () => {
  let component: DirectiveTrainingComponent;
  let fixture: ComponentFixture<DirectiveTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
