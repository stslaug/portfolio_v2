"use client";
import '@/app/index.css';
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";

import SkillList from "@/components/graphical/SkillList/SkillList";
import Image from 'next/image';
import {motion} from "motion/react";


//I am iffy on design for this section, but I'm going to leave this here for now
// const skills = [
//     {
//         name: "HTML",
//         src: "/assets/images/homepage/icons8-html-5-logo-100.png",
//         iconClass: "devicon-html5-plain"
//     },
//     {
//         name: "CSS",
//         src: "/assets/images/homepage/css3.svg",
//         iconClass: "devicon-css3-plain"
//     },
//     {
//         name: "JavaScript",
//         src: "/assets/images/homepage/javascript.svg",
//         iconClass: "devicon-javascript-plain"
//     },
//     {
//         name: "PHP",
//         src: "/assets/images/homepage/php.svg",
//         iconClass: "devicon-php-plain"
//     },
//     {
//         name: "C++",
//         src: "/assets/images/homepage/c++.svg",
//         iconClass: "devicon-cplusplus-plain"
//     },
//     {
//         name: "Java",
//         src: "/assets/images/homepage/git.svg",
//         iconClass: "devicon-java-plain"
//     },
//     {
//         name: "MySQL",
//         src: "/assets/images/homepage/mysql.svg",
//         iconClass: "devicon-sqldeveloper-plain"
//     },
//     {
//         name: "React.js",
//         src: "/assets/images/homepage/react.svg",
//         iconClass: "devicon-react-plain"
//     },
//     {
//         name: "C Language",
//         src: "/assets/images/homepage/c.svg",
//         iconClass: "devicon-c-line-wordmark"
//     },
//     {
//         name: "Git",
//         iconClass: "devicon-git-plain"
//     },
//     {
//         name: "Tailwind CSS",
//         iconClass: "devicon-tailwindcss-plain"
//     },
//     {
//         name: "Postman",
//         iconClass: "devicon-postman-plain"
//     },
//     {
//         name: "C#",
//         src: "/assets/images/homepage/git.svg",
//         iconClass: "devicon-csharp-plain"
//     },
//     {
//         name: "Python",
//         src: "/assets/images/homepage/git.svg",
//         iconClass: "devicon-python-plain"
//     },
//     {
//         name: "AWS",
//         src: "/assets/images/homepage/aws.svg",
//         iconClass: "devicon-amazonwebservices-plain-wordmark"
//     },
//     {
//         name: "LaTeX",
//         iconClass: "devicon-tex-plain"
//     },
//     {
//         name: "Maven",
//         iconClass: "devicon-maven-plain"
//     },
//     {
//         name: "Restful APIs",
//         src: "/assets/images/homepage/restful-apis.svg",
//         iconClass: "devicon-moleculer-plain"
//     },
//     {
//         name: "Spring",
//         iconClass: "devicon-spring-plain"
//     },
// ];

const frontEnd = [
    {
        name: "HTML/CSS",
        src: "/assets/images/homepage/icons/html-css.png", // Placeholder
        iconClass: "devicon-html5-plain"
    },
    {
        name: "JavaScript",
        src: "/assets/images/homepage/icons/javascript.png", // Placeholder
        iconClass: "devicon-javascript-plain"
    },
    {
        name: "React",
        src: "/assets/images/homepage/icons/react.png", // Placeholder
        iconClass: "devicon-react-original"
    },
    {
        name: "jQuery",
        src: "/assets/images/homepage/icons/jquery.png", // Placeholder
        iconClass: "devicon-jquery-plain"
    },
    {
        name: "Tailwind CSS",
        src: "/assets/images/homepage/icons/tailwindcss.png", // Placeholder
        iconClass: "devicon-tailwindcss-plain"
    },
];

const backEnd = [
    {
        name: "Java",
        src: "/assets/images/homepage/icons/java.png", // Placeholder
        iconClass: "devicon-java-plain"
    },
    {
        name: "C / C++",
        src: "/assets/images/homepage/icons/c-cpp.png", // Placeholder
        iconClass: "devicon-cplusplus-plain"
    },
    {
        name: "C#",
        src: "/assets/images/homepage/icons/csharp.png", // Placeholder
        iconClass: "devicon-csharp-plain"
    },
    {
        name: "PHP",
        src: "/assets/images/homepage/icons/php.png", // Placeholder
        iconClass: "devicon-php-plain"
    },
    {
        name: "Spring Tool Suite",
        src: "/assets/images/homepage/icons/spring-tool-suite.png", // Placeholder
        iconClass: "devicon-spring-plain" // Closest relevant icon for Spring generally
    },
    {
        name: "RESTful APIs",
        src: "/assets/images/homepage/icons/rest-api.png", // Placeholder
        iconClass: "devicon-moleculer-plain" // No direct 'REST' icon, often associated with tools like Postman but for general API concept
    },
    {
        name: "SOAP",
        src: "/assets/images/homepage/icons/soap.png", // Placeholder
        iconClass: "devicon-xml-plain" // No widely available standard icon for SOAP
    },
];


const developmentToolsPlatforms = [
    {
        name: "GIT",
        src: "/assets/images/homepage/icons/git.png", // Placeholder
        iconClass: "devicon-git-plain"
    },
    {
        name: "Atlassian Jira",
        src: "/assets/images/homepage/icons/jira.png", // Placeholder
        iconClass: "devicon-jira-plain"
    },
    {
        name: "Confluence",
        src: "/assets/images/homepage/icons/confluence.png", // Placeholder
        iconClass: "devicon-confluence-plain"
    },
    {
        name: "ServiceNow",
        src: "/assets/images/homepage/icons/servicenow.png", // Placeholder
        iconClass: "" // No widely available standard icon for ServiceNow
    },
    {
        name: "Google Tool Suite",
        src: "/assets/images/homepage/icons/google-suite.png", // Placeholder
        iconClass: "devicon-google-plain" // General Google icon
    },
    {
        name: "AWS",
        src: "/assets/images/homepage/icons/aws.png", // Placeholder
        iconClass: "devicon-amazonwebservices-plain"
    },
];

const professionalWorkplaceSkills = [
    {
        name: "Agile Workflow",
        src: "/assets/images/homepage/icons/agile.png", // Placeholder
        iconClass: "" // No widely available standard icon for Agile
    },
    {
        name: "Team Management",
        src: "/assets/images/homepage/icons/team-management.png", // Placeholder
        iconClass: ""
    },
    {
        name: "Conflict Mediation",
        src: "/assets/images/homepage/icons/conflict-mediation.png", // Placeholder
        iconClass: ""
    },
    {
        name: "Project Planning",
        src: "/assets/images/homepage/icons/project-planning.png", // Placeholder
        iconClass: ""
    },
];

