import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDestinationComponent } from './second-destination.component';

describe('SecondDestinationComponent', () => {
  let component: SecondDestinationComponent;
  let fixture: ComponentFixture<SecondDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondDestinationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
