import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduitsComponent } from './produits.component';
import {MatTableModule} from "@angular/material/table";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ProduitsComponent', () => {
  let component: ProduitsComponent;
  let fixture: ComponentFixture<ProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsComponent ],
      imports:[MatTableModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
