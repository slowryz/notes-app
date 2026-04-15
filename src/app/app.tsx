import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./providers/router";
import { ThemeProvider } from "./providers/theme";

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};
