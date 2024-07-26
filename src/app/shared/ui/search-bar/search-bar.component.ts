import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

// import { map, Observable, startWith } from "rxjs";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrl: "./search-bar.component.css"
})
export class SearchBarComponent{
  @Input() placeholder = "Search";
  searchBarForm = new FormGroup({
    searchString: new FormControl("",[
      Validators.required,
      Validators.minLength(1)
    ])
  });
  handleSubmit(){
    console.log(this.searchBarForm.value.searchString);
  }
}

