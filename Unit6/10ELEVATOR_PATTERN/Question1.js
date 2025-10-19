class ElevatorState {
  move(elevator) {}
  openDoors(elevator) {}
  closeDoors(elevator) {}
  stop(elevator) {}
}

class MovingState extends ElevatorState {
  move(elevator) {
    console.log(`Elevator ${elevator.id} is already moving.`);
  }

  openDoors(elevator) {
    console.log(`Cannot open doors - Elevator ${elevator.id} is moving.`);
  }

  closeDoors(elevator) {
    console.log(
      `Doors are already closed - Elevator ${elevator.id} is moving.`
    );
  }

  stop(elevator) {
    console.log(`Stopping Elevator ${elevator.id}`);
    elevator.setState(new CloseDoorState());
  }
}

class OpenDoorState extends ElevatorState {
  move(elevator) {
    console.log(`Cannot move - Elevator ${elevator.id} doors are open.`);
  }

  openDoors(elevator) {
    console.log(`Doors are already open for Elevator ${elevator.id}`);
  }

  closeDoors(elevator) {
    console.log(`Closing doors for Elevator ${elevator.id}`);
    elevator.setState(new CloseDoorState());
  }

  stop(elevator) {
    console.log(`Elevator ${elevator.id} is stopped with doors open.`);
  }
}

class CloseDoorState extends ElevatorState {
  move(elevator) {
    if (elevator.requests.length > 0) {
      console.log(`Elevator ${elevator.id} starting movement.`);
      elevator.setState(new MovingState());
      elevator.processNextRequest();
    } else {
      console.log(`No requests for Elevator ${elevator.id}`);
    }
  }

  openDoors(elevator) {
    console.log(`Opening doors for Elevator ${elevator.id}`);
    elevator.setState(new OpenDoorState());
  }

  closeDoors(elevator) {
    console.log(`Doors are already closed for Elevator ${elevator.id}`);
  }

  stop(elevator) {
    console.log(
      `Elevator ${elevator.id} is already stopped with doors closed.`
    );
  }
}

class Elevator {
  constructor(id, maxFloors) {
    this.id = id;
    this.maxFloors = maxFloors;
    this.currentFloor = 1;
    this.direction = "idle"; // 'up', 'down', 'idle'
    this.state = new CloseDoorState();
    this.requests = [];
    this.occupancy = 0;
    this.maxOccupancy = 8;
    this.maxWeight = 680; // kg
    this.currentWeight = 0;
    this.isMoving = false;
  }

  setState(state) {
    this.state = state;
  }

  move() {
    this.state.move(this);
  }

  openDoors() {
    this.state.openDoors(this);
  }

  closeDoors() {
    this.state.closeDoors(this);
  }

  stop() {
    this.state.stop(this);
  }

  addRequest(floor, direction, passengerCount = 1, weight = 85) {
    if (this.canAcceptPassengers(passengerCount, weight)) {
      this.requests.push({ floor, direction, passengerCount, weight });
      console.log(
        `Request added to Elevator ${this.id} for floor ${floor}, direction: ${direction}`
      );
      return true;
    }
    console.log(
      `Cannot accept request - capacity exceeded for Elevator ${this.id}`
    );
    return false;
  }

  canAcceptPassengers(passengerCount, weightPerPerson) {
    const newOccupancy = this.occupancy + passengerCount;
    const newWeight = this.currentWeight + passengerCount * weightPerPerson;

    return newOccupancy <= this.maxOccupancy && newWeight <= this.maxWeight;
  }

  boardPassengers(count, weightPerPerson) {
    if (this.canAcceptPassengers(count, weightPerPerson)) {
      this.occupancy += count;
      this.currentWeight += count * weightPerPerson;
      console.log(
        `${count} passengers boarded Elevator ${this.id}. Occupancy: ${this.occupancy}/${this.maxOccupancy}`
      );
      return true;
    }
    return false;
  }

