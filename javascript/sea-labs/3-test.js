function numBusesToDestination(routes, source, target) {
  if (source === target) return 0;

  const stopToRoutes = new Map(); // Di sini kita memetakan tiap bus stop dilewati rute mana aja. Format: stop -> [list of routes crossing this stop]
  // Kita pakai Map agar key-nya bisa berupa angka

  for (i = 0; i < routes.length; i++) {
    // ini looping semua route dalam routes
    for (j = 0; j < routes[i].length; j++) {
      // ini looping setiap bus stop yang ada dalam route
      const stop = routes[i][j]; // Ini adalah wadah untuk tiap bus top yang ada
      if (!stopToRoutes.has(stop)) {
        // Dicek apakah bus stop udah ada atau belum di dalam stopToRoutes
        stopToRoutes.set(stop, []);
      }
      stopToRoutes.get(stop).push(i); // Pada tiap bus stop, kita masukkan route mana aja yang melewati dia
    }
  }

  const visitedRoutes = new Set();
  const visitedStops = new Set();
  const queue = []; // nampung bus stop terakhir yang kita lewati

  queue.push(source);
  visitedStops.add(source);
  let buses = 0;

  while (queue.length > 0) {
    // Selama queue masih nambah...
    const size = queue.length;
    buses++; // Artinya loop akan jalan dan jumlah bus yang dinaiki nambah 1

    for (let i = 0; i < size; i++) {
      const stop = queue.shift(); // Di shift, alias kita ganti bus stop
      const routesFromStop = stopToRoutes.get(stop) || []; // route mana aja yang dilewati

      for (let j = 0; j < routesFromStop.length; j++) {
        const routeIndex = routesFromStop[j];
        console.log(`Route mana ini ? ${routeIndex}`);

        if (visitedRoutes.has(routeIndex)) {
          continue; // Kalau udah ada, lanjut aja loop nya ke j berikutnya
        }
        visitedRoutes.add(routeIndex); // Kalau belum ada, masukin ke visitedRoutes

        const latestroute = routes[routeIndex];
        console.log(`Latest route: ${latestroute}`);

        for (let k = 0; k < latestroute.length; k++) {
          const nextStop = latestroute[k];
          console.log(`Bus stop: ${nextStop}`);

          if (nextStop === target) {
            return buses;
          }

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

// function numBusesToDestination(routes, source, target) {
//   if (source === target) return 0;

//   const stopToRoutes = new Map();

//   for (let i = 0; i < routes.length; i++) {
//     for (const stop of routes[i]) {
//       if (!stopToRoutes.has(stop)) {
//         stopToRoutes.set(stop, []);
//       }
//       stopToRoutes.get(stop).push(i);
//     }
//   }

//   const visitedRoutes = new Set();
//   const visitedStops = new Set();
//   const queue = [];
//   let buses = 0;

//   queue.push(source);
//   visitedStops.add(source);

//   while (queue.length > 0) {
//     const size = queue.length;
//     buses++;

//     for (let i = 0; i < size; i++) {
//       const stop = queue.shift();

//       const routesFromStop = stopToRoutes.get(stop) || [];
//       for (const routeIndex of routesFromStop) {
//         if (visitedRoutes.has(routeIndex)) continue;
//         visitedRoutes.add(routeIndex);

//         for (const nextStop of routes[routeIndex]) {
//           if (nextStop === target) return buses;
//           if (!visitedStops.has(nextStop)) {
//             visitedStops.add(nextStop);
//             queue.push(nextStop);
//           }
//         }
//       }
//     }
//   }

//   return -1;
// }

// console.log(
//   numBusesToDestination(
//     [
//       [1, 2, 7],
//       [3, 6, 7],
//     ],
//     1,
//     6
//   )
// );
