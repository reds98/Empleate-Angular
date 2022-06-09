import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearElementoComponent } from './crear-elemento.component';

describe('CrearElementoComponent', () => {
  let component: CrearElementoComponent;
  let fixture: ComponentFixture<CrearElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearElementoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
