import {useState, createContext, useContext, useEffect} from 'react';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({children}) => {
    const persisted = localStorage.getItem('ui') ? JSON.parse(localStorage.getItem('ui')) : null;
    const browserTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const [theme, setTheme] = useState(persisted !== null ? persisted.theme : (browserTheme.matches ? 'dark' : 'light'));
    const [fontScale, setFontScale] = useState(persisted !== null ? persisted.scale : 1);

    const page =  document.documentElement;

    useEffect(() => {
        localStorage.setItem('ui', JSON.stringify({theme: theme, scale: fontScale}));
        page.style.setProperty('--font-scale', fontScale);
        page.classList.add('no-transition');
        setTimeout(() => document.documentElement.classList.remove('no-transition'), 100);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme, fontScale]);

    return (
        <ThemeContext.Provider value={{theme, setTheme, fontScale, setFontScale}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeProvider = () => useContext(ThemeContext);