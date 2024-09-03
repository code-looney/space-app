import React, {useState}  from "react";

const SmallDots = () => {
    const [hoverColorDots, setHoverColorDots] = useState("white");
    const [opacityNav, setOpacityNav] = useState("50");
 
    function handleHoverDots () {
        if (index === 0) {
            setHoverColorDots("white")
        }
    }

    // function handleOpacityNav () {
    //     if ()
    // }

    // tijdelijk

    return (
        <div className="flex gap-4 justify-center">
        <span onClick={() => console.log('test-1')} 
        className={`${hoverColorDots}w-[10px] h-[10px] rounded-full bg-white opacity-50 cursor-pointer`}></span>
        <span onClick={() => console.log('test-2')} 
        className={`${hoverColorDots}w-[10px] h-[10px] rounded-full bg-white opacity-50 cursor-pointer`}></span>
        <span onClick={() => console.log('test-3')} 
        className={`${hoverColorDots}w-[10px] h-[10px] rounded-full bg-white opacity-50 cursor-pointer`}></span>
        <span onClick={() => console.log('test-4')} 
        className={`${hoverColorDots}w-[10px] h-[10px] rounded-full bg-white opacity-50 cursor-pointer`}></span>
        </div>
    )
}

export default SmallDots