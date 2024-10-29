import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremoniesPageComponent } from './ceremonies-page.component';

describe('CeremoniesPageComponent', () => {
  let component: CeremoniesPageComponent;
  let fixture: ComponentFixture<CeremoniesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeremoniesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremoniesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
