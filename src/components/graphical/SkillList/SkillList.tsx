"use client";

import { motion } from "framer-motion";
import "./SkillList.css";

export default function SkillList() {
    const skills = [
        {
            name: "HTML",
            src: "/assets/images/homepage/icons8-html-5-logo-100.png",
            iconClass: "devicon-html5-plain"
        },
        {
            name: "CSS",
            src: "/assets/images/homepage/css3.svg",
            iconClass: "devicon-css3-plain"
        },
        {
            name: "JavaScript",
            src: "/assets/images/homepage/javascript.svg",
            iconClass: "devicon-javascript-plain"
        },
        {
            name: "PHP",
            src: "/assets/images/homepage/php.svg",
            iconClass: "devicon-php-plain"
        },
        {
            name: "C++",
            src: "/assets/images/homepage/c++.svg",
            iconClass: "devicon-cplusplus-plain"
        },
        {
            name: "Java",
            src: "/assets/images/homepage/git.svg",
            iconClass: "devicon-java-plain"
        },
        {
            name: "MySQL",
            src: "/assets/images/homepage/mysql.svg",
            iconClass: "devicon-sqldeveloper-plain"
        },
        {
            name: "React.js",
            src: "/assets/images/homepage/react.svg",
            iconClass: "devicon-react-plain"
        },
        {
            name: "C Language",
            src: "/assets/images/homepage/c.svg",
            iconClass: "devicon-c-line-wordmark"
        },
        {
            name: "Git",
            iconClass: "devicon-git-plain"
        },
        {
            name: "Tailwind CSS",
            iconClass: "devicon-tailwindcss-plain"
        },
        {
            name: "Postman",
            iconClass: "devicon-postman-plain"
        },
        {
            name: "C#",
            src: "/assets/images/homepage/git.svg",
            iconClass: "devicon-csharp-plain"
        },
        {
            name: "Python",
            src: "/assets/images/homepage/git.svg",
            iconClass: "devicon-python-plain"
        },
        {
            name: "AWS",
            src: "/assets/images/homepage/aws.svg",
            iconClass: "devicon-amazonwebservices-plain-wordmark"
        },
        {
            name: "LaTeX",
            iconClass: "devicon-tex-plain"
        },
        {
            name: "Maven",
            iconClass: "devicon-maven-plain"
        },
        {
            name: "Restful APIs",
            src: "/assets/images/homepage/restful-apis.svg",
            iconClass: "devicon-moleculer-plain"
        },
        {
            name: "Spring",
            iconClass: "devicon-spring-plain"
        }
    ];

    return (
        <>
            <div className="mx-auto max-w-2/3 4xl:max-w-1/2 5xl:max-w-1/3 grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 justify-center">
                {skills.map((skill, index) => (
                    <motion.div
                        className="flex flex-row rounded-xl justify-center p-4 lg:max-w-[500px] bg-[#b6b6b6]/10 w-full max-h-[100px] border-2 border-[#b6b6b6]/50 shadow-md skill-card"
                        key={index}
                        initial={{ scale: 1, opacity: 0.5, translateY: 100 }}
                        transition={{ duration: 0.75, type: "spring" }}
                        whileHover={{ scale: 1.05}}
                        whileInView={{ scale: 1, opacity: 1, translateY: 0 }}
                    >
                        <i className={"icons mx-auto mt-1 justify-center align-middle " + skill.iconClass}></i>
                        <h2 className="max-w-4/5 text-xs text-nowrap w-full">{skill.name}</h2>
                    </motion.div>
                ))}
                <motion.div
                    className="flex flex-row rounded-xl justify-center p-4 lg:max-w-[500px] bg-[#b6b6b6]/10 w-full max-h-[100px] border-2 border-[#b6b6b6]/50 shadow-md skill-card"
                    initial={{ scale: 1, opacity: 0.5, translateY: 100 }}
                    transition={{ duration: 0.75, type: "spring" }}
                    whileHover={{ scale: 1.05}}
                    whileInView={{ scale: 1, opacity: 1, translateY: 0 }}
                >
                    <i className={"icons mx-auto mt-1 justify-center align-middle"}></i>
                    <h2 className="max-w-full text-xs text-center text-nowrap w-full">And more to come!</h2>
                </motion.div>

            </div>
        </>
    );
}