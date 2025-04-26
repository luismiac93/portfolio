export const Logo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="rubik-cube">
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

      <h1 className="main-title text-2xl sm:text-4xl font-semibold my-8 text-center ml-6 mt-12 md:mt-0">
        luismiac93
      </h1>
    </div>
  );
};
