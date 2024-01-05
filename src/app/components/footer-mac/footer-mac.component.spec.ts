import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMacComponent } from './footer-mac.component';

describe('FooterMacComponent', () => {
  let component: FooterMacComponent;
  let fixture: ComponentFixture<FooterMacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
