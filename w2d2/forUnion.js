// For Union
const numsA4 = [1, 2, 2, 2, 7];
const numsB4 = [2, 2, 6, 6, 7];
const expected4 = [1, 2, 2, 2, 6, 6, 7];

const numsA5 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB5 = [2, 2, 6, 6, 7];
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedUnion(sortedA, sortedB) {
    let newArr = []
    let ai = 0
    let bi = 0
    let arri = 0
    while (ai < sortedA.length && bi < sortedB.length) {
        if (sortedA[ai] < sortedB[bi]) {
            newArr.push(sortedA[ai])
            ai++
        }
        else if (sortedA[ai] > sortedB[bi]) {
            newArr.push(sortedB[bi])
            bi++
        }
        else { //if they are equal add to expected arr
            newArr.push(sortedA[ai])
            arri++
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



// bonus algo: 

/**
  * Complete the intersection & union algo with 2 unsorted arrays 
  * Try to complete the algo with O(n) time complexity
*/
