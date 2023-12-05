import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsAmtraakComponent } from './trains-amtraak.component';

describe('TrainsAmtraakComponent', () => {
  let component: TrainsAmtraakComponent;
  let fixture: ComponentFixture<TrainsAmtraakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainsAmtraakComponent]
    });
    fixture = TestBed.createComponent(TrainsAmtraakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
