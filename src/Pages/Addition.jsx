import { useState, useEffect } from "react";

import Footer from "../base/Footer";
import Nav from "../base/Nav";
import CheckCalculationButton from "../buttons/CheckCalculationButton";
import NewCalcButton from "../buttons/NewCalcButton";
import ResetButton from "../buttons/ResetButton";
import FeedBack from "../components/FeedBack";
import NumberLine1 from "../components/NumberLine1";
import ShowCalculation from "../components/ShowCalculation";
import ShowStartingPoints from "../components/ShowStartingPoints";
import Score from "../components/Score";

function Addition() {
  const [leftNumber, setLeftNumber] = useState("");
  const [rightNumber, setRightNumber] = useState("");

  // level
  const [extraEasy, setExtraEasy] = useState(false);
  const [easy, setEasy] = useState(true);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);
  const [extraHard, setExtraHard] = useState(false);

  // help and show the help
  const [help, setHelp] = useState(false);
  const [level, setLevel] = useState(false);
  const [show, setShow] = useState(false);

  // entries for the division in the help
  const [entry1, setEntry1] = useState("");
  const [entry2, setEntry2] = useState("");

  // takes steps on the numberline
  const [click1, setClick1] = useState("");
  const [click2, setClick2] = useState("");
  const [click3, setClick3] = useState("");
  const [click4, setClick4] = useState("");

  // variables to check the jump
  const [rightJump1, setRightJump1] = useState(false);
  const [rightJump2, setRightJump2] = useState(false);
  const [rightJump3, setRightJump3] = useState(false);
  const [rightJump4, setRightJump4] = useState(false);
  const [wrongJump1, setWrongJump1] = useState(false);
  const [wrongJump2, setWrongJump2] = useState(false);
  const [wrongJump3, setWrongJump3] = useState(false);
  const [wrongJump4, setWrongJump4] = useState(false);

  // variables to check the answers with
  const [right1, setRight1] = useState(false);
  const [right2, setRight2] = useState(false);
  const [wrong1, setWrong1] = useState(false);
  const [wrong2, setWrong2] = useState(false);
  const [noHelp1, setNoHelp1] = useState(false);
  const [noHelp2, setNoHelp2] = useState(false);

  //   const [error, setError] = useState(false);
  const [start1, setStart1] = useState("");
  const [start2, setStart2] = useState("");

  // const [right, setRight] = useState(false);
  // const [wrong, setWrong] = useState(false);
  const [count, setCount] = useState(0);
  const [finalAnswer, setFinalAnswer] = useState("");
  const [finalRight, setFinalRight] = useState(false);
  const [finalWrong, setFinalWrong] = useState(false);
  const [checked, setChecked] = useState(false);
  const [feedBack, setFeedBack] = useState(false);
  const [tips, setTips] = useState([]);

  let add = true;

  function handleOptions() {
    setHelp((options) => !options);
  }

  function handleLevel() {
    setLevel((level) => !level);
  }

  function handleReset() {
    finalRight && getCalculation();
    setEntry1("");
    setEntry2("");
    setClick1("");
    setClick2("");
    setClick3("");
    setClick4("");
    setRightJump1(false);
    setRightJump2(false);
    setRightJump3(false);
    setRightJump4(false);
    setWrongJump1(false);
    setWrongJump2(false);
    setWrongJump3(false);
    setWrongJump4(false);
    setRight1(false);
    setRight2(false);
    setWrong1(false);
    setWrong2(false);
    setNoHelp1(true);
    setNoHelp2(true);
    setFinalRight(false);
    setFinalWrong(false);
    setChecked(false);
    setFinalAnswer("");
    setFeedBack(false);
    setTips([]);
  }

  function getCalculation() {
    let firstNumber, secondNumber;

    if (hard || extraHard) {
      hardCalculations(); // Use the hardCalculations function for hard and extraHard modes
    } else {
      do {
        firstNumber = 2 + Math.floor(Math.random() * 18); // Generate random number between 3 and 20 (to include 10)
        secondNumber = 2 + Math.floor(Math.random() * 18); // Generate random number between 3 and 20 (to include 10)
      } while (
        firstNumber + secondNumber > 20 || // Sum should not exceed 20
        firstNumber + secondNumber === 10 || // Sum should not be exactly 10
        firstNumber > 9 || // First number should not be higher than 9
        firstNumber === 5 || // First number should not be 5
        secondNumber > 9 || // Second number should not be 5
        firstNumber + secondNumber < 10 // Sum should be at least 10
      );

      if (easy || extraEasy) {
        if (firstNumber > secondNumber) {
          setLeftNumber(firstNumber);
          setRightNumber(secondNumber);
        } else {
          setLeftNumber(secondNumber);
          setRightNumber(firstNumber);
        }
      } else {
        if (firstNumber > secondNumber) {
          setLeftNumber(firstNumber);
          setRightNumber(secondNumber);
        } else {
          setLeftNumber(secondNumber);
          setRightNumber(firstNumber);
        }

        if (Math.random() >= 0.5) {
          // Swap the positions of the numbers
          const temp = leftNumber;
          setLeftNumber(rightNumber);
          setRightNumber(temp);
        }
      }
    }
  }

  function hardCalculations() {
    let firstNumber, secondNumber;

    do {
      firstNumber = 2 + Math.floor(Math.random() * 13); // Generate random number between 3 and 15
      secondNumber = 2 + Math.floor(Math.random() * 13); // Generate random number between 3 and 15
    } while (
      firstNumber + secondNumber > 20 || // Sum should not exceed 20
      firstNumber + secondNumber === 10 || // Sum should not be exactly 10
      firstNumber > 9 || // First number should not be higher than 9
      firstNumber === 5 || // First number should not be 5
      secondNumber === 10 || // Second number should not be 5
      firstNumber + secondNumber < 10 // Sum should be at least 10
    );

    if (firstNumber > secondNumber) {
      setLeftNumber(secondNumber);
      setRightNumber(firstNumber);
    } else {
      setLeftNumber(firstNumber);
      setRightNumber(secondNumber);
    }
    return [firstNumber, secondNumber];
  }

  const sumTotal = leftNumber + rightNumber;
  const newIndex = Math.random() * 10000000;

  function handleCheck() {
    if (Number(click1) === leftNumber) {
      setRightJump1(true);
    } else {
      setWrongJump1(true);
      setTips((prevTips) => [
        ...prevTips, // Copy the previous tips array
        <p key={newIndex}>
          <span className="font-semibold text-red-400">Let op!</span> Sprong 1
          moet beginnen bij {leftNumber}.
        </p>,
      ]);
    }
    if (entry1 !== "") {
      if (10 - leftNumber === Number(entry1)) {
        setRight1(true);
      } else {
        setWrong1(true);
        setNoHelp1(false);
        setTips((prevTips) => [
          ...prevTips, // Copy the previous tips array
          <p key={newIndex}>
            <span className="font-semibold text-red-400">Let op!</span>{" "}
            {leftNumber} + {entry1} is géén 10.
          </p>,
        ]);
      }
    }
    if (Number(click2) === 10) {
      setRightJump2(true);
    } else {
      setWrongJump2(true);
      setTips((prevTips) => [
        ...prevTips,
        <p key={newIndex}>
          <span className="font-semibold text-red-400">Let op!</span> Sprong 1
          komt niet uit op 10.
        </p>,
      ]);
    }
    if (entry2 !== "") {
      if (sumTotal - 10 === Number(entry2)) {
        setRight2(true);
      } else {
        setWrong2(true);
        setNoHelp2(false);
        setTips((prevTips) => [
          ...prevTips,
          <p key={newIndex}>
            <span className="font-semibold text-red-400">Let op!</span> De{" "}
            {entry2} in je splitsing klopt nog niet. Kijk nog eens goed!
          </p>,
        ]);
      }
    }
    if (Number(click3) === 10) {
      setRightJump3(true);
    } else {
      setWrongJump3(true);
      setTips((prevTips) => [
        ...prevTips, // Copy the previous tips array
        <p key={newIndex}>
          <span className="font-semibold text-red-400">Let op!</span> Sprong 2
          zou bij 10 moeten beginnen.
        </p>,
      ]);
    }
    if (Number(click4) === sumTotal) {
      setRightJump4(true);
    } else {
      setWrongJump4(true);
      setTips((prevTips) => [
        ...prevTips,
        <p key={newIndex}>
          <span className="font-semibold text-red-400">Let op!</span> Sprong 2
          komt niet uit op het juiste antwoord.
        </p>,
      ]);
    }
    if (sumTotal === Number(finalAnswer)) {
      setFinalRight(true);
      !checked && setCount(count + 1);
      setChecked(true);
    } else {
      setFinalWrong(true);
      count > 0 && setCount(count - 1);
      setTips((prevTips) => [
        ...prevTips,
        <p key={newIndex}>
          <span className="font-semibold text-red-400">Let op!</span> Je
          antwoord klopt niet! <span className="italic">(score -1)</span>
        </p>,
      ]);
    }
    setFeedBack(true);
  }

  useEffect(() => {
    getCalculation();
    handleReset();
  }, [extraEasy, easy, medium, hard, extraHard]);

  return (
    <div className="flex flex-col items-center justify-center relative h-screen w-screen">
      <Nav
        extraEasy={extraEasy}
        onSetExtraEasy={setExtraEasy}
        easy={easy}
        onSetEasy={setEasy}
        medium={medium}
        onSetMedium={setMedium}
        hard={hard}
        onSetHard={setHard}
        extraHard={extraHard}
        onSetExtraHard={setExtraHard}
        onHandleOptions={handleOptions}
        help={help}
        onHandleLevel={handleLevel}
        level={level}
        onShow={setShow}
        add={add}
      />
      {feedBack ? (
        <FeedBack tips={tips} finalRight={finalRight} />
      ) : (
        <ShowStartingPoints
          click1={click1}
          click2={click2}
          click3={click3}
          click4={click4}
        />
      )}
      <ShowCalculation
        leftNumber={leftNumber}
        rightNumber={rightNumber}
        show={show}
        onShow={setShow}
        right1={right1}
        right2={right2}
        wrong1={wrong1}
        wrong2={wrong2}
        entry1={entry1}
        onSetEntry1={setEntry1}
        entry2={entry2}
        onSetEntry2={setEntry2}
        add={add}
        noHelp1={noHelp1}
        noHelp2={noHelp2}
        finalAnswer={finalAnswer}
        onSetFinalAnswer={setFinalAnswer}
        finalRight={finalRight}
        finalWrong={finalWrong}
      />
      {count > 0 && <Score count={count} />}
      <NumberLine1
        extraEasy={extraEasy}
        hard={hard}
        extraHard={extraHard}
        click1={click1}
        click2={click2}
        click3={click3}
        click4={click4}
        onClick1={setClick1}
        onClick2={setClick2}
        onClick3={setClick3}
        onClick4={setClick4}
        start1={start1}
        start2={start2}
        onStart1={setStart1}
        onStart2={setStart2}
        rightJump1={rightJump1}
        rightJump2={rightJump2}
        rightJump3={rightJump3}
        rightJump4={rightJump4}
        wrongJump1={wrongJump1}
        wrongJump2={wrongJump2}
        wrongJump3={wrongJump3}
        wrongJump4={wrongJump4}
      />
      {
        <div className="flex flex-wrap absolute items-center justify-evenly gap-4 xl:mt-[25%] lg:mt-[30%] md:mt-[35%] sm:mt-[40%] min-[320px]:mt-[45%]">
          {(finalAnswer !== "" ||
            click1 !== "" ||
            click2 !== "" ||
            click3 !== "" ||
            click4 !== "") && <ResetButton onReset={handleReset} />}

          <NewCalcButton onCalculate={getCalculation} onReset={handleReset} />
          {finalRight ||
            click1 === "" ||
            click2 === "" ||
            click3 === "" ||
            click4 === "" ||
            finalAnswer === "" || (
              <CheckCalculationButton onCheck={handleCheck} />
            )}
        </div>
      }
      <Footer />
    </div>
  );
}

export default Addition;
