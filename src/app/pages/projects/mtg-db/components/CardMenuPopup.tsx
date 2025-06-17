"use client";
import * as Scry from "scryfall-sdk";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {Separator} from "@/components/ui/separator";
import {Button, buttonVariants} from "@/components/ui/button";
import {useState, useEffect, useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import W from "../assets/symbols/W.svg";
import U from "../assets/symbols/U.svg";
import B from "../assets/symbols/B.svg";
import R from "../assets/symbols/R.svg";
import G from "../assets/symbols/G.svg";
import C from "../assets/symbols/C.svg";
import s1 from "../assets/symbols/1.svg";
import s2 from "../assets/symbols/2.svg";
import s3 from "../assets/symbols/3.svg";
import s4 from "../assets/symbols/4.svg";
import s5 from "../assets/symbols/5.svg";
import s6 from "../assets/symbols/6.svg";
import s7 from "../assets/symbols/7.svg";
import s8 from "../assets/symbols/8.svg";
import s9 from "../assets/symbols/9.svg";
import s10 from "../assets/symbols/10.svg";


interface CardMenuPopupProps {
    card: Scry.Card
}


function legality(legality: string, isLegal: string) {
    return (<Tooltip>
            <TooltipTrigger><span className = {isLegal == "legal" ? "bg-green-500 text-white px-2 py-1 rounded-md" : "bg-red-500 text-white px-2 py-1 rounded-md"}>{legality}</span></TooltipTrigger>
            <TooltipContent>
                {isLegal == "legal" ? "Legal" : "Illegal"}
            </TooltipContent>
        </Tooltip>
    );
}


export default function CardMenuPopup({card}: CardMenuPopupProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [cardPrints, setCardPrints] = useState<string[]>([]);
    const popUp = useRef<HTMLDivElement>(null);


    useEffect(() => {
        fetch(card.prints_search_uri).then(res => res.json()).then(data => {
                let array: string[] = [];
                for (let i = 0; i < data.total_cards; i++) {
                    array.push(data.data[i].image_uris.normal);
                }
                setCardPrints(array);
            },
            (error) => {
                console.log(error);
            })
    }, [isOpen, card.prints_search_uri]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // Check if the click was outside of the popup
            // current property of the ref gives you the actual DOM node
            if (popUp.current && !popUp.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    function convertManaCostToSymbols(manaCost: string) {
        {/* TODO Mana Symbols dont handle adventures, phyrexian symbols, etc */}
        return (
            <span className = {"flex flex-row gap-2 justify-center hover:bg-secondary/30 transition-colors bg-secondary/20 rounded-lg mx-auto px-2 py-1"}>
                {manaCost.split("").map(
                    (cost, index) => (
                        (cost === "{" || cost === "}" || cost === " " || cost === "/") ? "" :
                            <Image key = {index} src = {costToSymbol(cost)} width = {20} height = {20} alt = {cost}/>
                    )
                )
                }
            </span>
        );
    }

    function costToSymbol(cost: string) {
        switch (cost) {
            case "W":
                return W;
            case "U":
                return U;
            case "B":
                return B;
            case "R":
                return R;
            case "G":
                return G;
            case "C":
                return C;
            case "1":
                return s1;
            case "2":
                return s2;
            case "3":
                return s3;
            case "4":
                return s4;
            case "5":
                return s5;
            case "6":
                return s6;
            case "7":
                return s7;
            case "8":
                return s8;
            case "9":
                return s9;
            case "10":
                return s10;
            default:
                return;
        }

    }


    return (

        <div ref = {popUp} className = {"card-popup p-8 max-w-[550px] max-sm:relative sm:fixed rounded-2xl fixed bg-sidebar-primary flex flex-col space-y-1 transition-all " + (isOpen ? "opacity-100" : " hidden opacity-0")}>
            <h2 className = {"text-2xl mb-2"}>{card.name}</h2>

            {cardPrints.length === 0 ? "" : (
                <Carousel className = {"mx-auto justify-center  w-full max-w-[300px] hover:cursor-pointer"}>
                    <CarouselContent>
                        {cardPrints.map((cardPrint, index) => (
                            <CarouselItem key = {index}>
                                <Image className = {"mx-auto justify-center rounded-3xl w-full  max-h-[420px] max-w-[300px] hover:cursor-pointer"} width = {300} height = {200} src = {cardPrint} alt = {card.name}></Image>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            )}

            <p>{card.type_line}</p>
            {card.mana_cost ? convertManaCostToSymbols(card.mana_cost) : ""}
            <p>{card.oracle_text}</p>
            <Separator/>
            <h3 className = {"text-xl"}>Legalities</h3>
            <div className = {"flex flex-row flex-wrap gap-2 space-y-3 mt-4 "}>
                <p className = {"legality"}>{legality("Standard", card.legalities.standard)}</p>
                <p className = {"legality"}>{legality("Future", card.legalities.future)}</p>
                <p className = {"legality"}>{legality("Historic", card.legalities.historic)}</p>
                <p className = {"legality"}>{legality("Gladiator", card.legalities.gladiator)}</p>
                <p className = {"legality"}>{legality("Pioneer", card.legalities.pioneer)}</p>
                <p className = {"legality"}>{legality("Explorer", card.legalities.explorer)}</p>
                <p className = {"legality"}>{legality("Modern", card.legalities.modern)}</p>
                <p className = {"legality"}>{legality("Legacy", card.legalities.legacy)}</p>
                <p className = {"legality"}>{legality("Pauper", card.legalities.pauper)}</p>
                <p className = {"legality"}>{legality("Vintage", card.legalities.vintage)}</p>
                <p className = {"legality"}>{legality("Penny Dreadful", card.legalities.penny)}</p>
                <p className = {"legality"}>{legality("Oathbreaker", card.legalities.oathbreaker)}</p>
                <p className = {"legality"}>{legality("Standard Brawl", card.legalities.brawl)}</p>
                <p className = {"legality"}>{legality("Alchemy", card.legalities.alchemy)}</p>
                <p className = {"legality"}>{legality("Duel Commander", card.legalities.duel)}</p>
                <p className = {"legality"}>{legality("Old School 93/94", card.legalities.oldschool)}</p>

            </div>
            <div className = {"flex flex-row justify-end mt-5 gap-5"}>
                {card.purchase_uris && card.purchase_uris.tcgplayer ?
                    <Link className = {buttonVariants({
                        variant: "default"
                    })} href = {card.purchase_uris.tcgplayer} target = "_blank"
                    >Buy Card ${card.prices?.usd} (USD)</Link>
                    : null}
                {/* TODO Make Card Buy Button Adapt to printing of card */}
                <Button variant = "default" onClick = {() => (setIsOpen(false))}>Close Menu</Button></div>
        </div>
    );
}