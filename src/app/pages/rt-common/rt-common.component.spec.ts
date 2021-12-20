import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtCommonComponent } from './rt-common.component';

describe('RtCommonComponent', () => {
  let component: RtCommonComponent;
  let fixture: ComponentFixture<RtCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
