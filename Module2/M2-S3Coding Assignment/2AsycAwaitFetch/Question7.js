function timer(duration, onComplete) {
  if (typeof duration !== "number" || duration < 0) {
    console.error("Invalid duration. Please provide a positive number.");
    return;
  }

  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}
