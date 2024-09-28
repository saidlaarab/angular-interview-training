import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDestinationComponent } from './first-destination.component';

describe('FirstDestinationComponent', () => {
  let component: FirstDestinationComponent;
  let fixture: ComponentFixture<FirstDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstDestinationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
