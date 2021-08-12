import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, withStyles } from "@material-ui/core";
import Header from "./components/Header/Header";
import Definition from "./components/Definition/Definition";
import Switch from '@material-ui/core/Switch';
import { grey500 } from "material-ui/styles/colors";
import { black } from "material-ui/styles/colors";

function App() {
  const [Dictionary, setDictionary] = useState([]);
  const [word, setword] = useState("");
  const [lang, setlang] = useState("en_US");
  const [lightTheme, setlightTheme] = useState(false)
  const fetchData = async () => {
    try {
      let data = axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
      );
      setDictionary((await data).data)
      console.log((await data).data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  },[word,lang]);

  const ThemeSwitch = withStyles({
    switchBase: {
      color: grey500,
      '&$checked': {
        color: black,
      },
      '&$checked + $track': {
        backgroundColor: grey500,
      },
    },
    checked: {},
    track: {},
  })(Switch);

  
  return (
    <div
      className="App"
      style={{ height: "100vh",backgroundColor:lightTheme?"#FFF" :"#282828" ,color:lightTheme?"#000": "#fff", textAlign: "center", margin:0 }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", }}
      >
        <div className="themeChange" style={{position:"absolute",top:0, right:5}}>
          <span>{lightTheme?"Dark" : "Light"} mode</span>
          <ThemeSwitch checked={lightTheme} onChange={()=>setlightTheme(!lightTheme)}/>
        </div>

        <Header lang={lang} setlang={setlang} word={word} setword={setword}  lightTheme={lightTheme}/>
        {Dictionary && <Definition word={word} lang={lang} dictionary={Dictionary} lightTheme={lightTheme}/>}
      </Container>
    </div>
  );
}

export default App;
