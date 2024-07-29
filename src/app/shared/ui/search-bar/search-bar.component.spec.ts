import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchBarComponent } from "./search-bar.component";
import { UiModule } from "../ui.module";
import { provideAnimations } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";


describe("SearchBarComponent", () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  beforeAll(()=>{
    window.onbeforeunload = () => "";
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [UiModule],
      providers: [provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("default vale of placeholder", ()=>{
    expect(component.placeholder).toContain("Search");
  });
  it("should form have value",()=>{
    spyOn(component,"handleSubmit").and.callThrough();
    const form = fixture.debugElement.query(By.css("form")).nativeElement;
    form.dispatchEvent(new Event("submit"));
    expect(component.handleSubmit).toHaveBeenCalledTimes(1);
  });
});
