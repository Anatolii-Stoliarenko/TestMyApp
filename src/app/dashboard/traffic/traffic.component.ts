import { Component, inject } from "@angular/core";

import { DataService } from "../../data.service";

@Component({
  selector: "app-traffic",
  standalone: true,
  imports: [],
  templateUrl: "./traffic.component.html",
  styleUrl: "./traffic.component.css",
})
export class TrafficComponent {
  private dataService = inject(DataService);

  dummyTrafficData = this.dataService.data;
  maxTraffic = Math.max(...this.dataService.data.map((data) => data.value));
}
