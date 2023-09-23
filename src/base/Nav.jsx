import { IoSettingsSharp } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import Niveau from "../menu/Niveau";

function Nav({
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
  onHandleOptions,
  help,
  onHandleLevel,
  level,
  onShow,
  onTwenty,
  onHundred,
  add,
}) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showExpl, setShowExpl] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // my locations to render menuitems conditionally
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isDiv = location.pathname === "/splitsen";
  const isAdd = location.pathname === "/plus";
  const isSub = location.pathname === "/min";

  const styles = {
    container:
      "flex flex-row-reverse w-[40%] h-[300%] absolute top-[130%] rounded-md right-[1%]",
    pt: "bg-stone-900 text-white font-semibold w-full flex items-center justify-center rounded-t-md border",
    p: "z-100 cursor-pointer bg-emerald-100 hover:bg-emerald-300 hover:font-semibold w-full flex items-center justify-center border",
    pb: "cursor-pointer bg-emerald-100 hover:rounded-b-md hover:bg-emerald-300 hover:font-semibold w-full flex items-center justify-center border rounded-b-md",
    pl: "flex z-40 flex-col absolute right-[120px] p-2 w-[50%] rounded-md mr-[2%] flex bg-amber-100 border border-2 border-dashed border-amber-400",
    nav: "flex items-center justify-center border-2 border-emerald-400 rounded-md w-[45%] xl:text-xl lg:text-lg md:text-md sm:text-sm bg-amber-100 text-black font-semibold shadow-lg",
  };

  function handleClick() {
    setShowDropDown((show) => !show);
    help && onHandleOptions((help) => !help);
    level && onHandleLevel((level) => !level);
    showHelp && handleHelp((help) => !help);
    showExpl && handleExpl((expl) => !expl);
    showTip && handleTip((tip) => !tip);
  }

  function handleExpl() {
    showHelp && setShowHelp((help) => !help);
    showTip && setShowTip((tip) => !tip);
    setShowExpl((expl) => !expl);
  }

  function handleTip() {
    showExpl && setShowExpl((expl) => !expl);
    setShowTip((tip) => !tip);
  }

  function handleHelp() {
    showExpl && setShowExpl((expl) => !expl);
    setShowHelp((help) => !help);
  }

  function handleHome() {
    onTwenty(false);
    onHundred(false);
  }

  return (
    <div className="absolute top-0 flex h-[7%] items-center justify-between w-full bg-emerald-300 shadow-lg">
      <NavLink
        to="/"
        className="ml-[1%] w-[40%] xl:text-4xl lg:text-4xl md:text-2xl sm:text-xl font-bold text-black cursor-pointer"
        onClick={handleHome}
      >
        Reken maar!
      </NavLink>
      <div className="flex w-[25%] justify-around ml-[50%]">
        {isDiv && (
          <>
            <NavLink to="../min" className={styles.nav}>
              Min -
            </NavLink>
            <NavLink to="../plus" className={styles.nav}>
              Plus +
            </NavLink>
          </>
        )}
        {isAdd && (
          <>
            <NavLink to="../splitsen" className={styles.nav}>
              Splitsen /\
            </NavLink>
            <NavLink to="../min" className={styles.nav}>
              Min -
            </NavLink>
          </>
        )}
        {isSub && (
          <>
            <NavLink to="../splitsen" className={styles.nav}>
              Splits /\
            </NavLink>
            <NavLink to="../plus" className={styles.nav}>
              Plus +
            </NavLink>
          </>
        )}
      </div>
      <IoSettingsSharp
        className="text-6xl mr-[1%] ml-[1%] text-black cursor-pointer"
        onClick={handleClick}
      />
      {showDropDown && (
        <>
          {level ? (
            <Niveau
              add={add}
              extraEasy={extraEasy}
              onSetExtraEasy={onSetExtraEasy}
              easy={easy}
              onSetEasy={onSetEasy}
              medium={medium}
              onSetMedium={onSetMedium}
              hard={hard}
              onSetHard={onSetHard}
              extraHard={extraHard}
              onSetExtraHard={onSetExtraHard}
              onHandleLevel={onHandleLevel}
              onShowDropDown={setShowDropDown}
            />
          ) : (
            <div className={styles.container}>
              <div className="flex-col z-10 w-[120px] absolute top-0 self-end">
                <p className={styles.pt}>Opties</p>
                {isHomePage || isDiv || (
                  <p className={styles.p} onClick={onHandleLevel}>
                    Niveau
                  </p>
                )}
                {isDiv && (
                  <p className={styles.p} onClick={handleHelp}>
                    Help
                  </p>
                )}
                {(isAdd || isSub) && (
                  <p className={styles.p} onClick={handleTip}>
                    Tip
                  </p>
                )}
                {(isAdd || isSub) && (
                  <p
                    className={styles.p}
                    onClick={() => onShow((show) => !show)}
                  >
                    Splitshulp
                  </p>
                )}
                <p className={styles.pb} onClick={handleExpl}>
                  Uitleg
                </p>
              </div>
              {showExpl && (isAdd || isSub) && (
                <div className={styles.pl}>
                  <p>
                    1. Klik op de getallenlijn om (2) sprongen te maken.{" "}
                    <span className="text-red-600 font-bold">Let op! </span>
                    <span className="font-bold">Reken via de tien.</span>
                  </p>
                  <p>2. Type je antwoord in het lege vakje.</p>
                  <p>3. Klik op controleer.</p>
                  <p>
                    <span className="text-red-600 font-bold">Let op:</span>{" "}
                    Beide sprongen én het totaal moeten kloppen.
                  </p>
                  <p>
                    <span className="text-red-600 font-bold">Tip:</span> klik op{" "}
                    <span className="font-bold">'reset'</span> om de som opnieuw
                    te starten of gebruik de splitshulp door op het tweede getal
                    te klikken.
                  </p>
                </div>
              )}
              {showExpl && isHomePage && (
                <div className={styles.pl}>
                  <p>Klik op het onderdeel dat je wilt oefenen.</p>
                  <br />
                  <p>
                    Klik op <span className="font-bold">"Reken maar!"</span> om
                    altijd weer terug te keren naar dit startscherm.
                  </p>
                </div>
              )}
              {showExpl && isDiv && (
                <div className={styles.pl}>
                  <p>1. Het bovenste getal moet gesplitst worden. </p>
                  <p>2. Type je antwoorden in de lege vakjes.</p>
                  <p>
                    3. Klik op <span className="font-bold">'check'</span> om te
                    controleren of <span className="font-bold">'reset'</span> om
                    je antwoorden te wissen.
                  </p>
                  <p>
                    <span className="text-red-600 font-bold">Let op:</span>{" "}
                    Beide getallen moeten samen evenveel zijn als het bovenste
                    getal.
                  </p>
                  <p>
                    <span className="text-red-600 font-bold">Tip:</span> klik op{" "}
                    <span className="font-bold">'reset'</span> om nieuwe sommen
                    te starten.
                  </p>
                </div>
              )}
              {showHelp && (
                <div className={styles.pl}>
                  <p>
                    1. Klik op <span className="font-bold">'help'</span>{" "}
                    (rechtsboven in het scherm) om de splitshulp in te
                    schakelen.
                  </p>
                  <p>
                    2. Klik op de blokjes om de splitsing visueel te maken (een
                    aantal links en een aantal rechts).
                  </p>
                  <p>
                    3. Klik weer op <span className="font-bold">'help'</span> om
                    de hulp te verwijderen.
                  </p>
                  <p>
                    4. Klik op <span className="font-bold">'reset'</span> om te
                    wissen.
                  </p>
                  <p>
                    <span className="text-red-600 font-bold">Let op:</span>{" "}
                    Beide getallen moeten samen evenveel zijn als het bovenste
                    getal.
                  </p>
                  <p>
                    <span className="text-red-600 font-bold">Tip:</span> klik op{" "}
                    <span className="font-bold">'reset'</span> om nieuwe sommen
                    te starten.
                  </p>
                </div>
              )}
              {showTip && (
                <div className={styles.pl}>
                  <p>
                    <span className="text-red-600 font-bold">Tip 1:</span> klik
                    op <span className="font-bold">'reset'</span> om de som
                    opnieuw te starten.
                  </p>
                  <p>
                    <span className="text-red-600 font-bold">Tip 2:</span> klik
                    op <span className="font-bold">'splitshulp'</span> om het
                    tweede getal te splitsen. Denk hierbij aan de vriendjes van
                    10.
                  </p>
                  <p>
                    <span className="text-red-600 font-bold">Tip 3:</span> klik
                    op het tweede getal om de splitsing te tonen (of te laten
                    verdwijnen).
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Nav;
