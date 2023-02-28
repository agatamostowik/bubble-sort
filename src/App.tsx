import React from "react";
import { useInterval } from "react-use";

type BubbleSortResult = {
  done: boolean;
  input: number[];
  shift: number[];
  result: number[];
};

const bubbleSort = (
  input: number[],
  shift: number[] = [],
  result: number[] = []
): BubbleSortResult => {
  const [firstElement, ...tail] = input;
  const [secondElement, ...rest] = tail;

  if (!secondElement) {
    if (shift.length === 0) {
      return {
        done: true,
        input: [],
        shift: [],
        result: [firstElement, ...result],
      };
    } else {
      return {
        done: false,
        input: shift,
        shift: [],
        result: [firstElement, ...result],
      };
    }
  } else {
    const lowerNumber = Math.min(firstElement, secondElement);
    const higherNumber = Math.max(firstElement, secondElement);

    return {
      done: false,
      input: [higherNumber, ...rest],
      shift: [...shift, lowerNumber],
      result,
    };
  }
};

type UseSortResult = {
  next: () => void;
  done: boolean;
  output: number[];
};

const useSort = (data: number[]): UseSortResult => {
  const [input, setInput] = React.useState<number[]>(data);
  const [shift, setShift] = React.useState<number[]>([]);
  const [result, setResult] = React.useState<number[]>([]);
  const [done, setDone] = React.useState<boolean>(false);

  return {
    next: () => {
      if (!done) {
        const iteration = bubbleSort(input, shift, result);
        setInput(iteration.input);
        setShift(iteration.shift);
        setResult(iteration.result);
        setDone(iteration.done);
      }
    },
    done: done,
    output: [...input, ...shift, ...result],
  };
};

const App = () => {
  const time = 30;
  const data = [
    11, 19, 13, 4, 16, 2, 6, 14, 3, 18, 20, 9, 15, 8, 7, 17, 5, 1, 10, 12,
  ];

  const { next, done, output } = useSort(data);
  const [isRunning, toggleIsRunning] = React.useState(false);
  const delay = isRunning ? time : null;

  useInterval(next, delay);

  const run = () => {
    toggleIsRunning(!isRunning);
  };

  const nextStep = () => {
    next();
  };

  return (
    <div className="container">
      <div className="wrapper">
        {output.map((value) => {
          const height = (100 * value) / 20;

          return (
            <div
              key={value}
              className="column"
              style={{ height: `${height}%` }}
            >
              {value}
            </div>
          );
        })}
      </div>
      <button onClick={run}>{isRunning ? "stop" : "start"}</button>
      <button onClick={nextStep}>1 step further</button>
      <div>{done ? "DONE" : ""}</div>
    </div>
  );
};

export default App;
