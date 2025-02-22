import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepotComponent } from './repot.component';

describe('RepotComponent', () => {
  let component: RepotComponent;
  let fixture: ComponentFixture<RepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
