import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakedGoodsListComponent } from './baked-goods-list.component';

describe('BakedGoodsListComponent', () => {
  let component: BakedGoodsListComponent;
  let fixture: ComponentFixture<BakedGoodsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakedGoodsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakedGoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
