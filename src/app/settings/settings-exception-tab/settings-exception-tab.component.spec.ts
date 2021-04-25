import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsExceptionTabComponent } from './settings-exception-tab.component';

describe('SettingsExceptionTabComponent', () => {
  let component: SettingsExceptionTabComponent;
  let fixture: ComponentFixture<SettingsExceptionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsExceptionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsExceptionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
