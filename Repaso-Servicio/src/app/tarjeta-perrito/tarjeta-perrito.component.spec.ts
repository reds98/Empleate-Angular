import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPerritoComponent } from './tarjeta-perrito.component';

describe('TarjetaPerritoComponent', () => {
  let component: TarjetaPerritoComponent;
  let fixture: ComponentFixture<TarjetaPerritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPerritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPerritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
