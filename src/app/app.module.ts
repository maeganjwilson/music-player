import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NowPlaying } from "./now-playing/now-playing.component";

@NgModule({
  declarations: [AppComponent, NowPlaying],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
