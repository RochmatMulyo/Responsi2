import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoriPage } from './inventori.page';

describe('InventoriPage', () => {
  let component: InventoriPage;
  let fixture: ComponentFixture<InventoriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InventoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
