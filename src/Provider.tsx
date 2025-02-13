import { ReactNode } from "react";
import { HeroUIProvider } from "@heroui/system";
import ThemeContextProvider from "./context/Theme/Provider";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContextProvider>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
