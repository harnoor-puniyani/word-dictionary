import React from "react";
import "./Definition.css";

const Definition = ({ word, lang, dictionary, lightTheme }) => {
  return (
    <div className="meanings">
      {dictionary[0] && word && (lang === "en_US" || lang==="en_GB")   && (
        <audio
          src={dictionary[0].phonetics[0] && dictionary[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10, alignItems:"center" }}
          controls="true"
        >
          Your browser does not support audio
        </audio>
      )}
      {word === "" ? (
        <span className="subtitle">"Enter Something in the search"</span>
      ) : (
        dictionary.map((mean) => {
          return mean.meanings.map((ind) => {
            return ind.definitions.map((def) => {
              return (
                <div
                  className="single-definition"
                  style={{ backgroundColor:lightTheme?"#2C061F": "white", color:lightTheme?"#fff" :"#000" }}
                >
                  <b>{def.definition}</b>
                  <hr style={{ backgroundColor: "#000", width: "100%" }} />
                  {def.example && (
                    <span>
                      <b>Examples: </b>
                      {def.example}
                    </span>
                  )}
                  {def.synonyms && (
                    <span>
                      <b> Synonms: </b>
                      {def.synonyms.map((syn) => `${syn}, `)}
                    </span>
                  )}
                </div>
              );
            });
          });
        })
      )}
    </div>
  );
};

export default Definition;
