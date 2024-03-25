import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NjamLibraryComponent } from './njam-library.component';

describe('NjamLibraryComponent', () => {
  let component: NjamLibraryComponent;
  let fixture: ComponentFixture<NjamLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NjamLibraryComponent]
    });
    fixture = TestBed.createComponent(NjamLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
