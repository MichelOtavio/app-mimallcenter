import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamiseComponent } from './chamise.component';

describe('ChamiseComponent', () => {
  let component: ChamiseComponent;
  let fixture: ComponentFixture<ChamiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
