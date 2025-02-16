import { ReactNode, useEffect, useState } from "react";

import ThemeContext, { ThemeContextStateType } from ".";
import config from "../../config";

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeContextStateType>("light");

  const { defaultTheme } = config;

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      console.log("Setting theme to " + localTheme);
      setTheme(localTheme as "light" | "dark");
    } else {
      localStorage.setItem("theme", defaultTheme);
      setTheme(defaultTheme as "light" | "dark");
    }
  }, [defaultTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
