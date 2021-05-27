import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideChooseLaptopComponent } from './guide-choose-laptop.component';

describe('GuideChooseLaptopComponent', () => {
  let component: GuideChooseLaptopComponent;
  let fixture: ComponentFixture<GuideChooseLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideChooseLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideChooseLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
