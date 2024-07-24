import { Component, Input } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { FormControl } from "@angular/forms";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { map } from "rxjs";
// import { map, Observable, startWith } from "rxjs";

const SEARCH = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>`
@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrl: "./search-bar.component.css"
})
export class SearchBarComponent{
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIconLiteral("search", sanitizer.bypassSecurityTrustHtml(SEARCH))
  }
  @Input() placeholder = "Search";
  readonly formControl = new FormControl();
  protected readonly labelControl = toSignal(
    this.formControl.valueChanges.pipe(map(v => v || "auto")),
    {initialValue: "auto"}
  )
}

