"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Separator } from "@/components/ui/separator";

export default function NameSorter() {
    let [namesSet, setNamesSet] = useState<string[]>([]);
    let [newName, setNewName] = useState('');

    const styleName = (name: string) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    const sortNames = () => {
        const theName = newName.trim();

        if (theName === '') return;

        let styledName = styleName(theName);

        if (namesSet.includes(styledName)) {
        } else {
            const updatedNames = [...namesSet, styledName];
            updatedNames.sort();
            setNamesSet(updatedNames);
        }

        setNewName('');
    };

    const handleKeyDown = (event: { key: string; preventDefault: () => void; }) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sortNames();
        }
    };

    const handleAddClick = () => {
        sortNames();
    };



    return (
        <div>
            <main className={"mx-auto h-full min-h-[85vh] px-4 py-8 max-w-4xl"}>
                <h1 className={"text-3xl font-bold text-center mb-4"}>Sorting Your Entries</h1>
                <Separator className={"mb-4 mt-4 mx-auto max-w-1/2"}/>
                <p className={"text-center"}>Add at least two words in the box below, and a sorted list of your words will appear in the area below.</p>

                <Separator className={"mb-4 mt-4"}/>

                <div>
                    <div>
                        <Label htmlFor="newname" className={"mb-2"}>Enter a name or word:</Label>
                        <Input
                            id="newname"
                            type="text"
                            className={"w-full px-3 py-2 p-5 mb-4"}
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Add your word"
                        />
                    </div>

                    <Button onClick={handleAddClick}>
                        Add
                    </Button>
                    <Separator className={"mb-4 mt-4"}/>
                    <div>
                        <h2 className={"text-2xl mb-2 font-semibold"}>Sorted Names</h2>

                        <ol>
                            {namesSet.length === 0 ? (
                                <li>The sorted names will appear here.</li>
                            ) : (
                                namesSet.map((name, index) => (
                                    <li className={"p-3 border-2 rounded-lg border-violet-800 mb-2"}key={index}>
                                        {name}
                                    </li>
                                ))
                            )}
                        </ol>
                    </div>
                </div>
            </main>
        </div>
    );
}