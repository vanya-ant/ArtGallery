import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAllComponent } from './articles-all.component';

describe('ArticlesAllComponent', () => {
  let component: ArticlesAllComponent;
  let fixture: ComponentFixture<ArticlesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