export default function Home() {
    return (
        <>
            <header id = "heroHeader" className = "relative h-screen ">

                <div className = "relative flex items-center justify-center h-full w-full" id = "welcome">

                    <motion.div className = "absolute text-white! text-left top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4" initial = {{
                        scale: 0,
                        opacity: 0
                    }} animate = {{scale: 1, opacity: 1}} transition = {{
                        duration: 0.75,
                        type: "spring"
                    }} whileHover = {{scale: 1.05}} whileInView = {{scale: 1, opacity: 1, translateY: 0}}
                    >
                        <h1 className = "!text-8xl text-white! mb-2">Hello!<br/> I<span className = {"max-lg:hidden"}>&apos;m </span>
                            <span className = {"lg:hidden"}> am</span> <strong>Sean</strong>!</h1>
                        <h2 className = "!text-3xl text-white! mb-2">A Graduate Computer Scientist, Web Developer, & Problem Solver</h2>
                        <p className = "text-3xl mb-4">Crafting clean, efficient, and user-focused web experiences.</p>
                        <Button size = {"xxxl"} asChild>
                            <Link href = "#about">Learn More</Link>
                        </Button>
                    </motion.div>
                </div>

            </header>

            <main style = {{backgroundColor: '#0f0026'}} className = {""}>

                <section id = "about" className = "relative z-10 flex flex-col md:flex-row lg:max-w-2/3 w-min mx-auto items-center gap-8 h-[50vh] min-h-[650px]">
                    <div className = {"about-me-oval-wrap"}> {/* Added for Ovals...*/}

                        <div id = "oval1" className = {"oval"}></div>
                        <div id = "oval2" className = {"oval"}></div>
                    </div>
                    <div className = "max-w-full h-full min-h-full flex justify-center items-center gap-8 flex-col">
                        <div className = "flex min-w-min min-h-min h-full w-full max-w-2/6 justify-center items-center">
                            <Image alt = "Sean's headshot" src = "/assets/images/homepage/headshot.jpg" width = {400} height = {400} className = "rounded-lg shadow-lg max-w-full h-auto"/>
                        </div>
                        <div className = " 2xl:min-w-[700px] xl:min-w-[600px] lg:min-w-[500px] min-w-[400px] text-wrap min-h-min h-full max-w-3/5 w-full justify-center items-center">
                            <h2 className = "text-4xl">About Me</h2>
                            <p>I&#39;m a graduate web developer with a passion for creating. I enjoy tackling complex challenges and turning them into intuitive user
                                experiences.</p>
                            <p>I enjoy debating philosophy, playing board games, and watching horror movies. </p> <br/>
                            <Link href = "/pages/experience" legacyBehavior passHref>
                                <a className = {buttonVariants({variant: "default", size: "xxl"})}>View Resume
                                    <i className = "fa-solid fa-forward btn-pointer"></i></a>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className = "flex flex-col justify-center max-w-full min-w-full h-min mx-auto" id = "skills">

                    <div className = "w-2/3 mx-auto p-10">
                        <h2>Skills and Tools</h2>
                        <p>I am a developer who enjoys learning and utilizing multiple different tools and technologies. Here is a list of skills and tools I am experienced with!</p>
                    </div>

                    <div className = " w-full">
                        <h2 className={"text-center mb-2"}>Front End</h2>
                        <SkillList skills={frontEnd}/>

                        <h2 className={"text-center mb-2 mt-4"}>Back End</h2>
                        <SkillList skills={backEnd}/>

                        <h2 className={"text-center mb-2 mt-4"}>Development Tool Platforms</h2>
                        <SkillList skills={developmentToolsPlatforms}/>

                        <h2 className={"text-center mb-2 mt-4"}>Professional Workplace Skills</h2>
                        <SkillList icons={false} skills={professionalWorkplaceSkills}/>
                    </div>

                </section>

                <section className = "flex flex-col min-h-[33vh] text-center justify-center mx-auto" id = "contact">
                    <h2 className = "text-4xl mx-auto">Contact</h2>
                    <p className = "text-2xl mt-4">Let&#39;s connect and discuss your next project.</p>

                    <ul className = "flex flex-col sm:flex-row gap-4">
                        <li>
                            <a href = "mailto:site@seanslaughter.dev" className = {buttonVariants({
                                variant: "default",
                                size: "xxl"
                            })}
                            ><i className = "fas fa-xl fa-envelope"></i> Email
                            </a>
                        </li>
                        <li>
                            <a href = "https://github.com/stslaug" className = {buttonVariants({
                                variant: "default",
                                size: "xxl"
                            })} target = "_blank"
                            >
                                <i className = "fab fa-github fa-xl"></i> GitHub</a>
                        </li>
                        <li>
                            <Link className = {buttonVariants({
                                variant: "default",
                                size: "xxl"
                            })} href = "https://www.linkedin.com/in/stslaug" target = "_blank"
                            ><i className = "fab fa-xl fa-linkedin"></i> LinkedIn</Link>
                        </li>
                    </ul>

                </section>
            </main>

        </>
    );
}
