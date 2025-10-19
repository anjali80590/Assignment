class TrafficLightState {
  display() {}
  next() {}
}

class RedLightState extends TrafficLightState {
  display() {
    console.log("RED LIGHT - Vehicles must STOP");
  }

  next() {
    return new GreenLightState();
  }
}

class GreenLightState extends TrafficLightState {
  display() {
    console.log("GREEN LIGHT - Vehicles can MOVE");
  }

  next() {
    return new YellowLightState();
  }
}

class YellowLightState extends TrafficLightState {
  display() {
    console.log("YELLOW LIGHT - Vehicles should SLOW DOWN");
  }

  next() {
    return new RedLightState();
  }
}

class TrafficLight {
  constructor() {
    this.currentState = new RedLightState();
  }

  setState(state) {
    this.currentState = state;
  }

  changeLight() {
    this.currentState.display();
    this.currentState = this.currentState.next();
  }
}
