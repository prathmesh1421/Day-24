import { useEffect, useState } from "react";

function useTheme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return {
    darkMode,
    setDarkMode,
  };
}

export default useTheme;
