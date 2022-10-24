import Router from "./routes";
import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { ligthTheme } from "./styles/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={ligthTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
