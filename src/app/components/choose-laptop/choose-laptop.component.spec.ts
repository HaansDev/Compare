import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLaptopComponent } from './choose-laptop.component';

describe('ChooseLaptopComponent', () => {
  let component: ChooseLaptopComponent;
  let fixture: ComponentFixture<ChooseLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
