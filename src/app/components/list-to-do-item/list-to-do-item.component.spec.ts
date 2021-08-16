import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToDoItemComponent } from './list-to-do-item.component';

describe('ListToDoItemComponent', () => {
  let component: ListToDoItemComponent;
  let fixture: ComponentFixture<ListToDoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListToDoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListToDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
