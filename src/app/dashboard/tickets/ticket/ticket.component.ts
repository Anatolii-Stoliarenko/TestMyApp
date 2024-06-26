import { Component, Input, input, output, signal } from "@angular/core";
import { Tickets } from "./ticket.model";

@Component({
  selector: "app-ticket",
  standalone: true,
  imports: [],
  templateUrl: "./ticket.component.html",
  styleUrl: "./ticket.component.css",
})
export class TicketComponent {
  data = input.required<Tickets>();
  close = output();

  visibleDetail = signal(false);

  onToggleVisible() {
    // this.visibleDetail.set(!this.visibleDetail());
    this.visibleDetail.update((visible) => !visible);
  }

  onMarkAsComplited() {
    this.close.emit();
  }
}
