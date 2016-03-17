let fibonacci = {
  [Symbol.iterator]() {
    let previous = 0;
    let current = 1;

    return {
      next() {
        [previous, current] = [current, previous + current];

        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
