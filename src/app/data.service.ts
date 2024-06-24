import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private currentStatus = "online";
  private dummyTrafficData = [
    {
      id: "d1",
      value: 433,
    },
    {
      id: "d2",
      value: 260,
    },
    {
      id: "d3",
      value: 290,
    },
    {
      id: "d4",
      value: 410,
    },
    {
      id: "d5",
      value: 397,
    },
    {
      id: "d6",
      value: 488,
    },
    {
      id: "d47",
      value: 589,
    },
  ];

  get status() {
    return this.currentStatus;
  }

  get data() {
    return this.dummyTrafficData;
  }
}
