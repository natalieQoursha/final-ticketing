import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext;

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
export function ThemeProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(true);

  return (
    <ThemeContext.Provider value={loggedUser}>
      <ThemeUpdateContext.Provider value={setLoggedUser}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
