import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NowPlayingComponent } from "./now-playing/now-playing.component";

@NgModule({
  imports: [CommonModule],
  declarations: [NowPlayingComponent],
  exports: [NowPlayingComponent]
})
export class NowPlayingModule {}
