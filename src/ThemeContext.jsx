import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [hover, setHover] = useState("");
    const [router, setRouter] = useState(null);


    const value = {
        router,
        setRouter,
        hover,
        setHover

    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
