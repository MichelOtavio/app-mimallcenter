import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazerSemBabadoComponent } from './blazer-sem-babado.component';

describe('BlazerSemBabadoComponent', () => {
  let component: BlazerSemBabadoComponent;
  let fixture: ComponentFixture<BlazerSemBabadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlazerSemBabadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazerSemBabadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
