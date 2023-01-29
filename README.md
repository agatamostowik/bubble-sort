# bubble-sort

![alt hanoi tower](https://www.stemlittleexplorers.com/wp-content/uploads/2020/06/Tower-of-Hanoi-Tower-of-Brahma-or-Lucas-Tower.jpg)

The  goal is to sort an array of numbers. I used hanoi towers to visualize my process of thinking. The first two numbers from the array A are compared. The smaller number is moved to array B,  while the bigger number remains in the first array A. This function continues until there is only one element left in the array A - this is the highest number and it can be moved to the result array C.
Since then the middle array is passed to the bubbleSort function as A array the process of sorting continues until all numbers find place in result array C.

| A           | B         | C   |
|-------------|-----------|-----|
| [3,2,4,5,1] | []        | []  |
| [3,4,5,1]   | [2]       | []  |
| [4,5,1]     | [2,3]     | []  |
| [5,1]       | [2,3,4]   | []  |
| [5]         | [2,3,4,1] | []  |
| []          | [2,3,4,1] | [5] |
| [2,3,4,1]   | []        | [5] |
| [3,4,1]     | [2]       | [5] | 

... and so on
