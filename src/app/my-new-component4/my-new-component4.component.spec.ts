import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewComponent4Component } from './my-new-component4.component';

describe('MyNewComponent4Component', () => {
  let component: MyNewComponent4Component;
  let fixture: ComponentFixture<MyNewComponent4Component>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MyNewComponent4Component],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
