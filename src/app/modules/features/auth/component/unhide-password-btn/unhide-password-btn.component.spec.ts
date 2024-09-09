import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UnhidePasswordBtnComponent } from "./unhide-password-btn.component";

describe("UnhidePasswordBtnComponent", () => {
  let component: UnhidePasswordBtnComponent;
  let fixture: ComponentFixture<UnhidePasswordBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnhidePasswordBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnhidePasswordBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
