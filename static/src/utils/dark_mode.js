export const toggleDarkMode = () => {
    const current = localStorage.getItem("mode") || "light";
    const newMode = current === "light" ? "dark" : "light";
    localStorage.setItem("mode", newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
};

export const applyInitialDarkMode = () => {
    const mode = localStorage.getItem("mode") || "light";
    document.documentElement.classList.toggle("dark", mode === "dark");
};