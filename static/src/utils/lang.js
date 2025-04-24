export const getLang = () => {
    return localStorage.getItem("lang") || "es";
};

export const setLang = (lang) => {
    localStorage.setItem("lang", lang);
};