import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrl: "./search-bar.component.css"
})
export class SearchBarComponent implements OnInit{
  myControl = new FormControl<string | User>("");
  options: User[] = [{name: "Mary"}, {name: "Shelley"}, {name: "Igor"}];
  filteredOptions: Observable<User[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => {
        const name = typeof value === "string" ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : "";
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}

interface User {
  name: string;
}
