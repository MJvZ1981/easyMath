function ResetButton({ onReset }) {
  return (
    <div>
      <button
        onClick={onReset}
        style={{ maxWidth: "100%", fontSize: "16px" }}
        className="border border-black shadow-lg bg-amber-200 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded"
      >
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
