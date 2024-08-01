import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    const [hover, setHover] = useState("");
    const [router, setRouter] = useState(null);
    const [mainButtonText, setMainButtonText] = useState(null);
    const [pageOrder, setPageOrder] = useState("");
    const [hoverUnderlineColor, setHoverUnderlineColor] = useState(1);
    const [hideOrUnhideOrder, setHideOrUnhideOrder] = useState(null);



    useEffect(() => {
        fetch(`/routes.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data.mainButton.text) // Tijdelijk
            const text = data.mainButton.text;
            setMainButtonText(text)
        })
    }, [])


    useEffect(() => {
        fetch(`routes.json`)
        .then(res => res.json())
        .then(data => {
        setRouter(data.navigation)
        setPageOrder(data.navigation.order)
        })
    }, [])


    const value = {
        router,
        setRouter,
        hover,
        setHover,
        mainButtonText,
        setMainButtonText,
        pageOrder,
        setPageOrder,
        hoverUnderlineColor,
        setHoverUnderlineColor,
        hideOrUnhideOrder,
        setHideOrUnhideOrder

    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };
