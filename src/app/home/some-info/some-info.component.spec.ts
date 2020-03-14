import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeInfoComponent } from './some-info.component';

describe('SomeInfoComponent', () => {
  let component: SomeInfoComponent;
  let fixture: ComponentFixture<SomeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SomeInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
