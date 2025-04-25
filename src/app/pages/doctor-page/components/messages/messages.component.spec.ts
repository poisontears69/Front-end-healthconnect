import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponentDoctor } from './messages.component';

describe('MessagesComponentDoctor', () => {
  let component: MessagesComponentDoctor;
  let fixture: ComponentFixture<MessagesComponentDoctor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesComponentDoctor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesComponentDoctor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
