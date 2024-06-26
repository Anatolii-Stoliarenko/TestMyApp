import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  viewChild,
} from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent {
  // @ViewChild("form") private form?: ElementRef<HTMLFormElement>;
  private form = viewChild<ElementRef<HTMLFormElement>>("form");
  @Output() add = new EventEmitter<{ title: string; request: string }>();

  onSubmit(title: string, text: string) {
    // this.form?.nativeElement.reset(); //@ViewChild("form")...

    this.add.emit({ title: title, request: text });
    this.form()?.nativeElement.reset(); //signals
  }
}
