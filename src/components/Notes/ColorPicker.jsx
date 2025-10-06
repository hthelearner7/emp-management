import { useEffect, useState } from "react";

const ColorPickerBar = ({ selectedColor, setSelectedColor }) => {
    const colors = [
        "#FDE68A", // warm yellow
        "#C7D2FE", // soft blue
        "#DCFCE7", // light green
        "#FECACA", // soft red
    ];

    return (
        <div className="flex space-x-2 overflow-x-auto py-2 px-2">
            {colors.map((color) => (
                <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 rounded-full cursor-pointer hover:outline-solid outline-blue-500 ${
                        selectedColor === color
                            ? "border-blue-800 border-2 "
                            : ""
                    }`}
                />
            ))}
        </div>
    );
};

export default ColorPickerBar;
