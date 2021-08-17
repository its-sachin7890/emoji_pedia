import React, { useState } from "react";
import emojiImage from "./emojis.jpg";
import "./styles.css";

// Database
const emojiDictionary = {
  "😊": "Smiling",
  "😔": "Sad",
  "😉": "Winking",
  "💖": "Heart",
  "😠": "Angry",
  "😫": "Tired"
};

// console.log(Object.keys(emojiDictionary));

let emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  // To Handle input from user
  function emojiInputHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    // console.log(meaning);
    setMeaning(meaning);
  }

  let emojiClickHandler = (emoji) => {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Emoji Interpreter!!!</h1>
      <h2>Enter the emojis here or click on the below emojis</h2>
      <input
        type="text"
        style={{
          width: "70%",
          padding: "0.6rem",
          height: "4vh",
          border: "2px solid black"
        }}
        onChange={emojiInputHandler}
      />
      <h2> Emoji's we know </h2>
      <h2> {meaning} </h2>
      <h2>
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              key={emoji}
              style={{
                fontSize: "3rem",
                padding: "0.5rem",
                margin: "10px",
                cursor: "pointer"
              }}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}{" "}
            </span>
          );
        })}
      </h2>

      <img
        src={emojiImage}
        alt="Emoji"
        style={{ width: "350px", height: "350px" }}
      />
    </div>
  );
}
