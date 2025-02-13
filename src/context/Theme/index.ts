import { createContext, Dispatch, SetStateAction } from "react";

type ThemeContextStateType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeContextStateType;
  setTheme: Dispatch<SetStateAction<ThemeContextStateType>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
export type { ThemeContextType, ThemeContextStateType };
