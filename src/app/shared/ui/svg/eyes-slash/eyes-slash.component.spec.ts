import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesSlashComponent } from './eyes-slash.component';

describe('EyesSlashComponent', () => {
  let component: EyesSlashComponent;
  let fixture: ComponentFixture<EyesSlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyesSlashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyesSlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
