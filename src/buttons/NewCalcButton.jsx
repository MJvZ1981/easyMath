function NewCalcButton({ onCalculate, onReset }) {
  function handleNewCalculation() {
    onCalculate();
    onReset();
  }

  return (
    <div>
      <button
        onClick={handleNewCalculation}
        style={{ maxWidth: "100%", fontSize: "16px" }}
        className="border-black border bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded"
      >
        Nieuwe som
      </button>
    </div>
  );
}

export default NewCalcButton;
