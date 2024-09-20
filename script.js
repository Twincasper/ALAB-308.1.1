// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

const isDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
const isFirstLarger = n1 > n4;
const result = (n2 - n1) * n3;
const remainder = result % n4;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`);
console.log(`Check one: The sum of the numbers is 50: ${isSum50}`);
console.log(`Check two: At least two numbers are odd: ${isTwoOdd}`);
console.log(`Check three: No number is larger than 25: ${isUnder25}`);
console.log(`Check four: All numbers are unique: ${isUnique}`);

const tripDistance = 1500;
const fiftyFiveMph = 30;
const sixtyMph = 28;
const seventyFiveMph = 23;
const fuelBudget = 175;
const costOfFuel = 3;

const fuelNeededFiftyFive = Math.ceil(tripDistance / fiftyFiveMph);
const fuelNeededSixty = Math.ceil(tripDistance / sixtyMph);
const fuelNeededSeventyFive = Math.ceil(tripDistance / seventyFiveMph);

const fuelCostFiftyFive = fuelNeededFiftyFive * costOfFuel;
const fuelCostSixty = fuelNeededSixty * costOfFuel;
const fuelCostSeventyFive = fuelNeededSeventyFive * costOfFuel;

const fuelStatusFiftyFive = fuelBudget < fuelCostFiftyFive ? "unable" : "able";
const fuelStatusSixty = fuelBudget < fuelCostSixty ? "unable" : "able";
const fuelStatusSeventyFive = fuelBudget < fuelCostSeventyFive ? "unable" : "able";

console.log(`We want to go on a trip of ${tripDistance} miles. Our car goes fifty-five miles per hour, because in this hypothetical scenario our car is stuck at one static speed the entire time. So we'll need ${fuelNeededFiftyFive} gallons of fuel. At that speed it'll take us ${Math.ceil(tripDistance / fiftyFiveMph)} hours to complete the trip. The cost of fuel will be $${fuelCostFiftyFive}, so we are ${fuelStatusFiftyFive} to complete the trip.`);



// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);