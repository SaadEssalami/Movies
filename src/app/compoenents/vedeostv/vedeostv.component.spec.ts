import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedeostvComponent } from './vedeostv.component';

describe('VedeostvComponent', () => {
  let component: VedeostvComponent;
  let fixture: ComponentFixture<VedeostvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VedeostvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VedeostvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
