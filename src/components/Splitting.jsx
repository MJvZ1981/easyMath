import { useState } from "react";

import Split from "./Split";
import Score from "../components/Score";
import Counter from "../buttons/Counter";
import SplitHelp from "./SplitHelp";
import SplitHelpButton from "../buttons/SplitHelpButton";
import FeedBack from "./FeedBack";
// import FeedBack from "./FeedBack";

function Splitting() {
  const [count, setCount] = useState(1);
  const [showHelp, setShowHelp] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(false);

  const splice = true;

  function handleShowHelp() {
    setShowHelp((show) => !show);
  }

  function handleIncrement() {
    if (count < 4) {
      setCount(count + 1);
    }
  }

  function handleDecrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const tips = [];
  const finalRight = true;

  return (
    <div className="w-screen h-screen gap-20 flex items-center bg-white justify-center">
      {feedback ? (
        <FeedBack tips={tips} finalRight={finalRight} />
      ) : (
        <Counter
          count={count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      )}
      {Array.from({ length: count }).map((_, index) => (
        <Split
          key={index}
          onHandleScore={setScore}
          index={index}
          onFeedback={setFeedback}
        />
      ))}
      {showHelp && <SplitHelp showHelp={showHelp} />}
      <SplitHelpButton onHandleHelp={handleShowHelp} />
      {score > 0 && <Score count={score} />}
    </div>
  );
}

export default Splitting;
