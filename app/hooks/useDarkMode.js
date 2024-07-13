// (c) Sergey Leschev Dark Mode hook

import { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";
import { useLocalStorage } from "./useStorage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("theme--dark", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
}
