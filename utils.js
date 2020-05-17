const debounce = (func, delay = 1000) => { // Jeżeli wpisujemy kolejne znaki bez przerwy minimum 1s, to czyścimy timeout, dlatego funkcja nic nie zwraca. Zwróci dopiero wtedy, kiedy między wprowadzonymi znakami będzie przerwa minimum 1 sekundy.
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};