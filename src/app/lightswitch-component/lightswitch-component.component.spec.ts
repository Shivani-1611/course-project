import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchComponentComponent } from './lightswitch-component.component';

describe('LightswitchComponentComponent', () => {
  let component: LightswitchComponentComponent;
  let fixture: ComponentFixture<LightswitchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightswitchComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
