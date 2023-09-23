import ShowDivision from "./ShowDivision";

function ShowCalculation({
  leftNumber,
  rightNumber,
  add,
  show,
  onShow,
  entry1,
  entry2,
  right1,
  right2,
  onSetEntry1,
  onSetEntry2,
  noHelp1,
  noHelp2,
  wrong1,
  wrong2,
  finalAnswer,
  onSetFinalAnswer,
  finalRight,
  finalWrong,
}) {
  const styles = {
    number:
      "xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2 flex w-[3%] h-[3%]",
    operator:
      "xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2 flex w-[3%] h-[3%] mr-[4px]",
    equals:
      "xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2 flex w-[3%] h-[3%] mr-[4px]",
    input: `border-2 bg-amber-100 border-dotted p-2 border-amber-400 rounded xl:pl-[1%] 
      lg:pl-[1%] md:pl-[2%] sm:pl-[3%] xl:w-[30%] lg:w-[32%] md:w-[32%] sm:w-[34%] 
      min-[320px]:w-[30%] h-[60%] text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2`,
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    onSetFinalAnswer(e.target.value);
  }

  let operator;
  add ? (operator = "+") : (operator = "-");

  return (
    <div
      className="flex flex-col w-[40%] h-[30%] px-[5%] items-center justify-center absolute"
      style={{ top: "12%" }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex absolute items-center w-[60%] justify-around"
      >
        <div className={styles.number}>{leftNumber}</div>
        <div
          className={
            add
              ? styles.operator
              : styles.operator +
                " xl:ml-[48px] lg:ml-[40px] sm:ml-[30px] min-[320px]:ml-[16px]"
          }
        >
          {" "}
          {operator}{" "}
        </div>
        <div
          onClick={() => onShow((show) => !show)}
          className={
            rightNumber > 9
              ? styles.number + " mr-[8%] cursor-pointer"
              : styles.number + " cursor-pointer"
          }
        >
          {rightNumber}
        </div>
        <div
          className={
            add
              ? styles.equals
              : styles.equals +
                " xl:px-[14px] lg:px-[14px] md:px-[14px] sm:px-[14px] min-[320px]:px-[4px]"
          }
        >
          =
        </div>
        <input
          onChange={handleChange}
          value={finalAnswer}
          className={
            finalWrong
              ? styles.input + " bg-red-300"
              : finalRight
              ? styles.input + " bg-emerald-300"
              : styles.input
          }
          type="text"
        />
      </form>
      {show && (
        <ShowDivision
          onSetEntry1={onSetEntry1}
          onSetEntry2={onSetEntry2}
          add={add}
          entry1={entry1}
          entry2={entry2}
          onHandleSubmit={handleSubmit}
          right1={right1}
          right2={right2}
          wrong1={wrong1}
          wrong2={wrong2}
          noHelp1={noHelp1}
          noHelp2={noHelp2}
        ></ShowDivision>
      )}
    </div>
  );
}

export default ShowCalculation;
