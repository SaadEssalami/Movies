import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedeosComponent } from './vedeos.component';

describe('VedeosComponent', () => {
  let component: VedeosComponent;
  let fixture: ComponentFixture<VedeosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VedeosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VedeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
