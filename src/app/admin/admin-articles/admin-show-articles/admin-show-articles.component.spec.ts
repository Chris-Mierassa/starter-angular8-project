import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowArticlesComponent } from './admin-show-articles.component';

describe('AdminShowArticlesComponent', () => {
  let component: AdminShowArticlesComponent;
  let fixture: ComponentFixture<AdminShowArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminShowArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
