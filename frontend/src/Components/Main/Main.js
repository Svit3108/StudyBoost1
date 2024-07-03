import React from "react";
import { useTheme } from "../../context/ThemeProvider";

const Main = () => {
  const { theme } = useTheme();

  return (
    <main
      style={{ color: theme === "light" ? "black" : "white" }}
      className={`p-4 flex-grow ${theme}`}
    >
      {/* Add your content here */}
    </main>
  );
};

export default Main;