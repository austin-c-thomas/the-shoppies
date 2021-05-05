export const getNominationsFromLocal = () => {
    let nominations = localStorage.getItem('nominations');
    if (nominations) {
        return JSON.parse(nominations);
    };
};

export const setNominationsOnLocal = (nominations) => {
    if (nominations) {
      localStorage.setItem('nominations', JSON.stringify(nominations));
    };
};