import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsquePage } from './esque.page';

describe('EsquePage', () => {
  let component: EsquePage;
  let fixture: ComponentFixture<EsquePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EsquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
