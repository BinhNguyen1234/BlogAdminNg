import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TestLayoutComponent } from "./test-layout.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("TestLayoutComponent", () => {
  let component: TestLayoutComponent;
  let fixture: ComponentFixture<TestLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({  
    imports: [TestLayoutComponent, BrowserAnimationsModule],
    })
    .compileComponents();
    fixture = TestBed.createComponent(TestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
