import '@/app/index.css';
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import WordCloud from "@/components/graphical/WordCloud/WordCloud";
import Image from 'next/image';
import { Separator } from "@/components/ui/separator";



const listOfWords = ["HTML", "CSS", "JavaScript", "PHP", "C++", "MySQL", "React.js", "C", "Git", "AWS", "RestAPIs"];


export default function Home() {
  return (
      <>
        <header id="heroHeader" className="relative h-screen overflow-hidden">

          <div className="relative flex items-center justify-center h-full w-full" id="welcome">


            <div className="absolute text-white! text-left top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4">
              <h1 className="text-8xl text-white! mb-2">Hello!,<br/> I am <strong>Sean</strong>!</h1>
              <h2 className="text-3xl text-white! mb-2">A Graduate Computer Scientist, Web Developer, & Problem Solver</h2>
              <p className="text-3xl mb-4">Crafting clean, efficient, and user-focused web experiences.</p>
              <Button size={"xxxl"} asChild>
                <Link href="#about">Learn More</Link>
              </Button>
            </div>

          </div>

        </header>

          <Separator></Separator>
        <main style = {{backgroundColor: '#301168'}}>
          <section id = "about" className = "flex flex-col md:flex-row lg:max-w-2/3 mx-auto items-center gap-8">

              <div className="flex min-w-min min-h-min h-full w-full max-w-2/6 justify-center items-center">
                <Image alt = "Sean's headshot" src="/assets/images/homepage/headshot.jpg" width={400} height={400} className="rounded-lg shadow-lg max-w-full h-auto"/>
              </div>
              <div className="min-w-min min-h-min h-full max-w-3/5 w-full justify-center items-center">
                <h2 className="text-4xl">About Me</h2>
                <p>I'm a studying web developer with a passion for creating simplistic and functional
                  websites. I enjoy tackling complex challenges and turning them into intuitive user
                  experiences.</p>
                <p>When I'm not coding, you can find me watching horror movies, hiking local mountains, or
                  crafting a Dungeons and Dragons Campaign.</p> <br/>
                  <Link href = "/pages/experience" legacyBehavior passHref>
                      <a className={buttonVariants({variant: "default", size: "xxl"})}>View Resume
                          <i className = "fa-solid fa-forward btn-pointer"></i></a>
                  </Link>
              </div>
          </section>



          <section  className=" flex flex-col sm:flex-row justify-center lg:max-w-2/3 max-w-fit min-w-[100%] h-min mx-auto" id = "skills">

            <div className="w-1/3 p-10">
              <h2>Skills</h2>
              <p>I'm a web developer with a passion for creating simplistic and functional
                websites. I enjoy tackling complex challenges and turning them into intuitive user
                experiences. Training at Clemson and Internships prepared me to help you!</p>
            </div>

            <div className="min-w-min min-h-min size-full max-w-1/3">
              <WordCloud listOfWords={listOfWords}/>
            </div>


          </section>



          <section className="flex flex-col min-h-[33vh] text-center justify-center mx-auto" id = "contact">
              <h2 className="text-4xl mx-auto">Contact</h2>
              <p className="text-2xl mt-4">Let&#39;s connect and discuss your next project.</p>

              <ul>
                <li>
                  <a href = "mailto:site@seanslaughter.dev" className={buttonVariants({variant: "default", size: "xxl"})}><i className = "fas fa-envelope"></i> Email
                  </a>
                </li>
                <li>
                  <a href = "https://github.com/stslaug" className={buttonVariants({variant: "default", size: "xxl"})} target = "_blank">
                    <i className = "fab fa-github"></i> GitHub</a>
                </li>
                <li>
                  <Link className={buttonVariants({variant: "default", size: "xxl"})} href = "https://www.linkedin.com/in/stslaug" target = "_blank"><i className = "fab fa-linkedin"></i> LinkedIn</Link>
                </li>
              </ul>

          </section>
        </main>

      </>
  );
}
