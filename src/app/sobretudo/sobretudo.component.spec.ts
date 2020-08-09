import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobretudoComponent } from './sobretudo.component';

describe('SobretudoComponent', () => {
  let component: SobretudoComponent;
  let fixture: ComponentFixture<SobretudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobretudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobretudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
