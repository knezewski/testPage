import { Start } from "./pages";
import { Switch, Route } from "react-router-dom";

//global style
import { createGlobalStyle } from "styled-components";
import "./fonts.css";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-color: #044154;
  font-family: Apercu Pro, Tahoma, Arial;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          {" "}
          <Start />
        </Route>
      </Switch>
    </>
  );
};

export default App;
