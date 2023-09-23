function FeedBack({ tips, finalRight }) {
  const compliments = [
    "Super!",
    "Subliem!",
    "Knap gedaan!",
    "Topper!",
    "Heel goed!",
    "Prima!",
    "Goed bezig!",
    "Mooi zo!",
    "Goed gedaan!",
    "Knap hoor!",
    "Sterk staaltje!",
    "Wat goed!",
    "Netjes!",
    "Geweldig!",
  ];

  const images = [
    "./ThumbsUp.jpg",
    "./ThumbsUp1.jpg",
    "./ThumbsUp2.jpg",
    "./ThumbsUp3.jpg",
    "./ThumbsUp4.jpg",
    "./ThumbsUp5.jpg",
  ];

  const size = tips.length;

  return (
    <div
      className={
        size === 0
          ? "absolute left-[1%] top-[9%] flex flex-col items-center justify-center ml-[3%] mt-[2%] flex-wrap"
          : "border-2 border-amber-400 border-dotted bg-amber-100 px-[1%] py-[0.5%] rounded-md absolute left-[1%] top-[9%] flex flex-col items-center justify-center"
      }
    >
      <ul
        className={
          size === 0
            ? "ml-[3%] mt-[10%] font-bold flex flex-col items-center justify-center text-2xl"
            : "font-bold "
        }
      >
        {size > 1
          ? "Tips:"
          : size < 1
          ? compliments[Math.floor(Math.random() * compliments.length)]
          : "Tip:"}
        {size === 0 ? (
          <img
            style={{ marginTop: "5%" }}
            src={images[Math.floor(Math.random() * images.length)]}
          />
        ) : (
          // <span>👍</span>
          tips.map((item, index) => (
            <li className="font-normal" key={index}>
              {item}
            </li>
          ))
        )}
        {size > 0 && !finalRight ? (
          <li className="font-normal">
            Klik op <span className="font-bold">reset</span> om de som opnieuw
            te proberen.
          </li>
        ) : (
          finalRight || (
            <li className="font-normal">
              <span className="font-bold">Score + 1:</span> Goed antwoord!{" "}
              <span>👍</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default FeedBack;
