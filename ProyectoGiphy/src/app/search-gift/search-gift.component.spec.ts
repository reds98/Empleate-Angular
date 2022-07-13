import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGiftComponent } from './search-gift.component';

describe('SearchGiftComponent', () => {
  let component: SearchGiftComponent;
  let fixture: ComponentFixture<SearchGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
