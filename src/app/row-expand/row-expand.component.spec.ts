import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowExpandComponent } from './row-expand.component';

describe('RowExpandComponent', () => {
  let component: RowExpandComponent;
  let fixture: ComponentFixture<RowExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
