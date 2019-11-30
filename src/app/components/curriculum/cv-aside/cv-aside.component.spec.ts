import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAsideComponent } from './cv-aside.component';

describe('CvAsideComponent', () => {
  let component: CvAsideComponent;
  let fixture: ComponentFixture<CvAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
