import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaurelsComponent } from './laurels.component';

describe('LaurelsComponent', () => {
  let component: LaurelsComponent;
  let fixture: ComponentFixture<LaurelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaurelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaurelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
