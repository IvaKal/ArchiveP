import React, { useState } from "react";
import { alphabet, persons, thesaurusData, topics } from "../../constants";
import "./index.css";

function Thesaurus() {
  const objerct = {};
  const [cat, setCat] = useState("");
  const words = (
    cat === "topic"
      ? topics
      : cat === "person"
      ? persons
      : persons.concat(topics)
  ).sort();
  // const [active, setActive] = useState("");
  const [selections, setSelections] = useState([]);

  words.forEach(function (word) {
    const char = word.split("").find(function (char) {
      return alphabet.includes(char);
    });
    if (objerct[char]) objerct[char].push(word);
    else objerct[char] = [word];
  });
  return (
    <div className="thesaurusContainer">
      <div className="alphabet">
        {alphabet.map(function (char, index) {
          return (
            <React.Fragment key={char}>
              <a
                className={objerct[char] ? "goodClass" : "badClass"}
                href={objerct[char] ? "#" + char : undefined}
              >
                {char}
              </a>
              {index < alphabet.length - 1 && "~"}
            </React.Fragment>
          );
        })}
      </div>
      <div className="thesaurusContent">
        <div className="thesaurusWords">
          <div className="cat">
            <a
              className={cat === "topic" ? "catActive" : ""}
              onClick={function () {
                setCat(cat === "topic" ? "" : "topic");
              }}
            >
              თემატური
            </a>
            {" / "}
            <a
              className={cat === "person" ? "catActive" : ""}
              onClick={function () {
                setCat(cat === "person" ? "" : "person");
              }}
            >
              პიროვნებები
            </a>
            {selections.length !== 0 && (
              <img
                className="clear"
                src="/img/clear.svg"
                onClick={function () {
                  setSelections([]);
                }}
              />
            )}
          </div>
          {Object.keys(objerct).map(function (char) {
            return (
              <div key={char} className="thesaurusChar" id={char}>
                <h4>{char}</h4>
                {objerct[char].map(function (word) {
                  return (
                    <a
                      className={
                        selections.includes(word)
                          ? "thesaurusWord active"
                          : "thesaurusWord"
                      }
                      key={word}
                      onClick={function () {
                        if (selections.includes(word)) {
                          setSelections(
                            selections.filter(function (wW) {
                              return word !== wW;
                            })
                          );
                        } else {
                          setSelections(selections.concat(word));
                        }
                      }}
                    >
                      {word}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="thesaurusDocs">
          <h4>{selections.join("; ")}</h4>
          {selections.length !== 0 &&
            thesaurusData.map(function (doc) {
              if (
                selections.every(function (jP) {
                  return doc.words.includes(jP);
                })
              ) {
                return (
                  <a href={doc.url} target="_blank">
                    <img src="/img/doc-white.svg" /> {doc.name}
                  </a>
                );
              }
              return "";
            })}
        </div>
      </div>
    </div>
  );
}

export default Thesaurus;
