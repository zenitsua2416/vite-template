import { ReactNode } from "react";
import NavBar from "../components/Navbar";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      {/* Add a footer if needed */}
    </>
  );
};

export default DefaultLayout;
