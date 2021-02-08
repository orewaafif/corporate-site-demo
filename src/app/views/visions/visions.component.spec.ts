import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionsComponent } from './visions.component';

describe('VisionsComponent', () => {
  let component: VisionsComponent;
  let fixture: ComponentFixture<VisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
