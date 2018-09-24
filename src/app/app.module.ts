import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NowPlayingModule } from "./now-playing/now-playing.module";
import { PlaylistsModule } from "./playlists/playlists.module";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NowPlayingModule, PlaylistsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
