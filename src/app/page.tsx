"use client";
import '@/app/index.css';
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";

import SkillList from "@/components/graphical/SkillList/SkillList";
import Image from 'next/image';
import {motion} from "motion/react";

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
                            <p>I&#39;m a studying web developer with a passion for creating simplistic and functional
                                websites. I enjoy tackling complex challenges and turning them into intuitive user
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

                    <div className = "w-full">
                        <SkillList/>
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
