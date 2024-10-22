import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnlogiesComponent } from './tecnlogies.component';

describe('TecnlogiesComponent', () => {
  let component: TecnlogiesComponent;
  let fixture: ComponentFixture<TecnlogiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnlogiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnlogiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
