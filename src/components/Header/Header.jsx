import {
  createTheme,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import { MenuItem } from "material-ui";
import React from "react";
import "./Header.css";
import Languages from "../../data/languages";
import { MuiThemeProvider } from "material-ui/styles";
import { getMuiTheme } from "material-ui/styles";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";

const Header = ({ lang, setlang , word , setword , lightTheme}) => {
  const darkTheme = createTheme({
    palette: {
      type:lightTheme?"light": "dark",
      primary: {
        main: lightTheme?"#000":"#fff",
      }
    },
  });
  const theme=lightTheme?getMuiTheme(lightBaseTheme):getMuiTheme(darkBaseTheme)
  return (
    <div className="Header">
      <span className="title" >{word?word:"Word Dict"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField  label="Search" value={word} onChange={e=>setword(e.target.value)} className="search"/>
          <MuiThemeProvider muiTheme={theme}>
            <TextField
            className="select"
              select
              label="Language"
              value={lang}
              onChange={(e) => {
                setlang(e.target.value);
                setword("")
              }}
              >
              {Languages.map((option) => (
                <MenuItem
                  key={option.label}
                  value={option.label}
                >
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </MuiThemeProvider>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
