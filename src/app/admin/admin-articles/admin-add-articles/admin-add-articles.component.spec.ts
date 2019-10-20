import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddArticlesComponent } from './admin-add-articles.component';

describe('AdminAddArticlesComponent', () => {
  let component: AdminAddArticlesComponent;
  let fixture: ComponentFixture<AdminAddArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
