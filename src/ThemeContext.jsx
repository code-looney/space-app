import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [hover, setHover] = useState("");
    const [router, setRouter] = useState(null);
    const [exButtonText, setExButtonText] = useState(null);


    useEffect(() => {
        fetch(`/routes.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data.mainButton.text) // Tijdelijk
            const rep = data.mainButton.text;
            setExButtonText(rep)
        })
    }, [])


    const value = {
        router,
        setRouter,
        hover,
        setHover,
        exButtonText,
        setExButtonText

    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
