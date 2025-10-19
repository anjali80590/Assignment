class MediaPlayerState {
  play(player) {}
  pause(player) {}
  stop(player) {}
}

class PlayState extends MediaPlayerState {
  play(player) {
    console.log("Media is already playing.");
  }

  pause(player) {
    console.log("Pausing media.");
    player.setState(new PauseState());
  }

  stop(player) {
    console.log("Stopping media.");
    player.setState(new StopState());
  }
}

class PauseState extends MediaPlayerState {
  play(player) {
    console.log("Resuming media playback.");
    player.setState(new PlayState());
  }

  pause(player) {
    console.log("Media is already paused.");
  }

  stop(player) {
    console.log("Stopping media.");
    player.setState(new StopState());
  }
}

class StopState extends MediaPlayerState {
  play(player) {
    console.log("Starting media playback from beginning.");
    player.setState(new PlayState());
  }

  pause(player) {
    console.log("Cannot pause - media is stopped.");
  }

  stop(player) {
    console.log("Media is already stopped.");
  }
}

class MediaPlayer {
  constructor() {
    this.currentState = new StopState();
  }

  setState(state) {
    this.currentState = state;
  }

  play() {
    this.currentState.play(this);
  }

  pause() {
    this.currentState.pause(this);
  }

  stop() {
    this.currentState.stop(this);
  }
}
