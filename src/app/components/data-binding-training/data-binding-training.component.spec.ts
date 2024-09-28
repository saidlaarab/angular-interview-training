import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingTrainingComponent } from './data-binding-training.component';

describe('DataBindingTrainingComponent', () => {
  let component: DataBindingTrainingComponent;
  let fixture: ComponentFixture<DataBindingTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
