function ShowStartingPoints({ click1, click2, click3, click4 }) {
  const styles = {
    container:
      "flex flex-col min-w-[10.5%] absolute border border-dashed border-amber-400 border-2 rounded-md",
    clicks: "bg-amber-100 px-4 py-2 flex justify-between",
  };
  return (
    <div style={{ left: "1%", top: "9%" }} className={styles.container}>
      <p className={styles.clicks}>
        Start sprong 1:
        {click1 !== <span> </span> && (
          <span className="font-bold">{" " + click1}</span>
        )}
      </p>
      <p className={styles.clicks}>
        Eind sprong 1:{" "}
        {click2 !== <span> </span> && (
          <span className="font-bold">{" " + click2}</span>
        )}
      </p>
      <p className={styles.clicks}>
        Start sprong 2:{" "}
        {click3 !== <span> </span> && (
          <span className="font-bold">{" " + click3}</span>
        )}
      </p>
      <p className={styles.clicks}>
        Eind sprong 2:{" "}
        {click4 !== <span> </span> && (
          <span className="font-bold">{" " + click4}</span>
        )}
      </p>
    </div>
  );
}

export default ShowStartingPoints;
