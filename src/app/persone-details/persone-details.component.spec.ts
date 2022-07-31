import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneDetailsComponent } from './persone-details.component';

describe('PersoneDetailsComponent', () => {
  let component: PersoneDetailsComponent;
  let fixture: ComponentFixture<PersoneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoneDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
