export const Cube = () => {
  return (
    <div className="rubik-cube mr-5">
      <div className="core"></div>
      <div className="face front">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="sticker sticker-front"></div>
        ))}
      </div>
      <div className="face back">
        {[...Array(9)].map((_, i) => (
          <div key={i} className={`sticker sticker-back`}></div>
        ))}
      </div>
      <div className="face left">
        {[...Array(9)].map((_, i) => (
          <div key={i} className={`sticker sticker-left`}></div>
        ))}
      </div>
      <div className="face right">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`sticker sticker-right${
              [1, 4, 7, 8].includes(i) ? " l-green" : ""
            }`}
          ></div>
        ))}
      </div>
      <div className="face top">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="sticker sticker-top"></div>
        ))}
      </div>
      <div className="face bottom">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="sticker sticker-bottom"></div>
        ))}
      </div>
    </div>
  );
};
