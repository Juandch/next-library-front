import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAuthorsComponent } from './index-authors.component';

describe('IndexAuthorsComponent', () => {
  let component: IndexAuthorsComponent;
  let fixture: ComponentFixture<IndexAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexAuthorsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
