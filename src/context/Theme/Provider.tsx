import { ReactNode, useEffect, useState } from "react";

import ThemeContext, { ThemeContextStateType } from ".";

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeContextStateType>("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      console.log("Setting theme to " + localTheme);
      setTheme(localTheme as "light" | "dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
