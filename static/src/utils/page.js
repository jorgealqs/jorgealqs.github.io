export const getPage = () => {
    return localStorage.getItem("page") || "home";
};

export const setPage= (lang) => {
    localStorage.setItem("page", lang);
};