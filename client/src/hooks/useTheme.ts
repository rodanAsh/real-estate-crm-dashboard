import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";

export function useTheme() {
    const context = useContext(ThemeContext)

    if(!context) {
        throw new Error("Context not available:(")
    }

    return context;
}