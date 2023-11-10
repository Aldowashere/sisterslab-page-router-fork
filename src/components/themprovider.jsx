import { useEffect, useState } from "react";

export default function useTheme(initialTheme = "dark") {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = JSON.parse(localStorage.getItem("theme"));
      return storedTheme || initialTheme;
    }
    return initialTheme;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, [theme]);

  return [theme, setTheme];
}
