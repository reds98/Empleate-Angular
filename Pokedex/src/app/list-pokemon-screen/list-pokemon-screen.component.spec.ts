import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemonScreenComponent } from './list-pokemon-screen.component';

describe('ListPokemonScreenComponent', () => {
  let component: ListPokemonScreenComponent;
  let fixture: ComponentFixture<ListPokemonScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokemonScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPokemonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
