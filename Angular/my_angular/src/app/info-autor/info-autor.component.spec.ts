import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAutorComponent } from './info-autor.component';

describe('InfoAutorComponent', () => {
  let component: InfoAutorComponent;
  let fixture: ComponentFixture<InfoAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
