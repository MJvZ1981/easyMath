import { useState } from "react";

function SplitHelp({ showHelp }) {
  const [selectedLeft, setSelectedLeft] = useState(Array(10).fill(false));
  const [selectedRight, setSelectedRight] = useState(Array(10).fill(false));
  const [extraHelp, setExtraHelp] = useState(false);

  function handleShowLeft(index) {
    const updatedLeft = Array(10).fill(false);
    for (let i = 0; i <= index; i++) {
      updatedLeft[i] = !updatedLeft[i];
    }
    setSelectedLeft(updatedLeft);
  }

  function handleShowRight(index) {
    const updatedRight = Array(10).fill(false);
    for (let i = 0; i <= index; i++) {
      updatedRight[i] = !updatedRight[i];
    }

    setSelectedRight(updatedRight);
  }

  function handleReset() {
    setSelectedLeft(Array(10).fill(false));
    setSelectedRight(Array(10).fill(false));
  }

  function handleExtaHelp() {
    setExtraHelp((help) => !help);
  }

  const countSelectedLeft = selectedLeft.filter(
    (isSelected) => isSelected
  ).length;
  const countSelectedRight = selectedRight.filter(
    (isSelected) => isSelected
  ).length;

  return (
    <div className="h-[50%] w-[12%] ml-[6%] mb-[1%]">
      {showHelp && (
        <div className="flex flex-col justify-around h-full w-full rounded-md border-[2px] bg-amber-100 ring-offset-[2px] ring-[3px] ring-black border-amber-300 shadow-lg">
          <div className="flex h-full w-full justify-evenly mt-[20px] py-[20px]">
            <div className="flex flex-col-reverse h-full">
              {selectedLeft.map((isSelected, index) => (
                <div
                  key={index}
                  onClick={() => handleShowLeft(index)}
                  className={`flex items-center justify-center font-semibold text-xs rounded-sm ml-[20px] border-[2px] border-amber-300 h-[10%] w-[40px] cursor-pointer ${
                    isSelected
                      ? "bg-emerald-500 border-emerald-800"
                      : "bg-stone-100"
                  }`}
                >
                  {extraHelp && index + 1}
                </div>
              ))}
            </div>
            <div className="w-[20%]"></div>
            <div className="flex flex-col-reverse h-full">
              {selectedRight.map((isSelected, index) => (
                <div
                  key={index}
                  onClick={() => handleShowRight(index)}
                  className={`flex items-center justify-center font-semibold text-xs rounded-sm mr-[20px] border-[2px] border-amber-300 h-[10%] w-[40px] cursor-pointer ${
                    isSelected
                      ? "bg-emerald-500 border-emerald-800"
                      : "bg-stone-100"
                  }`}
                >
                  {extraHelp && index + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-[20px] w-[full] flex flex-col items-center justify-center">
            <div className="flex items-center justify-center w-[80px] h-[40px] text-3xl font-semibold">
              {countSelectedLeft + countSelectedRight}
            </div>
            <div className="flex w-full items-center justify-center gap-[10px]">
              <button
                className="flex rounded-md bg-emerald-400 shadow-lg items-center justify-center font-semibold border-[2px] border-black w-[80px] h-[30px] mt-[20px]"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                className="flex rounded-md bg-emerald-400 shadow-lg items-center justify-center font-semibold border-[2px] border-black w-[30px] h-[30px] mt-[20px]"
                onClick={handleExtaHelp}
              >
                ?
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SplitHelp;
