import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-playlists",
  templateUrl: "./playlists.component.html",
  styleUrls: ["./playlists.component.css"]
})
export class PlaylistsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  playlistTitle = "playlist Title";
  playlistArtwork = "https://via.placeholder.com/150x150";
}
