/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class TownCommon {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends TownCommon {
  constructor(name, buildYear, noOfTrees, parkArea) {
    super(name, buildYear);
    this.noOfTrees = noOfTrees;
    this.parkArea = parkArea;
  }
  calculateTreeDensity() {
    this.treeDensity = this.noOfTrees / this.parkArea;
  }
  calculateAgeofPark() {
    this.age = new Date().getFullYear() - this.buildYear;
  }
}

class Street extends TownCommon {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.size = size;
    this.length = length;
  }
}

let sizeClassificationMap = new Map();
sizeClassificationMap.set(1, 'tiny');
sizeClassificationMap.set(2, 'small');
sizeClassificationMap.set(3, 'normal');
sizeClassificationMap.set(4, 'big');
sizeClassificationMap.set(5, 'huge');

let park1 = new Park('lion park', 1990, 1011, 220);
let park2 = new Park('tiger park', 1983, 800, 300);
let park3 = new Park('monkey park', 1999, 2003, 330);

let street1 = new Street('Avinash street', 1977, 0.5, 1);
let street2 = new Street('Abishek street', 1981, 1, 2);
let street3 = new Street('Aswin street', 1992, 3, 4);
let street4 = new Street('Anish street', 1978, 2);

let mapOfDatas = new Map();
mapOfDatas.set('parks', [park1, park2, park3]);
mapOfDatas.set('streets', [street1, street2, street3, street4]);

console.log('*****************************************');
console.log(`1) Tree Densities of Each Park are ....\n`);
mapOfDatas.get('parks').forEach(park => {
  park.calculateTreeDensity();
  console.log(`${park.treeDensity}\n`);
});
console.log('*****************************************');
console.log("2) Average age of each town's park..");
let averageAge = 0;
mapOfDatas.get('parks').forEach(park => {
  park.calculateAgeofPark();
  averageAge += park.age;
});
console.log(`${averageAge / mapOfDatas.get('parks').length}`);
console.log('*****************************************');
console.log(`3) The name of the park that has more than 1000 trees..`);
mapOfDatas.get('parks').map(park => {
  if (park.noOfTrees > 1000) {
    return console.log(`${park.name}`);
  }
});
console.log('*****************************************');
console.log(`4) Total and average length of the town's streets..`);
let totalLengthOfStreets = 0;
mapOfDatas
  .get('streets')
  .forEach(street => (totalLengthOfStreets += street.length));
console.log(`Total Street Length: ${totalLengthOfStreets}`);
console.log(
  `Average Street Lengths: ${totalLengthOfStreets /
    mapOfDatas.get('streets').length}`
);
console.log('*****************************************');
console.log(`5) Size classification of all streets..`);
mapOfDatas.get('streets').forEach(street => {
  console.log(
    `${street.name} is with size classificationn of ${sizeClassificationMap.get(
      street.size
    )}`
  );
});
console.log('*****************************************');
