import {
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
} from "@angular/core";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
export class ServerStatusComponent implements OnInit {
  currentStatus: "online" | "offline" | "unknown" = "online";
  // private interval?: ReturnType<typeof setInterval>;
  private refDestroy = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random(); //0 - 0.9999...
      if (rnd < 0.5) {
        this.currentStatus = "online";
      } else if (rnd < 0.9) {
        this.currentStatus = "offline";
      } else {
        this.currentStatus = "unknown";
      }
    }, 5000);

    this.refDestroy.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
