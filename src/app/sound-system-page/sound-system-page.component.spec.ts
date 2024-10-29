import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundSystemPageComponent } from './sound-system-page.component';

describe('SoundSystemPageComponent', () => {
  let component: SoundSystemPageComponent;
  let fixture: ComponentFixture<SoundSystemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundSystemPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundSystemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
