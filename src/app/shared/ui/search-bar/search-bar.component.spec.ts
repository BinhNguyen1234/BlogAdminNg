import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchBarComponent } from "./search-bar.component";
import { UiModule } from "../ui.module";
import { provideAnimations } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

describe("SearchBarComponent", () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  beforeAll(() => {
    window.onbeforeunload = () => "";
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [UiModule],
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("default vale of placeholder", () => {
    expect(component.placeholder).toContain("Search");
  });
  it("change placeholder", () => {
    component.placeholder = "mock up";
    fixture.detectChanges();
    expect(component.placeholder).toEqual("mock up");
    expect(
      fixture.debugElement.query(By.css("input[matinput]")).nativeElement
        .placeholder
    ).toEqual("mock up");
  });
  it("should form control get right value", () => {
    const input = fixture.debugElement.query(
      By.css("input[matinput]")
    ).nativeElement;
    input.value = "mock up";
    input.dispatchEvent(new Event("input"));

    fixture.detectChanges();

    expect(component.searchBarForm.get("searchString")?.value).toEqual(
      "mock up"
    );
  });
  it("should form submit", () => {
    spyOn(component, "handleSubmit").and.callThrough();
    const form = fixture.debugElement.query(By.css("form")).nativeElement;
    form.dispatchEvent(new Event("submit"));
    expect(component.handleSubmit).toHaveBeenCalledTimes(1);
  });
});
