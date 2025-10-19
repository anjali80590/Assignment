class LightState {
  turnOn(light) {}
  turnOff(light) {}
  motionDetected(light) {}
  adjustBrightness(light) {}
}

class OffState extends LightState {
  turnOn(light) {
    console.log("Turning light on manually.");
    light.setState(new OnState());
  }

  turnOff(light) {
    console.log("Light is already off.");
  }

  motionDetected(light) {
    console.log("Motion detected. Turning light on automatically.");
    light.setState(new MotionDetectionState());
  }

  adjustBrightness(light) {
    console.log("Cannot adjust brightness - light is off.");
  }
}

class OnState extends LightState {
  turnOn(light) {
    console.log("Light is already on.");
  }

  turnOff(light) {
    console.log("Turning light off.");
    light.setState(new OffState());
  }

  motionDetected(light) {
    console.log("Motion detected but light is already on.");
  }

  adjustBrightness(light) {
    console.log("Adjusting brightness based on time of day.");
    light.setState(new BrightnessAdjustmentState());
  }
}

class MotionDetectionState extends LightState {
  turnOn(light) {
    console.log("Light is already on from motion detection.");
  }

  turnOff(light) {
    console.log("Turning light off. Motion detection still active.");
    light.setState(new OffState());
  }

  motionDetected(light) {
    console.log("Motion continues to be detected.");
  }

  adjustBrightness(light) {
    console.log("Adjusting brightness for motion-activated light.");
    light.setState(new BrightnessAdjustmentState());
  }
}

class BrightnessAdjustmentState extends LightState {
  constructor() {
    super();
    this.isDaytime = Math.random() > 0.5;
  }

  turnOn(light) {
    console.log("Light is already on.");
  }

  turnOff(light) {
    console.log("Turning light off.");
    light.setState(new OffState());
  }

  motionDetected(light) {
    console.log("Motion detected during brightness adjustment.");
  }

  adjustBrightness(light) {
    if (this.isDaytime) {
      console.log("Daytime: Reducing brightness to save energy.");
    } else {
      console.log("Nighttime: Increasing brightness for better visibility.");
    }
  }
}

class EnergySaverState extends LightState {
  turnOn(light) {
    console.log("Turning on in energy saver mode.");
  }

  turnOff(light) {
    console.log("Turning light off.");
    light.setState(new OffState());
  }

  motionDetected(light) {
    console.log("Motion detected - temporarily increasing brightness.");
  }

  adjustBrightness(light) {
    console.log("Brightness optimized for energy saving.");
  }
}

class SmartLight {
  constructor() {
    this.currentState = new OffState();
  }

  setState(state) {
    this.currentState = state;
  }

  turnOn() {
    this.currentState.turnOn(this);
  }

  turnOff() {
    this.currentState.turnOff(this);
  }

  motionDetected() {
    this.currentState.motionDetected(this);
  }

  adjustBrightness() {
    this.currentState.adjustBrightness(this);
  }

  enableEnergySaver() {
    console.log("Enabling energy saver mode.");
    this.setState(new EnergySaverState());
  }
}
