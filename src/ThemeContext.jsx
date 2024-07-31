import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [hover, setHover] = useState("");
    const [router, setRouter] = useState(null);
    const [mainButtonText, setMainButtonText] = useState(null);


    useEffect(() => {
        fetch(`/routes.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data.mainButton.text) // Tijdelijk
            const text = data.mainButton.text;
            setMainButtonText(text)
        })
    }, [])


    const value = {
        router,
        setRouter,
        hover,
        setHover,
        mainButtonText,
        setMainButtonText

    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
