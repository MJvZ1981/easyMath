function Score({ count }) {
  return (
    <div className="flex flex-center z-20 absolute bottom-[6%] right-[1%] font-semibold text-xl">
      Score:{" "}
      {count < 10 ? (
        <p>
          <span className="invisible">0</span>
          {count}
          <span className="invisible">0</span>
        </p>
      ) : (
        <p>
          <span className="invisible">!</span>
          {count}
        </p>
      )}
    </div>
  );
}

export default Score;