  exitPassengers(count, weightPerPerson) {
    this.occupancy = Math.max(0, this.occupancy - count);
    this.currentWeight = Math.max(
      0,
      this.currentWeight - count * weightPerPerson
    );
    console.log(
      `${count} passengers exited Elevator ${this.id}. Occupancy: ${this.occupancy}/${this.maxOccupancy}`
    );
  }

  processNextRequest() {
    if (this.requests.length === 0) {
      this.direction = "idle";
      this.isMoving = false;
      return;
    }

    const nextRequest = this.requests[0];
    this.moveToFloor(nextRequest.floor);
  }

  moveToFloor(targetFloor) {
    this.isMoving = true;

    if (targetFloor > this.currentFloor) {
      this.direction = "up";
    } else if (targetFloor < this.currentFloor) {
      this.direction = "down";
    } else {
      this.arriveAtFloor(targetFloor);
      return;
    }

    console.log(
      `Elevator ${this.id} moving ${this.direction} from floor ${this.currentFloor} to floor ${targetFloor}`
    );

    const moveInterval = setInterval(() => {
      if (this.direction === "up") {
        this.currentFloor++;
      } else {
        this.currentFloor--;
      }

      console.log(`Elevator ${this.id} now at floor ${this.currentFloor}`);

      if (this.currentFloor === targetFloor) {
        clearInterval(moveInterval);
        this.arriveAtFloor(targetFloor);
      }
    }, 1000);
  }

  arriveAtFloor(floor) {
    this.isMoving = false;
    console.log(`Elevator ${this.id} arrived at floor ${floor}`);
    this.openDoors();

    setTimeout(() => {
      this.processRequestCompletion(floor);
    }, 2000);
  }

  processRequestCompletion(floor) {
    const completedRequests = this.requests.filter(
      (req) => req.floor === floor
    );
    this.requests = this.requests.filter((req) => req.floor !== floor);

    completedRequests.forEach((request) => {
      console.log(
        `Completed request: floor ${request.floor}, direction: ${request.direction}`
      );
    });

    this.closeDoors();

    if (this.requests.length > 0) {
      setTimeout(() => {
        this.move();
      }, 1000);
    } else {
      this.direction = "idle";
      console.log(
        `Elevator ${this.id} is now idle at floor ${this.currentFloor}`
      );
    }
  }

  getStatus() {
    return {
      id: this.id,
      currentFloor: this.currentFloor,
      direction: this.direction,
      occupancy: this.occupancy,
      maxOccupancy: this.maxOccupancy,
      currentWeight: this.currentWeight,
      maxWeight: this.maxWeight,
      isMoving: this.isMoving,
      pendingRequests: this.requests.length,
    };
  }
}

class ElevatorControlSystem {
  constructor(numElevators, numFloors) {
    this.elevators = [];
    this.numFloors = numFloors;
    this.pendingRequests = [];

    for (let i = 1; i <= numElevators; i++) {
      this.elevators.push(new Elevator(i, numFloors));
    }
  }

  requestElevator(
    fromFloor,
    toFloor,
    passengerCount = 1,
    weightPerPerson = 85
  ) {
    console.log(
      `\n=== New elevator request: from floor ${fromFloor} to floor ${toFloor} ===`
    );

    const direction = toFloor > fromFloor ? "up" : "down";
    const bestElevator = this.findBestElevator(
      fromFloor,
      direction,
      passengerCount,
      weightPerPerson
    );

    if (bestElevator) {
      const success = bestElevator.addRequest(
        fromFloor,
        direction,
        passengerCount,
        weightPerPerson
      );
      if (success) {
        console.log(`Assigned Elevator ${bestElevator.id} to request`);

        if (bestElevator.direction === "idle") {
          setTimeout(() => bestElevator.move(), 500);
        }
      } else {
        this.pendingRequests.push({
          fromFloor,
          toFloor,
          direction,
          passengerCount,
          weightPerPerson,
        });
        console.log(`Request queued - no available capacity`);
      }
    } else {
      this.pendingRequests.push({
        fromFloor,
        toFloor,
        direction,
        passengerCount,
        weightPerPerson,
      });
      console.log(`Request queued - no suitable elevator available`);
    }
  }

