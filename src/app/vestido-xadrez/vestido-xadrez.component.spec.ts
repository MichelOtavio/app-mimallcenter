import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestidoXadrezComponent } from './vestido-xadrez.component';

describe('VestidoXadrezComponent', () => {
  let component: VestidoXadrezComponent;
  let fixture: ComponentFixture<VestidoXadrezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestidoXadrezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestidoXadrezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
