import { Component, inject } from "@angular/core";

import { DataService } from "../../data.service";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
export class ServerStatusComponent {
  private dataService = inject(DataService);
  currentStatus = this.dataService.status;
}
