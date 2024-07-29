import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchBarComponent } from "./search-bar.component";
import { UiModule } from "../ui.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


describe("SearchBarComponent", () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [UiModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
