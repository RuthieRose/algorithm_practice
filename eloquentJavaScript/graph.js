const roads = [
 "Alice's House-Bob's House",
 "Alice's House-Post Office",
 "Daria's House-Ernie's House",
 "Ernie's House-Grete's House",
 "Grete's House-Shop",
 "Marketplace-Post Office",
 "Alice's House-Cabin",
 "Bob's House-Town Hall",
 "Daria's House-Town Hall",
 "Grete's House-Farm",
 "Marketplace-Farm",
 "Marketplace-Shop",
 "Marketplace-Town Hall",
 "Shop-Town Hall"
];

function buildGraph(edges) {
 let graph = Object.create(null);
 function addEdge(from, to) {
  if (graph[from] == null) {
   graph[from] = [to];
  } else {
   graph[from].push(to)
  }
 }

 for (let [from, to] of edges.map(road => road.split('-'))) {
  addEdge(from, to);
  addEdge(to, from);
 }
 return graph;
}

const roadGraph = buildGraph(roads)

class VillageState {
 constructor(place, parcels) {
  this.place = place;
  this.parcels = parcels;
 }

 move(destination) {
  if (!roadGraph[this.place].includes(destination)) {
   return this;
  } else {
   let parcels = this.parcels.map(p => {
    if (p.place != this.place) return p;
    return {place: destination, address: p.address}
   }).filter(p => p.place != p.address);
   return new VillageState(destination, parcels);
  }
 }
}

let first = new VillageState(
 "Post Office",
 [{place: "Post Office", address: "Alice's house"}]
);
let next = first.move("Alice's House");


console.log(next.place)