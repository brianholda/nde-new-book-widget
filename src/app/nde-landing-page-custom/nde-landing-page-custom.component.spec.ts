import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeLandingPageCustomComponent } from './nde-landing-page-custom.component';

describe('NdeLandingPageCustomComponent', () => {
  let component: NdeLandingPageCustomComponent;
  let fixture: ComponentFixture<NdeLandingPageCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdeLandingPageCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdeLandingPageCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
