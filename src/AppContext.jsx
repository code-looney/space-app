import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    const [hover, setHover] = useState("");
    const [router, setRouter] = useState(null);
    const [mainButtonText, setMainButtonText] = useState(null);
    const [pageOrder, setPageOrder] = useState("");
    const [hideOrUnhideOrder, setHideOrUnhideOrder] = useState(null);
    const [hoverUnderlineColor, setHoverUnderlineColor] = useState(1);
    const [toggleMobileMenu, setToggleMobileMenu] = useState("hidden")
    const [toggleMobileMenuIcons, setToggleMobileMenuIcons] = useState("hamburger")


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

    function handleNavLinkHover (id) {
        setHoverUnderlineColor(id)
      } 

    function handleToggleMobileMenu () {
        if (toggleMobileMenu === "hidden") {
            setToggleMobileMenu("flex")
            setToggleMobileMenuIcons("close")
        } else if (toggleMobileMenu === "flex") {
            setToggleMobileMenu("hidden")
            setToggleMobileMenuIcons("close")
        }
    }


    const value = {
        router,
        setRouter,
        hover,
        setHover,
        mainButtonText,
        setMainButtonText,
        pageOrder,
        setPageOrder,
        hideOrUnhideOrder,
        setHideOrUnhideOrder,
        hoverUnderlineColor,
        setHoverUnderlineColor,
        handleNavLinkHover,
        handleToggleMobileMenu,
        toggleMobileMenu,
        setToggleMobileMenu,
        toggleMobileMenuIcons

    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };
