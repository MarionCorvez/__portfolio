function Switchmode() {
  // Detect if dark mode is on
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");
  // Toggle the "theme--dark" class based on if the media query matches
  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("theme--dark", state);
  }
  // Initial setting
  toggleDarkMode(useDark.matches);

  // Listen for changes in the OS settings
  useDark.addEventListener("change", (event) => {
    toggleDarkMode(event.matches);
  });

  // Toggle the "theme--dark" class on click
  function handleMode() {
    document.documentElement.classList.toggle("theme--dark");
  }

  return (
    <>
      <button
        onClick={handleMode}
        className="moon"
        title="Click to change light mode"
      ></button>
    </>
  );
}

//window.addEventListener("DOMContentLoaded", Switchmode);

export default Switchmode;
