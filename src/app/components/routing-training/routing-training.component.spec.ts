import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTrainingComponent } from './routing-training.component';

describe('RoutingTrainingComponent', () => {
  let component: RoutingTrainingComponent;
  let fixture: ComponentFixture<RoutingTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
