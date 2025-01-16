import React from 'react';

const PrimaryButton = ({
                           children,
                           onClick,
                           type = "button",
                           disabled = false,
                           size = "md",
                           textSize = "text-2xl",
                           fullWidth = false,
                           margin = "mt-0"
                       }) => {
    const sizeClasses = {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-8",
        xl: "h-16 px-10"
    }[size];

    const className = [
        "font-bold rounded-full transition duration-300",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
        "flex items-center justify-center font-markpro",
        sizeClasses,
        textSize,
        margin,
        fullWidth === true && "w-full",
        disabled ? "opacity-50 cursor-not-allowed bg-gray-300" : "bg-blue-300",
    ].filter(Boolean).join(" ");

    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;