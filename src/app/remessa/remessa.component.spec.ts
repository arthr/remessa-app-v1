import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemessaComponent } from './remessa.component';

describe('RemessaComponent', () => {
  let component: RemessaComponent;
  let fixture: ComponentFixture<RemessaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemessaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
