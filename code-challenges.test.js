// UNIT 4 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// describe("greatNum2", () => {
//   it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence ", () => {
//     const fibonacciLength1 = 6
//     const fibonacciLength2 = 10

//     expect(greatNum2(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(greatNum2(fibonacciLength2)).toEqual([
//       1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
//     ])
//   })
// })

// // b) Create the function that makes the test pass.

// const greatNum2 = (fibArray) => {
//   // If fibArray is less than or equal to 0 return an empty array
//   if (fibArray <= 0) return []
//   // If fibArray is strictly equal to 1 return an array with 1
//   if (fibArray === 1) return [1]
//   // Initialize an array with the first two Fibonacci numbers: 1 and 1
//   const fibonacci = [1, 1]
//   // Generate Fibonacci numbers up to fibArray
//   for (let i = 2; i < fibArray; i++) {
//     // Calculate the next Fibonacci number by adding the last two numbers
//     fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
//   }
//   // Return the array of Fibonacci numbers
//   return fibonacci
// }

// Pseudo code:
//Create a function that takes in a parameter called fibArray
//

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("upDownVotes", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    const votes2 = { upVotes: 2, downVotes: 33 }
    expect(upDownVotes(votes1)).toEqual(11)
    expect(upDownVotes(votes2)).toEqual(-31)
  })
})

// Expected output: 11

// Expected output: -31

// b) Create the function that makes the test pass.
// Create a function upDownVotes that takes votes as input
const upDownVotes = (votes) => {
  // Extract the upVotes from the votes object
  const upVotes = votes.upVotes
  // Extract the downVotes from the votes object
  const downVotes = votes.downVotes
  // Calculate the result by subtracting downVotes from upVotes
  const result = upVotes - downVotes
  // Return the result
  return result
}
// Example usage
const votes1 = { upVotes: 13, downVotes: 2 }
const votes2 = { upVotes: 2, downVotes: 33 }
// Show the result
console.log(upDownVotes(votes1)) // Expected output: 11
console.log(upDownVotes(votes2)) // Expected output: -31

// Pseudo code:
