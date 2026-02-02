import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrder } from './search-order';

describe('SearchOrder', () => {
  let component: SearchOrder;
  let fixture: ComponentFixture<SearchOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
