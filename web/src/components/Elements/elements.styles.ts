import { clsx } from "clsx";

export const searchInputStyles = {
    searchContainer: () => clsx(
        "bg-white",
        "shadow-lg",
        "p-3 mt-[-20px] mx-[10%]",
        "rounded-lg flex items-center"
    ),

    textInput: () => clsx("outline-none", "ml-2"),
}