import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCarouselComponent } from './produit-carousel.component';

describe('ProduitCarouselComponent', () => {
  let component: ProduitCarouselComponent;
  let fixture: ComponentFixture<ProduitCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
