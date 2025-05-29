"use client";

import React from 'react';
import './WordCloud.css';

interface WordCloudProps {
    listOfWords: string[];
}

export default function WordCloud({ listOfWords }: WordCloudProps) {
    return (
        <>
            <ul className={"word-cloud" }>
                {Array.from(listOfWords).map((word, index) => (
                    <li style={{fontSize: Math.floor((Math.random() * (4 - 1) + 1)) + 'rem'}} key={index}>{word}</li>
                ))}
            </ul>
        </>
    );
}
