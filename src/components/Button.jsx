const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
    hoverColor,
    hTextColor,
    hBorderColor,
    onClick,
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
             ${backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor}`
                    : "bg-blue-950 text-white border-blue-600"
                } rounded-full ${fullWidth && "w-full"} hover:${hoverColor
                    ? `${hoverColor} ${hTextColor} ${hBorderColor}`
                    : "bg-blue-200 text-white border-blue-950 border-b-2"
                }`}
            onClick={onClick}
        >
            {label}
            
            {iconURL && (
                <img
                    src={iconURL}
                    alt='arrow right icon'
                    className='ml-2 rounded-full bg-white w-5 h-5'
                />
            )}
        </button>
    );
};

export default Button;