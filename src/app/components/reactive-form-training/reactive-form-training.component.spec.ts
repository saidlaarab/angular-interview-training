import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormTrainingComponent } from './reactive-form-training.component';

describe('ReactiveFormTrainingComponent', () => {
  let component: ReactiveFormTrainingComponent;
  let fixture: ComponentFixture<ReactiveFormTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
