"use client";
import "./experience.css";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import {motion} from "motion/react"

import Link from "next/link";


export default function Experience() {

    const projects = [
        {
            name: "Magical Gardening Game",
            to: "/pages/group/zipcode/zipcode.html",
            lang: ["C#"],
            tech: ["Unity", "Git"],
            type: "Team",
            date: "Dec 2024",
            description: "Created a 2D, cozy, high-fantasy, garden-themed game. Implemented core gameplay in C#, integrated assets in Unity, and collaborated on art, music, and story."
        },
        {
            name: "Most Likely To",
            to: "/pages/project/Project/index.php",
            tech: [],
            lang: ["PHP", "JQuery", "HTML", "CSS", "MySQL"],
            type: "Team",
            date: "May 2025",
            description: "Developed a question and answer platform for friends to vote on the most likely to do the given statments. "
        },
        {
            name: "Driving Rewards Web App",
            to: "/pages/project/DrivingRewards/index.html",
            lang: ["JavaScript", "HTML", "CSS", "MySQL"],
            tech: ["React.js", "AWS", "Ebay API", "Git"],
            type: "Team",
            date: "Dec 2024",
            description: "Web platform for organizations to award users points for eBay items. Implemented AWS-backed authentication, secure ordering, and scalable infrastructure."
        },
        {
            name: "Card Database",
            to: "/pages/project/Card-Database/card-home.php",
            lang: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
            tech: ["Scryfall API", "Git"],
            type: "Solo",
            date: "May 2025",
            description: "A web application that allows users to create, view, and manage their own card databases. The application provides a user-friendly interface for creating and managing cards, as well as displaying them in a visually appealing manner. The application also includes features for searching and sorting cards, as well as exporting data to various formats."
        },
        {
            name: "Cute vs. Creepy - Eye Tracking Research",
            to: "/pages/project/EyeTracking/index.html",
            lang: ["Python"],
            tech: ["PsychoPy", "Git"],
            type: "Solo",
            date: "Dec 2024",
            description: "Conducted an eye-tracking experiment to assess emotional responses to generated images, analyzing gaze patterns to measure \"cute\" vs. \"creepy.\""
        },
        {
            name: "Zipcode Finder",
            to: "/pages/group/zipcode/zipcode.html",
            tech: ["Leaflet API"],
            lang: ["JavaScript", "HTML", "CSS"],
            type: "Team",
            date: "Feb 2025",
            description: "Locates and displays the 'around the globe' distances between zipcodes."
        },
        {
            name: "Sort Demo",
            to: "/pages/solo/Sort/sort.html",
            tech: [],
            lang: ["JavaScript", "HTML", "CSS", "MySQL"],
            type: "Solo",
            date: "Jan 2025",
            description: "Displays a list and dynamically displays the sorted list based on the user's input."
        }
    ];


    return (
        <div className = "flex md:flex-row flex-col" id = {"experienceMain"}>
            <motion.div className = "flex flex-col relative w-full md:w-1/4 min-w-[300px] h-full rounded-lg justify-left " initial = {{
                x: "-800px",
                y: 0
            }} animate = {{x: "0px"}} transition = {{duration: 1.00, type: "ease-in-out"}} id = "head"
            >
                <div className = "fixed sticky h-full w-full">

                    <div className = {" h-min w-full text-foreground"}>

                        <div id = "headerAndName" className = "md:flex md:flex-col flex-row flex">
                            <Image alt = "Sean's headshot" src = "/assets/images/homepage/headshot_sqr.jpg" width = {300} height = {300} className = "rounded-lg md:justify-center  mt-3 mx-auto max-md:w-[150px] max-md:h-[150px] w-full  md:max-w-3/4 shadow-lg"/>
                            <div className = "flex flex-col justify-center max-md:text-center w-full ml-5 ">
                                <h2 className = "title text-nowrap mt-5">Sean Slaughter</h2>
                                <Separator className = {" mb-2 md:visible hidden"}/>
                                <div className = "flex flex-col justify-center  max-md:text-center w-full ">
                                    <p className = "subtitle">Software Developer</p>
                                    <p className = "subtitle">Clemson University</p>
                                    <p className = "subtitle">Clemson, SC</p>
                                </div>
                            </div>
                            <div id = {"contact-buttons-1"} className = "mt-3 md:w-full justify-center flex md:flex-row flex-col gap-2">
                                <Button asChild>
                                    <Link aria-label = "Email stslaug@gmail.com" href = "mailto:stslaug@gmail.com"><i className = " fa-xl fa-solid fa-envelope"></i></Link>
                                </Button>
                                <Button asChild>
                                    <Link aria-label = "Visit LinkedIn profile" href = "https://www.linkedin.com/in/stslaug" rel = "noopener noreferrer" target = "_blank"><i className = "fa-xl fa-brands fa-linkedin"></i></Link>
                                </Button>
                                <Button asChild>
                                    <Link aria-label = "Download Resume PDF" download = "Resume_SSlaughter.pdf" href = "/assets/files/Resume.pdf"><i className = "fa-xl fa-solid fa-download"></i></Link>
                                </Button>

                            </div>
                        </div>
                    </div>
                    <div className = " h-full  text-foreground">
                        <h3 className = "title mt-2">Skills</h3>
                        <Separator className = {"mb-2"}/>
                        <div>
                            <ul className = "skillList flex flex-col gap-1 w-full">
                                <li><strong className = {"mr-1"}>Cloud:</strong>
                                    <strong className = "skill">Amazon&nbsp;Web&nbsp;Services</strong>
                                    <strong className = "skill">Soap</strong>
                                    <strong className = "skill">RESTful&nbsp;APIs</strong>
                                </li>

                                <li><strong className = {"mr-1"}>Languages:</strong>
                                    <strong className = "skill">Java</strong>
                                    <strong className = "skill">C / C++</strong>
                                    <strong className = "skill">C#</strong>
                                    <strong className = "skill">HTML/CSS</strong>{/* Note: &nbsp; only affects spaces. Breaking at '/' is browser-dependent. CSS 'white-space: nowrap;' is more robust for such cases. */}
                                    <strong className = "skill">JavaScript</strong>
                                    <strong className = "skill">PHP</strong></li>
                                <li>
                                    <strong className = {"mr-1"}>Web&nbsp;Frameworks:</strong>
                                    <strong className = "skill">React</strong>
                                    <strong className = "skill">jQuery</strong>
                                    <strong className = "skill">TailwindCSS</strong>
                                </li>
                                <li><strong className = {"mr-1"}>Tools:</strong>
                                    <strong className = "skill">Atlassian&nbsp;Jira</strong>
                                    <strong className = "skill">Confluence</strong>
                                    <strong className = "skill">GIT</strong>
                                    <strong className = "skill">ServiceNow</strong>
                                    <strong className = "skill">Google&nbsp;Tool&nbsp;Suite</strong>
                                    <strong className = "skill">Spring&nbsp;Tool&nbsp;Suite</strong>
                                </li>

                                <li><strong className = {"mr-1"}>Workplace Skills:</strong>
                                    <strong className = "skill">Agile&nbsp;Workflow</strong>
                                    <strong className = "skill">Team&nbsp;Management</strong>
                                    <strong className = "skill">Conflict&nbsp;Mediation</strong>
                                    <strong className = "skill">Project&nbsp;Planning</strong>
                                </li>
                            </ul>
                        </div>
                        <div id = {"contact-buttons-2"} className = "mt-3  justify-center flex flex-row gap-2">
                            <Button variant = {"default"} asChild>
                                <Link aria-label = "Email stslaug@gmail.com" href = "mailto:stslaug@gmail.com"><i className = "fa-solid fa-envelope fa-xl"></i></Link>
                            </Button>
                            <Button asChild>
                                <Link aria-label = "Visit LinkedIn profile" href = "https://www.linkedin.com/in/stslaug" rel = "noopener noreferrer" target = "_blank"><i className = "fa-brands fa-linkedin fa-xl"></i></Link>
                            </Button>
                            <Button asChild>
                                <Link aria-label = "Download Resume PDF" download = "Resume_SSlaughter.pdf" href = "/assets/files/Resume.pdf"><i className = "fa-solid fa-download fa-xl"></i></Link>
                            </Button>

                        </div>
                    </div>

                </div>
            </motion.div>

            <main className = "inline-block pl-10 pr-10 sm:pl-20 sm:pr-20 max-w-full md:max-w-3/5 w-full sm:ml-10 snap-proximity snap-y">
                <div className = "">
                    <h2>Education</h2>
                    <Separator className = {"mb-2"}/>
                    <section className = "section-wrap snap-center" id = "education">
                        <p><strong>Clemson University, Clemson, SC</strong> B.S. in Computer Science</p>

                        <p><strong>Relevant Coursework:</strong></p>
                        <div className = {"grid grid-cols-2"}>
                            <div>
                                <ul>
                                    <li>3D Computer Graphics</li>
                                    <li>Operating Systems</li>
                                    <li>Eye Tracking Methodology</li>
                                    <li>Game Design Methodology</li>
                                    <li>Discrete Structures and Algorithms</li>
                                    <li>Software Engineering Practicum</li>
                                </ul>
                            </div>

                            <div>
                                <p><strong>Certifications:</strong></p>
                                <ul>
                                    <li>Java Web Services & RestAPI</li>
                                    <li>Introductory Terraform for AWS</li>
                                    <li>Java Test-Driven Development</li>
                                    <li>CITI Human Subjects Protections (At Clemson)</li>
                                </ul>
                            </div>
                        </div>

                    </section>

                    <h2 className = "title mt-10">Work Experience</h2>
                    <Separator className = {"mb-2"}/>
                    <section className = "section-wrap snap-center" id = "experience">
                        <section id = "ally" className = {"snap-center mb-5"}>
                            <h3 className = "title">Ally Financial Bank (Charlotte, NC)</h3>
                            <h4>
                                <strong>Intern Software Developer</strong>{/* TODO Make style more consistent with other experience */}
                                <span className = {"ml-5 text-right"}>May 2023 - Aug 2023</span></h4>
                            <ul>
                                <li>Managed a MySQL database and integrated internal authentication services for secure user access control.</li>
                                <li>Deployed Java-Based batch processing services to safely manipulate sensitive data efficiently, reliably.</li>
                                <li>Leveraged company-specific AI tools and participated in an internal hack-a-thon planning committee.</li>
                                <li>Volunteered with local non-profits in gardening and clothing recycling.</li>
                            </ul>
                            <ul>
                                <li>Developed Java-based tools and integrated AWS, Hibernate, Terraform, and REST/SOAP APIs to streamline data exchange and provisioning.</li>
                                <li>Operated in an Agile environment, contributing to sprints, stand-ups, and retrospectives for timely deliveries.</li>
                                <li>Diagnosed issues, designed scalable microservices, and refined system architecture for performance and maintainability.</li>
                                <li>Volunteered with a Charlotte-based STEM center to set up LEGO® engineering kits for local schools.</li>
                            </ul>
                        </section>

                        <section id = "clemson" className = {" mb-5"}>
                            <h3 className = "title snap-center">Clemson Home (Clemson, SC)</h3>
                            <p>Jan 2021 - Dec 2023</p>
                            <p>
                                <strong>Residential Community Leader</strong> (Aug 2023 - Dec 2023)
                                <br/> (previously Residential Community Mentor) </p>
                            <ul>
                                <li>Managed scheduling, planned events, and promoted educational growth for 50+ residents, fostering an inclusive environment.</li>
                                <li>Resolved staff and student conflicts in collaboration with local law enforcement and behavioral specialists.</li>
                            </ul>
                            <p><strong>Residential Area Desk Assistant</strong> (Jan 2021 - Dec 2023)</p>
                            <ul>
                                <li>Oversaw facility access and fielded resident inquiries via phone support.</li>
                                <li>Refined the Desk Assistant role to better serve community needs.</li>
                            </ul>

                        </section>

                        <section id = "otherExperience">
                            <h3 className = "title snap-center">Other Experiences</h3>
                            <ul>
                                <li><strong>Publix (Deli Clerk)</strong> Dec 2023 - Present</li>
                                <li><strong>McDonald&#39;s (Shift Manager)</strong> May 2018 - Jan 2021</li>
                            </ul>

                        </section>
                    </section>

                    <h2 className = "title mt-10">Projects</h2>
                    <Separator className = {"mb-2"}/>
                    <section className = "section-wrap snap-center" id = "projects">

                        {projects.map((project, index) => (
                            <div key = {index} className = "mb-2">
                                <h3>{project.name}</h3>
                                <p>{project.type} Project ({project.date})</p>
                                <ul>
                                    <li>
                                        <strong className = "mr-2">Languages:</strong>
                                        {project.lang.map((language, langIndex) => (
                                            <strong key = {langIndex} className = "skill">
                                                {language}
                                            </strong>
                                        ))}
                                    </li>
                                    <li>
                                        <strong className = "mr-2">Technologies:</strong>
                                        {project.tech.map((technology, techIndex) => (
                                            <strong key = {techIndex} className = "skill"> {/* Consider a different class name if "lang" is too specific */}
                                                {technology}
                                            </strong>
                                        ))}
                                    </li>
                                    <li>
                                        <strong className = "mr-2">Description:</strong> {project.description}
                                    </li>
                                </ul>
                            </div>
                        ))}

                        <section className = "project-section">
                            <h3 className = "title snap-center">Other Projects</h3>
                            <ul>
                                <li>Microservice Migration (Java 2023)</li>
                                <li>Batch Processing Service (Java/MySql 2024)</li>
                                <li>Connect X (Java 2022)</li>
                                <li>Mortgage Acceptance Calculator (C 2021)</li>
                            </ul>
                        </section>
                    </section>
                </div>
            </main>
            {/*TODO: Add back in project section Once Implemented focus on working site*/}
            {/*<div className = "flex flex-col relative mx-auto w-1/5 h-min rounded-lg justify-right">*/}
            {/*    <div className = "fixed sticky h-min w-full">*/}
            {/*        <div className = {" h-min w-full"}>*/}
            {/*            <h2 className = "title mt-5">Projects</h2>*/}
            {/*            <Separator className = {" mb-2"}/>*/}
            {/*            <div className = "mr-10">*/}
            {/*                {projects.map((project, index) => (*/}
            {/*                    <div key = {index} className = {"w-min h-min mb-10"}>*/}
            {/*                        <div className = "w-[200px] h-[150px] lg:w-[300px] lg:h-[225px] 2xl:w-[350px] 2xl:h-[262.50px] 3xl:w-[400px] 3xl:h-[300px] bg-slate-700 opacity-50 rounded-lg shadow-lg"></div>*/}
            {/*                        <div className = "flex flex-col">*/}
            {/*                        <span className = "flex flex-row">*/}
            {/*                            <h3 className = "text-left !text-xl text-slate-400 w-full">{project.name}</h3>*/}
            {/*                            <h3 className = "text-right !text-xl  text-slate-400 w-min">Tech</h3>*/}
            {/*                        </span>*/}
            {/*                            <p className = "text-right !text-lg text-slate-500 subtitle">{project.lang}</p>*/}

            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
