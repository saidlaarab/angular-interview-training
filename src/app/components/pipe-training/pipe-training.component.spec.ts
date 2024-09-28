import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTrainingComponent } from './pipe-training.component';

describe('PipeTrainingComponent', () => {
  let component: PipeTrainingComponent;
  let fixture: ComponentFixture<PipeTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
