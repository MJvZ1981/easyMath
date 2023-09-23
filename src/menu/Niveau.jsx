function Niveau({
  add,
  extraEasy,
  onSetExtraEasy,
  easy,
  onSetEasy,
  medium,
  onSetMedium,
  hard,
  onSetHard,
  extraHard,
  onSetExtraHard,
  onHandleLevel,
  onShowDropDown,
}) {
  const styles = {
    base: "flex justify-center bg-emerald-100 p-1 w-40 h-8 border hover:bg-emerald-300 cursor-pointer",
    bold: "font-bold",
    niveau:
      "flex justify-center items-center w-40 h-8 rounded-t-md border bg-stone-800 text-white font-bold",
  };

  const levels = add ? 6 : 5;
  const modes = Array.from({ length: levels }, (_, index) => index);

  // Create an array of styles, where each style corresponds to a mode
  const modeStyles = add
    ? [
        styles.niveau,
        styles.base + " " + (extraEasy ? styles.bold : ""),
        styles.base + " " + (easy ? styles.bold : ""),
        styles.base + " " + (medium ? styles.bold : ""),
        styles.base + " " + (hard ? styles.bold : ""),
        styles.base + " rounded-b-md " + (extraHard ? styles.bold : ""),
      ]
    : [
        styles.niveau,
        styles.base + " " + (extraEasy ? styles.bold : ""),
        styles.base + " " + (easy ? styles.bold : ""),
        styles.base + " " + (hard ? styles.bold : ""),
        styles.base + " rounded-b-md " + (extraHard ? styles.bold : ""),
      ];

  const modeName = add
    ? ["Simpel", "Makkelijk", "Gemiddeld", "Lastig", "Moeilijk"]
    : ["Makkelijk", "Gemiddeld", "Lastig", "Moeilijk"];

  function handleClick(mode) {
    // Reset all mode states
    onSetExtraEasy(false);
    onSetEasy(false);
    onSetMedium(false);
    onSetHard(false);
    onSetExtraHard(false);
    onHandleLevel(false);
    onShowDropDown(false);

    // Set the clicked mode to true
    if (mode === 1) {
      onSetExtraEasy(true);
    } else if (mode === 2) {
      onSetEasy(true);
    } else if (mode === 3) {
      onSetMedium(true);
    } else if (mode === 4) {
      onSetHard(true);
    } else if (mode === 5) {
      onSetExtraHard(true);
    }

    onreset();
  }

  return (
    <div className="absolute z-10 top-[125%] right-[1%]">
      <div className="flex items-center flex-col w-full">
        {modes.map((mode, index) => (
          <h1
            key={mode}
            className={modeStyles[index]}
            onClick={() => handleClick(mode)}
          >
            {index === 0 ? "Niveau" : modeName[index - 1]}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Niveau;
