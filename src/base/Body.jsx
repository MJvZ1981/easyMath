// const easy = Math.floor(Math.random() * 5);
// const medium = Math.floor(Math.random() * 10);
// const hard = Math.floor(Math.random() * 50);
import { NavLink } from "react-router-dom";

function Body({ twenty, hundred, onTwenty, onHundred }) {
  const styles = {
    button:
      "flex flex-col text-4xl p-2 h-full justify-center items-center mb-4 bg-yellow-100 hover:bg-yellow-200 rounded-md border border-gray-500 shadow-md",
    base: "flex items-center justify-center h-[20%] font-semibold shadow-md py-1 px-4 border-gray-500 border hover:bg-emerald-300 rounded border-solid bg-emerald-200",
    link: "w-[30%] h-full rounded-md cursor-pointer p-[2%]",
  };

  return (
    <div className="flex flex-col justify-evenly items-center h-screen bg-stone-200">
      {!twenty && !hundred && (
        <div className="flex justify-around w-[60%] h-[50%]">
          <div
            className="flex-col w-[40%] h-[100%] border-[3px] border-black ring-offset-[3px] ring-black ring-[6px] hover:ring-offset-emerald-600  cursor-pointer rounded-md bg-yellow-200 p-[2%]"
            onClick={() => onTwenty(true)}
          >
            <h1 className="flex items-center justify-center font-semibold text-6xl ">
              tot en met
            </h1>
            <div className="flex items-center justify-center text-[200px] font-semibold">
              20
            </div>
          </div>
          <div
            className="flex-col w-[40%] h-[100%] border-[3px] border-black ring-offset-[3px] ring-black ring-[6px] hover:ring-offset-emerald-600 cursor-pointer rounded-md bg-yellow-200 p-[2%]"
            onClick={() => onHundred(true)}
          >
            <h1 className="flex items-center justify-center font-semibold text-6xl">
              tot en met
            </h1>
            <div className="flex items-center justify-center text-[200px] font-semibold">
              100
            </div>
          </div>
        </div>
      )}
      {twenty && (
        <div className="pb-20 flex gap-4 justify-center items-center w-[75%] h-[50%]">
          <NavLink to="/splitsen" className={styles.link}>
            <div
              className={
                styles.button + " flex-col items-center justify-around"
              }
            >
              <div>5</div>
              <div className="border-black border-l-2 border-t-2 mt-[12%] h-[30%] w-[25%] rotate-45 "></div>
              <div className="flex text-3xl">
                4<span className="invisible">--------</span> 1
              </div>
            </div>
            <h1 className={styles.base}>Splitsen</h1>
          </NavLink>
          <NavLink to="/plus" className={styles.link}>
            <div className={styles.button}>
              <div className="pr-1">8 + 3</div>
            </div>
            <h1 className={styles.base}>Plus</h1>
          </NavLink>
          <NavLink to="/min" className={styles.link}>
            <div className={styles.button}>
              <div className="pr-1">11 - 5</div>
            </div>
            <h1 className={styles.base}>Min</h1>
          </NavLink>
        </div>
      )}
      {hundred && (
        <div className="pb-20 flex gap-4 justify-center items-center h-[40%] width-[50%]">
          <NavLink to="/splitsen" className={styles.link}>
            <div
              className={
                styles.button + " flex-col items-center justify-around"
              }
            >
              <div>25</div>
              <div className="border-black border-l-2 border-t-2 mt-[12%] h-[25%] w-[25%] rotate-45 "></div>
              <div className="flex text-3xl ">
                14<span className="invisible">---</span> 11
              </div>
            </div>
            <h1 className={styles.base}>Getallen splitsen</h1>
          </NavLink>
          <NavLink to="/plus" className={styles.link}>
            <div className={styles.button}>
              <div className="pr-1">38 + 13</div>
            </div>
            <h1 className={styles.base}>Plussommen</h1>
          </NavLink>
          <NavLink to="/min" className={styles.link}>
            <div className={styles.button}>
              <div className="pr-1">41 - 27</div>
            </div>
            <h1 className={styles.base}>Minsommen</h1>
          </NavLink>
          <NavLink to="/keer" className={styles.link}>
            <div className={styles.button}>
              <div className="pr-1">
                7{" "}
                <span className="rotate-45 inline-block text-4xl ml-[4px]">
                  +
                </span>{" "}
                8
              </div>
            </div>
            <h1 className={styles.base}>Keersommen</h1>
          </NavLink>
          <NavLink to="/delen" className={styles.link}>
            <div className={styles.button}>
              <div className="pr-1">
                20 <span className="inline-block text-4xl">:</span> 4
              </div>
            </div>
            <h1 className={styles.base}>Deelsommen</h1>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Body;
