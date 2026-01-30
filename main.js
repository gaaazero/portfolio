
    AOS.init();


    const roll =document.querySelector(".roll");

    roll.animate (
        [
            { transform: "translateX(300px) rotate(720deg)" },
            { transform: "translateX(150px) rotate(540deg)", offset: 0.5 },
            { transform: "translateX(0) rotate(0deg)" }
        ],
        {
            duration: 1800,
            easing: "ease-out",
            fill: "forwards"
        }
    );