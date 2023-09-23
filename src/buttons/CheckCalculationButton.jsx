function CheckCalculationButton({ onCheck }) {
  return (
    <div>
      <button
        onClick={onCheck}
        style={{ maxWidth: "100%", fontSize: "16px" }}
        className="border-black border bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-1/10 h-1/10"
      >
        Controleer
      </button>
    </div>
  );
}

export default CheckCalculationButton;
