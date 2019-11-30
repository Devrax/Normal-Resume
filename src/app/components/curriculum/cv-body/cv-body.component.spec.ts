import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBodyComponent } from './cv-body.component';

describe('CvBodyComponent', () => {
  let component: CvBodyComponent;
  let fixture: ComponentFixture<CvBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
