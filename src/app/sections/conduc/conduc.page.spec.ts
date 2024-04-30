import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConducPage } from './conduc.page';

describe('ConducPage', () => {
  let component: ConducPage;
  let fixture: ComponentFixture<ConducPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConducPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
