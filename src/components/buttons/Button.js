import React,{useState} from "react";

export default function RippleButton({ className, children,onClick=()=>{} }) {

    const createRipple = (event) => {
        if(event.type === 'keydown' && event.keyCode !== 32 )return 

        const button = event.currentTarget;
        const btnRect = button.getBoundingClientRect();

        const circle = document.createElement("span");
        const diameter = Math.max(btnRect.width, btnRect.height);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - btnRect.left - radius}px`;
        circle.style.top = `${event.clientY - btnRect.top - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) ripple.remove();

        button.appendChild(circle);
    };

    return (
        <button
            className={`btn ${className ? className : ""}`}
            type="submit"
            onClick={onClick}
            onMouseDown={createRipple}
            onKeyDown={createRipple}
        >
            {children}
        </button>
    );
}
