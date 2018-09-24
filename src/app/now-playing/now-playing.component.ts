import { Component } from "@angular/core";

@Component({
  selector: "now-playing",
  templateUrl: "./now-playing.component.html",
  styleUrls: ["./now-playing.component.css"]
})
export class NowPlaying {
  trackTitle = "Track title";
  albumArtwork = "https://via.placeholder.com/150x150";
}
