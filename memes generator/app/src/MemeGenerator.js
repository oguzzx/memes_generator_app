import React, { useState, useEffect } from "react";
import "./memeGenerator.css";

function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("");
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemeImgs(data.data.memes);
      });
  });

  function handleTopChange(e) {
    setTopText(e.target.value);
  }
  function handleBottomChange(e) {
    setBottomText(e.target.value);
  }

  function randomPhoto() {
    let randomNum = Math.floor(Math.random() * allMemeImgs.length);
    setRandomImg(allMemeImgs[randomNum].url);
  }

  return (
    <div className="meme-form">
      <div className="inputlar">
        <input
          type="text"
          className="input"
          name="topText"
          placeholder="enter top text"
          value={topText}
          onChange={(e) => handleTopChange(e)}
        />
        <input
          type="text"
          className="input"
          name="bottomText"
          placeholder="enter bottom text"
          value={bottomText}
          onChange={(e) => handleBottomChange(e)}
        />
        <button onClick={() => randomPhoto()}>
          <div>
            <span>
              <p>
                Generate Meme <p>:)</p>
              </p>
            </span>
          </div>
          <div>
            <span>
              <p>
                Thanks <p>:D</p>
              </p>
            </span>
          </div>
        </button>
        <div className="image">
          <img src={randomImg} />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>
      </div>
    </div>
  );
}

export default MemeGenerator;
