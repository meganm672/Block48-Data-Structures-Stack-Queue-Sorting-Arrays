//Problem 1-- The expected output is true. Input: s = "({[]})" Output: true

//Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ]. You need to check the following conditions: 

//The opening brackets: 

//- Must match with the corresponding closing brackets of the same type 

//- Must be closed in the correct order 

//- Should have a corresponding opening bracket of the same type 

function isValid(s){
    const stack = [];

    for (let i = 0; i < s.length; i += 1) {
      const top = stack[stack.length - 1];
  
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        stack.push(s[i]);
      } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
        stack.pop();
      } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
        stack.pop();
      } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  
    return stack.length === 0;
  };

const s = "({[]})"


console.log(isValid(s));

//Problem 2
//There are n people in a line waiting to purchase tickets, with the 0th person at the front and the (n - 1)th person at the back. 

//You are given a 0-indexed integer array of tickets of length n, where tickets[I] represents the number of tickets that the ith person wishes to purchase. 

//Each person purchases a ticket in exactly one second. 
//A person can only purchase one ticket at a time and must return to the end of the line (which happens instantly) to purchase additional tickets. 
//If a person has no more tickets to buy, he or she will leave the line. 

//Return the time spent for the individual at position k (0-indexed) to finish buying tickets. 

//Input: tickets = [2,3,2], k = 2
//Output: 6
//Explanation: 
//- In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
//- In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
//The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.

function timeRequiredToBuy(tickets,k){
    let seconds = 0;

    while(tickets[k]  > 0){
        for(let i=0; i < tickets.length; i ++){
            if(tickets[k] === 0) break
            if(tickets[i] > 0){
                tickets[i]--
                seconds++
            }
        }
    }
    return seconds;
}

const tickets = [2,3,2]
const k = 2

console.log(timeRequiredToBuy(tickets,k))

//Problem 3-- The expected output is 3. : heights = [1,1,4,2,1,3]
//You are given an array heights representing the heights of students in a class. 
//The students are standing in a line, and their heights are listed in the order they appear from left to right. 
//The school wants to arrange the students in a non-decreasing order by their heights. 
//However, when they rearrange the students, a few may end up in different positions from their original positions.

//You need to write a function heightChecker(heights) that determines the minimum number of students who are not standing in the correct positions after the rearrangement. 
//Implement the function heightChecker and return the minimum number of students who are not positioned correctly.

function heightChecker(heights){
    //Create a copy of the heights array using the spread operator ([...heights]).
   //Sort the copied array to get the expected order.
    const sortedHeights = [...heights].sort((a,b) => a - b);
    let different = 0;
    //Iterate through the original heights array and compare each element with its counterpart in the sorted copy.
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) different++;//If they are different, increment the diff variable.
    }
    //Return the final count of differences.
    return different;
}

const studentHeights = [1,1,4,2,1,3]

console.log(heightChecker(studentHeights))

//Problem 4-- The expected output is [2,13,3,11,5,17,7].-- original deck = [17,13,11,2,3,5,7]
//You are given a deck of integer arrays. There is a deck of cards with each card having a unique integer, and the integer on the ith card is deck[i].  

//You can arrange the deck in any order; all cards in one deck are initially face-down (unrevealed).  

//Repeat the following steps until all cards are revealed.  

//Step 1: Take out the top card from the deck and reveal it. 

///Step 2: If there are still cards in the deck, you should place the next top card at the bottom of the deck. 

//Step 3: If any cards remain unseen, return to step 1. Otherwise, proceed to the end. 

//Step 4: Return a deck order that reveals the cards in increasing order. 

function deckIncresingOrder(deck){
// Sort the array deck in decending order using sort()
let stack = deck.sort((a, b) => b - a);

// remove first element fom array stack using shift() and initialize to queue
let queue = [stack.shift()];

// run the while loop until stack.length is greater then 0
while (stack.length > 0) {

    // remove the last element from the array queue using pop() and add at first in array queue using unshift()
    queue.unshift(queue.pop());

    // remove the last element from the array stack using pop() and add at first in array queue using unshift()
    queue.unshift(stack.shift()); // Taking out first element of the stack and adding it the front of the queue.
}

// return the resulting array queue
return queue;
}

const arrDeck = [17,13,11,2,3,5,7]

console.log(deckIncresingOrder(arrDeck))