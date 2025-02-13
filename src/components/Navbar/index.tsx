import { Switch } from "@heroui/switch";

import useTheme from "../../hook/useTheme";

const NavBar = () => {
  const { theme, setLightTheme, setDarkTheme } = useTheme();
  console.log(theme);

  return (
    <header className="absolute w-full border dark:border-neutral-800 shadow-md backdrop-blur-md">
      <nav className="flex justify-between bg-transparent py-4 lg:mx-auto lg:w-[1000px]">
        <a
          href="/"
          className="text-lg font-semibold hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-500"
        >
          Home
        </a>
        <Switch
          defaultSelected={theme === "dark"}
          isSelected={theme === "dark"}
          onChange={theme === "dark" ? setLightTheme : setDarkTheme}
        />
      </nav>
    </header>
  );
};

export default NavBar;
