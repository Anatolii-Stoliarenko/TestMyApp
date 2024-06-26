import { Component } from "@angular/core";

import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Tickets } from "./ticket/ticket.model";
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: "app-tickets",
  standalone: true,
  templateUrl: "./tickets.component.html",
  styleUrl: "./tickets.component.css",
  imports: [NewTicketComponent, TicketComponent],
})
export class TicketsComponent {
  tickets: Tickets[] = [];

  onAdd(data: { title: string; request: string }) {
    const ticket: Tickets = {
      title: data.title,
      request: data.request,
      id: Math.random().toString(),
      status: "open",
    };

    this.tickets.push(ticket);
  }

  onClose(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: "closed" };
      }
      return ticket;
    });
  }
}
