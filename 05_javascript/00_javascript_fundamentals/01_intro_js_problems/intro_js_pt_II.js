// Write a function titleize that takes an array of names and a function (callback).titleize should use Array.prototype.map to create a new array full of titleized versions of each name - titleize meaning "Roger" should be made to read "Mx. Roger Jingleheimer Schmidt".Then pass this new array of names to the callback, which should use Array.prototype.forEach to print out each titleized name.

// > titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx.Mary Jingleheimer Schmidt
// Mx.Brian Jingleheimer Schmidt
// Mx.Leo Jingleheimer Schmidt
// undefined


// function titleize(arr, func) {
//   let titleizedNames = arr.map(name => {
//     return `Mx. ${name} Jingleheimer Schmidt`;
//   });

//   func(titleizedNames);
// }

// function printNames(names) {
//   names.forEach(name => {
//     console.log(name);
//   });
// }

// titleize(["Mary", "Brian", "Leo"], printNames);




// Phase II: Constructors, Prototypes, and this
// First write a constructor function for an elephant.Each elephant should have a name, height(in inches), and array of tricks in gerund form(e.g. "painting a picture" rather than "paint a picture").

// Next write a few prototype functions that will be shared among all elephants:

// Elephant.prototype.trumpet: should print "(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"
// Elephant.prototype.grow: should increase the elephant's height by 12 inches
// Elephant.prototype.addTrick(trick): add a new trick to their existing repertoire
// Elephant.prototype.play: print out a random trick, e.g. "(name) is (trick)!"
// Hint: look up some JS Math methods!
// Make sure to create an elephant and test all of these functions out on them method style!



// class Elephant {
//   constructor(name, height, tricks) {
//     this.name = name;
//     this.height = height;
//     this.tricks = tricks;
//   }

//   trumpet() {
//     console.log(`${this.name} the elephant goes 'phrRRRR!!!'`);
//   }
  
//   grow() {
//     this.height += 12;
//   }

//   addTrick(trick) {
//     this.tricks.push(trick);
//   }

//   play() {
//     let randomTrickIndex = Math.floor(Math.random() * (this.tricks.length));

//     console.log(`${this.name} is ${this.tricks[randomTrickIndex]}!`)
//   }

//   paradeHelper(eleph) {
//     console.log(`${eleph.name} is trotting by!`);
//   }
// }

// let e = new Elephant('Kenny', 72, ['painting', 'driving', 'swimming', 'running']);

// e.play();





// Phase III: Function Invocation
// First, let's make a few elephants so we have a small herd. Feel free to copy the code below, or to make your own with any attributes you like. Make sure to store all of our elephants in an array.

// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

// let herd = [ellie, charlie, kate, micah];
// Now let's create a function called paradeHelper that we'll use to have an elephant parade.It should take a single elephant as an argument; this way, we can pass it as a callback to forEach when called on our herd.Make sure to store it as a property on the Elephant object.You can populate it with any console.log statement you want to build your parade(e.g. "___ is trotting by!").

// For example:

// > Elephant.paradeHelper(micah);
// Micah is trotting by!
// undefined
// Once you have this function, call forEach on the herd and pass it in as the callback without invoking it.Elephants galore!



// class Elephant {
//   constructor(name, height, tricks) {
//     this.name = name;
//     this.height = height;
//     this.tricks = tricks;
//   }

//   trumpet() {
//     console.log(`${this.name} the elephant goes 'phrRRRR!!!'`);
//   }

//   grow() {
//     this.height += 12;
//   }

//   addTrick(trick) {
//     this.tricks.push(trick);
//   }

//   play() {
//     let randomTrickIndex = Math.floor(Math.random() * (this.tricks.length));

//     console.log(`${this.name} is ${this.tricks[randomTrickIndex]}!`)
//   }

//   paradeHelper(eleph) {
//     console.log(`${eleph.name} is trotting by!`);
//   }
// }





// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

// let herd = [ellie, charlie, kate, micah];

// herd.forEach(ele => {
//   ele.paradeHelper(ele);
// });







// Phase IV: Closures
// Let's make a function dinerBreakfast. Ultimately, we want it to return an anonymous closure, which we will be able to use to keep adding breakfast foods to our initial order.

//   > let bfastOrder = dinerBreakfast();
// "I'd like cheesy scrambled eggs please"
//   > bfastOrder("chocolate chip pancakes");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes please."
//   > bfastOrder("grits");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes and grits please."
// Hints:

// order should be initialized to a starting order(e.g.scrambled eggs and bacon) before the anonymous function can do its work.
// The closure should capture / close over order
// What should the return value of dinerBreakfast be ?
//   Which function should take in the additional food as an argument ?
//     Make sure you can call it multiple times and keep chaining on more breakfast foods!

let dinerBreakfast = function () {
  var food = 'scrambled eggs & bacon';
  console.log(`I'd like ${food} please.`);

  return function (newFood) {
    food += ` and ${newFood}`;
    console.log(`I'd like ${food} please.`);
  }
};

let bfastOrder = dinerBreakfast();
bfastOrder('pancakes');
bfastOrder('grits');
