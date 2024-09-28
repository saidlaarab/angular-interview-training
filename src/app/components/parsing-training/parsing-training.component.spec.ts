import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsingTrainingComponent } from './parsing-training.component';

describe('ParsingTrainingComponent', () => {
  let component: ParsingTrainingComponent;
  let fixture: ComponentFixture<ParsingTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParsingTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParsingTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
