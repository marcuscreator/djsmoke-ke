import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymusicpageComponent } from './mymusicpage.component';

describe('MymusicpageComponent', () => {
  let component: MymusicpageComponent;
  let fixture: ComponentFixture<MymusicpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MymusicpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymusicpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
