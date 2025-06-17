"use client";

import { motion } from "framer-motion";
import "./SkillList.css";

interface SkillListProps {
    skills: ({
        name: string
        src: string
        iconClass: string
    } | {
        name: string
        iconClass: string
        src?: undefined
    })[],
    icons?: boolean
}



export default function SkillList({skills, icons = true} : SkillListProps) {


    return (
        <>
            <div className="mx-auto max-w-2/3 4xl:max-w-4/7  grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 justify-center">
                {skills.map((skill, index) => (
                    <motion.div
                        className="flex flex-row rounded-xl justify-center p-4 lg:max-w-[500px] bg-[#b6b6b6]/10 w-full max-h-[100px] border-2 border-[#b6b6b6]/50 shadow-md skill-card "
                        key={index}
                        initial={{ scale: 1, opacity: 0.5, translateY: 100 }}
                        transition={{ duration: 0.75, type: "spring" }}
                        whileHover={{ scale: 1.05}}
                        whileInView={{ scale: 1, opacity: 1, translateY: 0 }}
                    >
                        {(icons && (skill.iconClass)) ? (<i className={"icons mx-auto mt-1 justify-center align-middle " + skill.iconClass}></i>) : null}
                        <h2 className={"text-lg text-nowrap w-full " + (icons && skill.iconClass ? "max-w-4/5" : (" max-w-full text-center"))}>{skill.name}</h2>
                    </motion.div>
                ))}


            </div>
        </>
    );
}