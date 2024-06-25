import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  inject,
  input,
} from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    "(click)": "onClick()",
  },
})
export class ControlComponent {
  // @HostBinding("class") className = "control"; // @HostBinding used in past. Now host: { class: "control" },
  // @HostListener('click') onClick() { // @HostListener used in past. Now host: { "click": "onClick()" },
  //   console.log("Clicked!!");
  // }
  title = input.required();
  private el = inject(ElementRef);

  onClick() {
    console.log("Clicked!!");
    console.log(this.el);
    this.el.nativeElement.outerText = "test";
  }
}
