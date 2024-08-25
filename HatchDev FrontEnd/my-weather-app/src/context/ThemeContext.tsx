import { createContext } from "react";

interface ThemeContextProps {
    theme: { backgroundColor: string };
    setTheme: (theme: { backgroundColor: string }) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
