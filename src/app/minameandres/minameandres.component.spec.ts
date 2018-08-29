
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MinameandresComponent } from './minameandres.component';

describe('MinameandresComponent', () => {
  let component: MinameandresComponent;
  let fixture: ComponentFixture<MinameandresComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MinameandresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinameandresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
