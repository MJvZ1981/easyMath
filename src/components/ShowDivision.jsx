function ShowDivision({
  right1,
  right2,
  wrong1,
  wrong2,
  entry1,
  entry2,
  noHelp1,
  noHelp2,
  onSetEntry1,
  onSetEntry2,
  onHandleSubmit,
  add,
}) {
  const styles = {
    container:
      "flex flex-col xl:mt-[20%] xl:mr-[13%] lg:mt-[25%] lg:mr-[14%] md:mt-[25%] md:mr-[15%] sm:mt-[30%] sm:mr-[15%] min-[320px]:mt-[30%] min-[320px]:mr-[15%] absolute items-center justify-evenly w-[40%]",
    dottedLine:
      "absolute xl:w-8 xl:h-8 lg:w-7 lg:h-7 min-[320px]:w-6 min-[320px]:h-6 border-r-[3px] border-t-[3px] border-dotted border-amber-400 transform -rotate-45 mt-2",
    input:
      "border-2 bg-amber-100 border-dotted border-amber-400 rounded flex items-center justify-center w-8 h-8 text-center",
  };

  return (
    <div className={add ? styles.container : styles.container + " right-[21%]"}>
      <div className={styles.dottedLine}></div>
      <form
        className="flex items-center justify-evenly w-full absolute px-10 mt-14"
        onSubmit={onHandleSubmit}
      >
        <input
          type="text"
          value={entry1}
          onChange={(e) => onSetEntry1(e.target.value)}
          className={
            right1
              ? styles.input + " bg-emerald-400"
              : wrong1
              ? styles.input + " bg-red-400"
              : noHelp1 && noHelp2
              ? styles.input
              : styles.input + " bg-red-400"
          }
        />
        <input
          type="text"
          value={entry2}
          onChange={(e) => onSetEntry2(e.target.value)}
          className={
            right2
              ? styles.input + " bg-emerald-400"
              : wrong2
              ? styles.input + " bg-red-400"
              : noHelp1 && noHelp2
              ? styles.input
              : styles.input + " bg-red-400"
          }
        />
      </form>
    </div>
  );
}

export default ShowDivision;
