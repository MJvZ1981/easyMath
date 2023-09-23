function SplitHelpButton({ onHandleHelp }) {
  return (
    <button
      onClick={onHandleHelp}
      className="absolute shadow-lg right-[1%] top-[10%] z-0 border-[3px] border-black rounded-md flex items-center justify-center text-lg font-bold bg-amber-100 cursor-pointer w-[120px] h-[40px]"
    >
      Help
    </button>
  );
}

export default SplitHelpButton;
