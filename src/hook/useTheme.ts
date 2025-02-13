import { useCallback, useContext } from "react";

import ThemeContext from "../context/Theme";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "Cannot use ThemeContext outside the ThemeContextProvider!!",
    );
  }

  const { theme, setTheme } = context;

  const setLightTheme = useCallback(() => {
    setTheme("light");
    localStorage.setItem("theme", "light");
  }, [setTheme]);

  const setDarkTheme = useCallback(() => {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }, [setTheme]);

  return {
    theme,
    setLightTheme,
    setDarkTheme,
  };
};

export default useTheme;
