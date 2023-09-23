function NewSplitButton({ onHandleRedo }) {
  return (
    <div
      onClick={onHandleRedo}
      className="flex items-center justify-center cursor-pointer bg-emerald-300 border-2 absolute left-[1%] bottom-[6%] border-black rounded-md w-[150px]"
    >
      Nieuwe splitsing
    </div>
  );
}

export default NewSplitButton;
