import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {},
});
// we have provided light theme mode as default value for themeContext, along with placeholderholder functions darkTheme and lightTheme

export const ThemeProvider = ThemeContext.Provider; // allows manual passing and handling of data at required places rather than using it like in 08context file

// custom hook that lets you use useTheme() instead of writing useContext(ThemeContext) everywhere.
export default function useTheme(){
    return useContext(ThemeContext);
}