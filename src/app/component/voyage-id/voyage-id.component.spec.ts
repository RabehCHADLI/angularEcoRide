import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageIdComponent } from './voyage-id.component';

describe('VoyageIdComponent', () => {
  let component: VoyageIdComponent;
  let fixture: ComponentFixture<VoyageIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyageIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyageIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
