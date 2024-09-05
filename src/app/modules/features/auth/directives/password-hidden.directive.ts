import { Directive, TemplateRef, OnInit, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "app-password-input[appPasswordHidden]",
})
export class PasswordHiddenDirective implements OnInit {

  constructor(private _templateRef: TemplateRef<unknown>, private _viewContainerRef: ViewContainerRef) { }
  ngOnInit(){
    this._viewContainerRef.createEmbeddedView(this._templateRef);
    console.log(123123);
  }
}
