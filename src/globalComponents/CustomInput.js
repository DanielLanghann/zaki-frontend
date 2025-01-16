import React from "react";

const CustomInput = ({ label, id, type, placeholder, value, onChange }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-gray-500 text-xl mb-2">
                {label}
            </label>
            <input
                className="appearance-none border-none rounded w-full py-5 px-6 text-xl text-gray-100 bg-gray-100 font-markpro placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default CustomInput;
