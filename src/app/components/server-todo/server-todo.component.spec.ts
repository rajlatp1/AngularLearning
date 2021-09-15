import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTodoComponent } from './server-todo.component';

describe('ServerTodoComponent', () => {
  let component: ServerTodoComponent;
  let fixture: ComponentFixture<ServerTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
