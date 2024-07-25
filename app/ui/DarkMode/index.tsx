import useDarkMode from "@/app/hooks/useDarkMode";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
      className="moon"
      title="Click to change light mode"
      aria-label="Click to change light mode"
    ></button>
  );
}
