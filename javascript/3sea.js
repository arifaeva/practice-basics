function numBusesToDestination(routes, source, target) {
  if (source === target) return 0;

  const stopToRoutes = new Map();

  for (let i = 0; i < routes.length; i++) {
    for (const stop of routes[i]) {
      if (!stopToRoutes.has(stop)) {
        stopToRoutes.set(stop, []);
      }
      stopToRoutes.get(stop).push(i);
    }
  }

  const visitedRoutes = new Set();
  const visitedStops = new Set();
  const queue = [];
  let buses = 0;

  queue.push(source);
  visitedStops.add(source);

  while (queue.length > 0) {
    const size = queue.length;
    buses++;

    for (let i = 0; i < size; i++) {
      const stop = queue.shift();

      const routesFromStop = stopToRoutes.get(stop) || [];
      for (const routeIndex of routesFromStop) {
        if (visitedRoutes.has(routeIndex)) continue;
        visitedRoutes.add(routeIndex);

        for (const nextStop of routes[routeIndex]) {
          if (nextStop === target) return buses;
          if (!visitedStops.has(nextStop)) {
            visitedStops.add(nextStop);
            queue.push(nextStop);
          }
        }
      }
    }
  }

  return -1;
}

console.log(
  numBusesToDestination(
    [
      [1, 2, 7],
      [3, 6, 7],
    ],
    1,
    6
  )
);
