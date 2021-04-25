import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsExceptionEditComponent } from './settings-exception-edit.component';

describe('SettingsExceptionEditComponent', () => {
  let component: SettingsExceptionEditComponent;
  let fixture: ComponentFixture<SettingsExceptionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsExceptionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsExceptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
