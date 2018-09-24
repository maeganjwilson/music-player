import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaylistsComponent } from "./playlists/playlists.component";

@NgModule({
  imports: [CommonModule],
  declarations: [PlaylistsComponent],
  exports: [PlaylistsComponent]
})
export class PlaylistsModule {}
