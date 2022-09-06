/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * https://www.researchgate.net/publication/332453167/figure/fig1/AS:748486492450816@1555464494152/A-Venn-diagram-of-unions-and-intersections-for-two-sets-A-and-B-and-their-complements.png
 */

// For Intersection
const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; //repeated: 2, 2, 7
const expected1 = [2, 7];// return the distinct intersect numbers

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];


/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

// function orderedIntersection(sortedA, sortedB) {
//     let newArr = [];
//     let leftpointer = 0;
//     let rightpointer = 0;

//     while (leftpointer < sortedA.length && rightpointer < sortedB.length) {
//         if (sortedA[leftpointer] == sortedB[rightpointer]) {
//             if (newArr[] === sortedA[leftpointer]) {
//                 leftpointer++;
//                 rightpointer++;
//             } else {
//                 newArr.push(leftpointer);
//                 leftpointer++;
//                 rightpointer++;
//             }
//         }
//     }
//     return newArr;
// }


// console.log(orderedIntersection(numsA1, numsB1))
// console.log(orderedIntersection(numsA2, numsB2))
// console.log(orderedIntersection(numsA3, numsB3))


function orderedIntersection(sortedA, sortedB) {
    let newArr = []
    let ai = 0
    let bi = 0
    let arri = 0
    while (ai < sortedA.length && bi < sortedB.length) {
        if (sortedA[ai] < sortedB[bi]) {
            ai++
        }
        else if (sortedA[ai] > sortedB[bi]) {
            bi++
        }
        else { //if they are equal add to expected arr
            if (newArr[arri] !== sortedA[ai]) {
                newArr.push(sortedA[ai])
                arri++
            }
            ai++
            bi++
            // if (newArr[arri] === newArr[arri+1]){ //check for duplicates
            //   newArr.pop()
            //   arri++
            // }
        }
    }
    return newArr
}


console.log(orderedIntersection(numsA1, numsB1))
console.log(orderedIntersection(numsA2, numsB2))
console.log(orderedIntersection(numsA3, numsB3))