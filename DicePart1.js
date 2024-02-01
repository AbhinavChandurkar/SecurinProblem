function PossibleComboCount(dieA, dieB) {
  // How many total combinations are possible?
  // Show the math along with the code!
  // 36 combinations using two 6-faced dice are possible.
  console.log(dieA.length * dieB.length);
}

function PossibleCombinations(die1, die2) {
  let possibleCombinations = [];
  let count = 1;
  for (let i = 0; i < dieA.length; i++) {
    for (let j = 0; j < dieB.length; j++) {
      let sum = die1[i] + die2[j];
      possibleCombinations.push(`${die1[i]} + ${die2[j]} = ${sum}`);
      console.log(`${count++}) ${possibleCombinations[i * dieB.length + j]}`);
    }
  }
  return possibleCombinations;
}

function calculateProbability(totalCombinations, possibleCombinations) {
  console.log(
    "Math:- keeping the count of the each sum appering in the list of combinations"
  );
  let sumCounts = {};
  possibleCombinations.forEach((combination) => {
    let sum = parseInt(combination.split("=")[1].trim());
    if (sumCounts[sum]) {
      sumCounts[sum]++;
    } else {
      sumCounts[sum] = 1;
    }
  });

  Object.keys(sumCounts).forEach((sum) => {
    let probability = sumCounts[sum] / totalCombinations;
    console.log(`P(Sum = ${sum}) = ${sumCounts[sum]}/${totalCombinations}`);
  });
}

// Call all the functions
let dieA = [1, 2, 3, 4, 5, 6];
let dieB = [1, 2, 3, 4, 5, 6];

console.log("Part-A");
console.log(
  "1. How many total combinations are possible? Show the math along with the code!"
);
console.log(
  "Math:- Total Combinations = Number of sides on Die A * Number of sides on Die B"
);
PossibleComboCount(dieA, dieB);

console.log(
  "2.Calculate and display the distribution of all possible combinations that can be obtained when rolling both Die A and Die B together"
);
console.log(
  "Math:- We need to check the sum for all possible combination there are 36 combination, sum for all possible combination is as follow"
);
PossibleCombinations(dieA, dieB);
let combinations = PossibleCombinations(dieA, dieB);
console.log(
  "3. Calculate the Probability of all Possible Sums occurring among the number of combinations from (2):"
);
calculateProbability(dieA.length * dieB.length, combinations);
