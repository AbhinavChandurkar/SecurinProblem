/**
 * 
 * @param {*} dieA 
 * @param {*} dieB 
 * Now comes the real challenge. You were happily spending a lazy afternoon playing
your board game with your dice when suddenly the mischievous Norse God Loki ( You
love Thor too much & Loki didn’t like that much ) appeared.
Loki dooms your dice for his fun removing all the “Spots” off the dice.

No problem! You have the tools to re-attach the “Spots” back on the Dice.
However, Loki has doomed your dice with the following conditions:
● Die A cannot have more than 4 Spots on a face.
● Die A may have multiple faces with the same number of spots.
● Die B can have as many spots on a face as necessary i.e. even more than 6.
But in order to play your game, the probability of obtaining the Sums must remain the
same!
So if you could only roll P(Sum = 2) = 1/X, the new dice must have the spots reattached
such that those probabilities are not changed.
Input:
● Die_A = [1, 2, 3, 4, 5, 6] & Die B = Die_A = [1, 2, 3, 4, 5, 6]
Output:
● A Transform Function undoom_dice that takes (Die_A, Die_B) as input &
outputs New_Die_A = [?, ?, ?, ?, ?, ?],New_Die_B = [?, ?,
?, ?, ?, ?] where,
● No New_Die A[x] > 4
 */

/**
 *
 * @param {*} dieA
 * @param {*} dieB
 * @returns The probability set of the modified dieA and the original dieB.
 *
 * This function start with an initial pair of dice (dieA and dieB), calculates their
 * probability set, and then one by one modifies dieA to match the probability set of the initial pair.
 *
 * we have taken the intial array as 4 as per the condition given in the problem
 */
function undoomDice(dieA, dieB) {
  let idle = probabilitySet(dieA, dieB);
  let newDieA = [4, 4, 4, 4, 4, 4];
  let result = probabilitySet(newDieA, dieB);
  let status = isEqual(idle, result);
  let i = 0;
  while (!status) {
    newDieA[i] = i + 1;
    result = probabilitySet(newDieA, dieB);
    status = isEqual(idle, result);
    i++;
  }
  console.log("New Die A = " + newDieA);
  console.log("New Die B = " + dieB);
  return result;
}
/**
 *
 * @param {*} dieA
 * @param {*} dieB
 * @returns Set
 * This function calculates the set of possible sums when 2 dice are rolled and return a set
 * containg the count of each sum
 */
function probabilitySet(dieA, dieB) {
  let probabilityPossibleSumsMap = new Map();
  for (let i = 0; i < dieA.length; i++) {
    for (let j = 0; j < dieB.length; j++) {
      let sum1 = dieA[i] + dieB[j];
      if (probabilityPossibleSumsMap.has(sum1)) {
        probabilityPossibleSumsMap.set(
          sum1,
          probabilityPossibleSumsMap.get(sum1) + 1
        );
      } else {
        probabilityPossibleSumsMap.set(sum1, 1);
      }
    }
  }
  return new Set(probabilityPossibleSumsMap.values());
}

/**
 *
 * @param {*} set1
 * @param {*} set2
 * @returns Boolean
 *
 * This function check if the provided 2 sets are eaul to each other or not
 */
function isEqual(set1, set2) {
  if (set1.size !== set2.size) {
    return false;
  }
  for (let item of set1) {
    if (!set2.has(item)) {
      return false;
    }
  }
  return true;
}
let dieA = [1, 2, 3, 4, 5, 6];
let dieB = [1, 2, 3, 4, 5, 6];
console.log();
undoomDice(dieA, dieB);