  findBestElevator(requestFloor, direction, passengerCount, weightPerPerson) {
    let bestElevator = null;
    let bestScore = Infinity;

    for (const elevator of this.elevators) {
      if (!elevator.canAcceptPassengers(passengerCount, weightPerPerson)) {
        continue;
      }

      const score = this.calculateElevatorScore(
        elevator,
        requestFloor,
        direction
      );

      if (score < bestScore) {
        bestScore = score;
        bestElevator = elevator;
      }
    }

    return bestElevator;
  }

  calculateElevatorScore(elevator, requestFloor, requestDirection) {
    const floorDifference = Math.abs(elevator.currentFloor - requestFloor);

    if (elevator.direction === "idle") {
      return floorDifference;
    }

    if (elevator.direction === requestDirection) {
      if (
        elevator.direction === "up" &&
        requestFloor >= elevator.currentFloor
      ) {
        return floorDifference;
      }
      if (
        elevator.direction === "down" &&
        requestFloor <= elevator.currentFloor
      ) {
        return floorDifference;
      }
    }

    return floorDifference + 100;
  }

  processPendingRequests() {
    const processedRequests = [];

    for (let i = this.pendingRequests.length - 1; i >= 0; i--) {
      const request = this.pendingRequests[i];
      const elevator = this.findBestElevator(
        request.fromFloor,
        request.direction,
        request.passengerCount,
        request.weightPerPerson
      );

      if (elevator) {
        const success = elevator.addRequest(
          request.fromFloor,
          request.direction,
          request.passengerCount,
          request.weightPerPerson
        );

        if (success) {
          processedRequests.push(this.pendingRequests.splice(i, 1)[0]);
          console.log(
            `Processed pending request from floor ${request.fromFloor}`
          );

          if (elevator.direction === "idle") {
            setTimeout(() => elevator.move(), 500);
          }
        }
      }
    }

    return processedRequests;
  }

  getSystemStatus() {
    return this.elevators.map((elevator) => elevator.getStatus());
  }

  simulatePassengerMovement() {
    setInterval(() => {
      this.elevators.forEach((elevator) => {
        if (elevator.occupancy > 0 && Math.random() < 0.3) {
          const exitCount = Math.min(
            elevator.occupancy,
            Math.floor(Math.random() * 3) + 1
          );
          elevator.exitPassengers(exitCount, 85);
        }

        if (elevator.occupancy < elevator.maxOccupancy && Math.random() < 0.2) {
          const boardCount = Math.min(
            elevator.maxOccupancy - elevator.occupancy,
            Math.floor(Math.random() * 2) + 1
          );
          elevator.boardPassengers(boardCount, 85);
        }
      });

      this.processPendingRequests();
    }, 5000);
  }
}


const building = new ElevatorControlSystem(3, 10);

console.log("=== Initializing Elevator System ===");
console.log("Building with 3 elevators and 10 floors");


setTimeout(() => building.requestElevator(1, 5, 2), 1000);
setTimeout(() => building.requestElevator(3, 1, 1), 3000);
setTimeout(() => building.requestElevator(7, 10, 4), 5000);
setTimeout(() => building.requestElevator(2, 8, 6), 7000);
setTimeout(() => building.requestElevator(5, 3, 10), 9000); 
building.simulatePassengerMovement();


setInterval(() => {
  console.log("\n=== System Status ===");
  building.getSystemStatus().forEach((status) => {
    console.log(
      `Elevator ${status.id}: Floor ${status.currentFloor}, ${status.direction}, Occupancy: ${status.occupancy}/${status.maxOccupancy}`
    );
  });
}, 10000);
