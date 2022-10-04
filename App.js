import "./App.css";
import "./fonts/Starjedi.ttf";
import yoda from "./yoda.png";
import React, { useState } from "react";

const App = () => {
  const [inputVal, setInputVal] = useState("");

  const [translatedText, setTranslatedText] = useState("");

  const translate = async () => {
    // const response = await fetch(api.base, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     text: inputVal,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    const data = { text: inputVal };

    fetch(
      `https://api.funtranslations.com/translate/yoda.json?text=${inputVal}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTranslatedText(data.contents.translated);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const changeInput = (event) => {
    const val = event.target.value;
    setInputVal(val).then(() => {
      setInputVal("");
    });
  };

  console.log(inputVal);

  return (
    <>
      <h1 className="title">Yoda Translator</h1>
      <div className="format">
        <img className="yoda" src={yoda} width="400px" />
        <p className="directions">
          {" "}
          Write some text <br /> below for a <br /> Yodish translation
        </p>
      </div>

      <div className="input-format">
        <input
          placeholder="type here for yodish translation..."
          type="text"
          onChange={changeInput}
        ></input>
        <button onClick={translate}>Translate</button>
      </div>
      <div>
        <p className="translated">{translatedText}</p>
      </div>
    </>
  );
};

export default App;
