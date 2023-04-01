import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagetvComponent } from './imagetv.component';

describe('ImagetvComponent', () => {
  let component: ImagetvComponent;
  let fixture: ComponentFixture<ImagetvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagetvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagetvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
