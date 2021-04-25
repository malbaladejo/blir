import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsExceptionComponent } from './settings-exception.component';

describe('SettingsExceptionComponent', () => {
  let component: SettingsExceptionComponent;
  let fixture: ComponentFixture<SettingsExceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsExceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
