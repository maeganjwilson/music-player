import { NowPlayingModule } from './now-playing.module';

describe('NowPlayingModule', () => {
  let nowPlayingModule: NowPlayingModule;

  beforeEach(() => {
    nowPlayingModule = new NowPlayingModule();
  });

  it('should create an instance', () => {
    expect(nowPlayingModule).toBeTruthy();
  });
});
