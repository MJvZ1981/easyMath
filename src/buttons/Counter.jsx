function Counter({ count, onIncrement, onDecrement }) {
  const styles = {
    container:
      "absolute left-[1%] top-[10%] w-[120px] h-[80px] flex items-center flex-col justify-between rounded-md",
    buttons:
      "flex font-bold items-center justify-center h-[40px] w-[40px] border-[3px] shadow-md text-2xl rounded-md border-black bg-amber-100 cursor-pointer",
    counter: "flex items-center justify-center text-2xl font-bold px-[3px]",
  };

  return (
    <div className={styles.container}>
      <div className="flex w-full items-center justify-between ">
        <button onClick={onDecrement} className={styles.buttons}>
          -
        </button>
        <div className="font-bold">{count}</div>
        <button onClick={onIncrement} className={styles.buttons}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
