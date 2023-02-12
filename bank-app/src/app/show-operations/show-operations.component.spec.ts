import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOperationsComponent } from './show-operations.component';

describe('ShowOperationsComponent', () => {
  let component: ShowOperationsComponent;
  let fixture: ComponentFixture<ShowOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
