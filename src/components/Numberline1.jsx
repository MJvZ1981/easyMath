// import { FaAngleRight } from "react-icons/fa6";

function NumberLine1({
  extraEasy,
  hard,
  extraHard,
  click1,
  click2,
  click3,
  click4,
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  start1,
  start2,
  onStart1,
  onStart2,
  rightJump1,
  rightJump2,
  rightJump3,
  rightJump4,
  wrongJump1,
  wrongJump2,
  wrongJump3,
  wrongJump4,
}) {
  const stepSize1 = click1 !== "" && click2 !== "" ? click2 - click1 : null;
  const stepSize2 = click3 !== "" && click4 !== "" ? click4 - click3 : null;

  const styles = {
    baseline: "bg-black absolute z-10",
    click:
      "flex flex-col h-16 w-5 items-center justify-center cursor-pointer mt-[1.2%] z-20",
    tens: "h-[20px] sm:h-[16px] w-1 bg-black flex justify-center mt-4 sm:mt-2 min-[320px]:mt-[14px] min-[320px]:h-[12px]",
    fives:
      "h-[14px] sm:h-[12px] w-1 bg-black flex justify-center mt-6 sm:mt-3 min-[320px]:mt-[17px] min-[320px]:h-[8px]",
    ones: "h-[8px] sm:h-[8px] w-1 bg-black flex justify-center mt-8 sm:mt-4 min-[320px]:mt-[22px] min-[320px]:h-[4px]",
    numbers: "flex items-center justify-center text-black",
  };

  const divCount = 21; // Number of div elements (with onClick function to define the length of the line with numbers)
  const pointers = Array.from({ length: divCount }, (_, index) => index);

  function calculateMargin(startIndex, stepSize, data) {
    const marginIncrementPercentage = 4.76; // Adjust this value as needed
    // Find the data entry for the current stepSize
    const dataEntry = data.find((data) => data.stepSize === stepSize);

    if (dataEntry) {
      const baseMarginPercentage = dataEntry.baseMarginPercentage;

      return `calc(${
        startIndex * marginIncrementPercentage
      }% + ${baseMarginPercentage}%)`;
    }
    return "Oeps! Er gaat iets niet helemaal goed!"; // Handle error condition if data entry is not found
  }

  function handleSteps(id) {
    if (click1 === "") {
      onClick1(id);
      onStart1(id);
    } else if (click2 === "" && id > click1) {
      onClick2(id);
    } else if (click2 !== "" && click3 === "" && id >= click2) {
      onClick3(id);
      onStart2(id);
    } else if (click3 !== "" && click4 === "" && id > click3) {
      onClick4(id);
    }
  }

  function interpolate(step, data) {
    for (let i = 0; i < data.length; i++) {
      if (step === data[i].stepSize) {
        return {
          marginValue: data[i].marginValue,
          arrowWidth: data[i].arrowWidth,
        };
      }
    }
    return null; // Step size not found in the data
  }

  const data1 = [
    {
      stepSize: 1,
      marginValue: "calc(50% - 45.5%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -2,
    },
    {
      stepSize: 2,
      marginValue: "calc(50% - 40.7%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -6.8,
    },
    {
      stepSize: 3,
      marginValue: "calc(50% - 36%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -11.5,
    },
    {
      stepSize: 4,
      marginValue: "calc(50% - 31.5%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -16,
    },
    {
      stepSize: 5,
      marginValue: "calc(50% - 26.5%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -21,
    },
    {
      stepSize: 6,
      marginValue: "calc(50% - 22%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -25.5,
    },
    {
      stepSize: 7,
      marginValue: "calc(50% - 17%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -30.5,
    },
    {
      stepSize: 8,
      marginValue: "calc(50% - 12.5%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -35,
    },
    {
      stepSize: 9,
      marginValue: "calc(50% - 7.5%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -40,
    },
    {
      stepSize: 10,
      marginValue: "calc(50% - 2.8%)",
      arrowWidth: "4.76%",
      baseMarginPercentage: -44.8,
    },
    {
      stepSize: 11,
      marginValue: "calc(50% - -2%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -49.5,
    },
    {
      stepSize: 12,
      marginValue: "calc(50% - -6.6%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -54.1,
    },
    {
      stepSize: 13,
      marginValue: "calc(50% - -11.5%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -59,
    },
    {
      stepSize: 14,
      marginValue: "calc(50% - -16.2%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -63.7,
    },
    {
      stepSize: 15,
      marginValue: "calc(50% - -21.2%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -68.7,
    },
    {
      stepSize: 16,
      marginValue: "calc(50% - -25.7%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -73.2,
    },
    {
      stepSize: 17,
      marginValue: "calc(50% - -30.5%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -77.9,
    },
    {
      stepSize: 18,
      marginValue: "calc(50% - -35.3%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -82.7,
    },
    {
      stepSize: 19,
      marginValue: "calc(50% - -39.8%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -87.2,
    },
    {
      stepSize: 20,
      marginValue: "calc(50% - -44.7%)",
      arrowWidth: "4.75%",
      baseMarginPercentage: -92.2,
    },
  ];

  const interpolatedData1 = interpolate(stepSize1, data1);
  const interpolatedMargin1 = interpolatedData1?.marginValue || "50%";
  const interpolatedArrowWidth1 = interpolatedData1?.arrowWidth || "4.75%";

  const interpolatedData2 = interpolate(stepSize2, data1);
  const interpolatedMargin2 = interpolatedData2?.marginValue || "50%";
  const interpolatedArrowWidth2 = interpolatedData2?.arrowWidth || "40px";

  return (
    <div className="flex items-center justify-around absolute w-3/4 h-1/4 xl:mt-[10%] lg:mt-[11%] md:mt-[12%] sm:mt-[13%] min-[320px]:mt-[14%]">
      {pointers.map((index) => (
        <div
          key={index}
          onClick={() => handleSteps(index)}
          className={styles.click}
        >
          <div
            className={
              index === 0 || index % 10 === 0
                ? styles.tens
                : index % 5 === 0
                ? styles.fives
                : styles.ones
            }
          ></div>
          {index === Number(start1) && click1 !== "" && click2 !== "" && (
            <div className="flex flex-col items-center justify-center ml-[3px]">
              <div
                style={{
                  marginLeft: interpolatedMargin1,
                  top: 31.2,
                }}
                className={`flex flex-col h-10 items-center absolute font-bold ${
                  Number(start1) !== index ? "invisible" : ""
                }`}
              >
                {extraEasy && <div>{`+ ${stepSize1}`}</div>}
              </div>
              <div
                id={index}
                className={
                  wrongJump1 || wrongJump2
                    ? `bg-transparent absolute rounded-s-[80%] rounded-e-[80%] border-t-4 border-black h-20 ${
                        Number(start1) !== index ? "invisible" : ""
                      }` + " border-red-500"
                    : rightJump1 || rightJump2
                    ? `bg-transparent absolute rounded-s-[80%] rounded-e-[80%] border-t-4 border-black h-20 ${
                        Number(start1) !== index ? "invisible" : ""
                      }` + " border-green-500"
                    : `bg-transparent absolute rounded-s-[80%] rounded-e-[80%] border-t-4 border-black h-20 ${
                        Number(start1) !== index ? "invisible" : ""
                      }`
                }
                style={{
                  left: interpolatedMargin1,
                  overflow: "hidden",
                  width: `calc(${interpolatedArrowWidth1} * ${stepSize1})`,
                  marginLeft: calculateMargin(Number(click1), stepSize1, data1),
                }}
              ></div>
            </div>
          )}
          {index === Number(start2) && click3 !== "" && click4 !== "" && (
            <div className="flex flex-col items-center justify-center ml-[3px]">
              <div
                style={{
                  marginLeft: interpolatedMargin2,
                  top: 31.2,
                }}
                className={`flex flex-col h-10 items-center absolute font-bold ${
                  Number(start2) !== index ? "invisible" : ""
                }`}
              >
                {extraEasy && <div>{`+ ${stepSize2}`}</div>}
              </div>
              <div
                id={index}
                className={
                  wrongJump3 || wrongJump4
                    ? `bg-transparent absolute rounded-s-[80%] rounded-e-[80%] border-t-4 border-black h-20 ${
                        Number(start2) !== index ? "invisible" : ""
                      }` + " border-red-500"
                    : rightJump3 || rightJump4
                    ? `bg-transparent absolute rounded-s-[80%] rounded-e-[80%] border-t-4 border-black h-20 ${
                        Number(start2) !== index ? "invisible" : ""
                      }` + " border-green-500"
                    : `bg-transparent absolute rounded-s-[80%] rounded-e-[80%] border-t-4 border-black h-20 ${
                        Number(start2) !== index ? "invisible" : ""
                      }`
                }
                style={{
                  left: interpolatedMargin2,
                  overflow: "hidden",
                  width: `calc(${interpolatedArrowWidth2} * ${stepSize2})`,
                  marginLeft: calculateMargin(Number(click3), stepSize2, data1),
                }}
              ></div>
            </div>
          )}
          <p
            className={
              (extraHard && styles.numbers + " text-white") ||
              (hard && [0, 10, 20].indexOf(index) === -1
                ? styles.numbers + " text-white"
                : styles.numbers) ||
              styles.numbers
            }
          >
            {index}
          </p>
        </div>
      ))}
      <div
        className={styles.baseline}
        style={{ width: "100%", height: "2%", marginTop: "1.2%" }}
      ></div>
    </div>
  );
}

export default NumberLine1;
