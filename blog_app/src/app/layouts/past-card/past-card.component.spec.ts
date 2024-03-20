import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastCardComponent } from './past-card.component';

describe('PastCardComponent', () => {
  let component: PastCardComponent;
  let fixture: ComponentFixture<PastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PastCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
