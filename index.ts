const input = [3, 2, 4, 5, 1];

const bubbleSort = (
  input: number[],
  middleArray: number[],
  result: number[]
): number[] => {
  const [firstElement, ...rest] = input;
  const [secondElement, ...rest2] = rest;

  if (!secondElement) {
    const newResult = [firstElement, ...result];
    if (middleArray.length === 0) {
      return newResult;
    } else {
      return bubbleSort(middleArray, [], newResult);
    }
  } else {
    const smallestNumber =
      firstElement < secondElement ? firstElement : secondElement;
    const biggerNumber =
      firstElement > secondElement ? firstElement : secondElement;

    const newMiddleArray = [smallestNumber, ...middleArray];
    const newInput = [biggerNumber, ...rest2];

    return bubbleSort(newInput, newMiddleArray, result);
  }
};

const result = bubbleSort(input, [], []);

console.log(result);
