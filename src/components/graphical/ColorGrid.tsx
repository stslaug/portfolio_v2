"use client"
import { useState } from "react";
import './colorGrid.css';

export function ColorGrid() {
    // Generate a random HEX color (4 digits + 'FF')
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 4; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        color += 'FF';
        return color;
    }

    const amountToGenerate = 300;

    // React state: one color per tile
    const [colors, setColors] = useState(
        Array.from({ length: amountToGenerate }, () => '')
    );

    // Set color on mouse enter
    function handleMouseEnter(index: number) {
        const newColors = [...colors];
        newColors[index] = getRandomColor();
        setColors(newColors);
    }

    // Clear color on mouse leave (after 200ms)
    function handleMouseLeave(index: number) {
        setTimeout(() => {
            setColors(prevColors => {
                const updatedColors = [...prevColors];
                updatedColors[index] = '';
                return updatedColors;
            });
        }, 200);
    }




    return (
        <div id="colorGrid" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="box"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    );
}

