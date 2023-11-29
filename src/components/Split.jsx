import { useEffect, useState } from "react";
import "../../index.css";

function Split({ onHandleScore, index, onFeedback }) {
  const [currentNumber, setCurrentNumber] = useState(
    4 + Math.ceil(Math.random() * 6)
  );
  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [right, setRight] = useState([false, false, false, false, false]);
  const [wrong, setWrong] = useState([false, false, false, false, false]);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [left, setLeft] = useState(["", "", "", "", ""]);
  const [checkedCorrect, setCheckedCorrect] = useState(false);
  const [checked, setChecked] = useState(false);

  const amount = 5;
  const splits = Array.from({ length: amount }, (_, index) => index + 1);

  useEffect(() => {
    // Generate random unique numbers smaller than numberToSplit
    const uniqueRandomNumbers = [];

    while (uniqueRandomNumbers.length < amount) {
      const randomNumber = Math.floor(Math.random() * currentNumber + 1);
      if (!uniqueRandomNumbers.includes(randomNumber)) {
        uniqueRandomNumbers.push(randomNumber);
      }
    }
    setRandomNumbers(uniqueRandomNumbers);
  }, [currentNumber]);

  function handleReset() {
    setAnswers(["", "", "", "", ""]);
    setRight([false, false, false, false, false]);
    setWrong([false, false, false, false, false]);
    onFeedback(false);
  }

  const numberToSplit = 4 + Math.ceil(Math.random() * 6);

  function check() {
    setCheckedCorrect(false);
    const newRight = [...right]; // Create a copy of the right state
    const newWrong = [...wrong]; // Create a copy of the wrong state

    for (let i = 0; i < amount; i++) {
      if (
        currentNumber - randomNumbers[i] === Number(answers[i]) &&
        Number(answers[i] !== "")
      ) {
        newRight[i] = true; // Set this answer as correct
        newWrong[i] = false; // Set this answer as not wrong
      } else {
        newRight[i] = false; // Set this answer as not correct
        newWrong[i] = true; // Set this answer as wrong
      }
    }

    setRight(newRight); // Update the right state
    setWrong(newWrong); // Update the wrong state
    if (newRight.every((value) => value === true)) {
      setCheckedCorrect(true);
      onFeedback(true);
      !checked && onHandleScore((score) => score + 1);
      setChecked(true);
    }
  }

  function handleNewNumber() {
    setCurrentNumber(numberToSplit);
    handleReset();
    setCheckedCorrect(false);
    setChecked(false);
  }

  // randomize positions (left or right)
  useEffect(() => {
    const newLeft = [];

    for (let i = 0; i < amount; i++) {
      const randomNum = Math.floor(Math.random() * 2);
      newLeft.push(randomNum);
    }
    setLeft(newLeft);
  }, []);

  return (
    <div className="relative flex flex-col w-[122px] h-[360px]">
      <div className="absolute z-0 bg-black w-[136px] h-[68px] triangle mt-[-19px] ml-[-7px]">
        <div className="absolute z-10 bg-emerald-300 w-[122px] h-[60px] triangle text-center pt-5 mt-[5px] ml-[7px]">
          <div className="pb-[48px] font-semibold text-2xl">
            {currentNumber}
          </div>
        </div>
      </div>
      <div className=" w-[full] h-[50px]"></div>
      {splits.map((value, index) => (
        <div
          key={index}
          className="flex z-10 items-center justify-center h-[50px]"
        >
          {Number(left[index]) === 0 ? (
            <>
              <div className="flex items-center font-semibold text-xl justify-center w-1/2 border-t-[3px] border-r-[2px] h-full border-black bg-white">
                {randomNumbers[index]}
              </div>
              <div className="flex items-center justify-center w-1/2 border-t-[3px] border-l-[2px] h-full border-black bg-white">
                <input
                  type="text"
                  value={answers[index]}
                  onChange={(e) => {
                    const newAnswers = [...answers];
                    newAnswers[index] = e.target.value;
                    setAnswers(newAnswers);
                  }}
                  className={`w-[75%] h-[75%] z-10 font-semibold text-xl cursor-pointer rounded-md text-center bg-amber-100 border-2 border-stone-400 border-dashed ${
                    wrong[index]
                      ? "bg-red-300 border-red-500"
                      : right[index]
                      ? "bg-emerald-300 border-emerald-500"
                      : "bg-amber-100"
                  }`}
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center w-1/2 border-t-[3px] border-r-[2px] h-full border-black bg-white">
                <input
                  type="text"
                  value={answers[index]}
                  onChange={(e) => {
                    const newAnswers = [...answers];
                    newAnswers[index] = e.target.value;
                    setAnswers(newAnswers);
                  }}
                  className={`w-[75%] h-[75%] z-10 font-semibold text-xl cursor-pointer rounded-md text-center bg-amber-100 border-2 border-stone-400 border-dashed ${
                    wrong[index]
                      ? "bg-red-300 border-red-500"
                      : right[index]
                      ? "bg-emerald-300 border-emerald-500"
                      : "bg-amber-100"
                  }`}
                />
              </div>
              <div className="flex items-center justify-center font-semibold text-xl w-1/2 border-t-[3px] border-l-[2px] h-full border-black bg-white">
                {randomNumbers[index]}
              </div>
            </>
          )}
        </div>
      ))}

      <div className="flex flex-col w-full h-[60px] mt-[20%] items-center justify-around">
        {(checkedCorrect || answers.some((answer) => answer === "")) && (
          <button
            onClick={handleNewNumber}
            className="w-[90%] h-[25px] shadow-lg font-semibold border-black border-[2px] rounded-md bg-emerald-300
          "
          >
            Nieuw
          </button>
        )}
        {!checkedCorrect && (
          <button
            onClick={() => check(index)}
            className={`w-[90%] h-[25px] shadow-lg font-semibold border-black border-[2px] rounded-md bg-red-300 ${
              answers.every((answer) => answer !== "") ? "" : "hidden"
            }`}
          >
            Check
          </button>
        )}
      </div>
    </div>
  );
}

export default Split;
