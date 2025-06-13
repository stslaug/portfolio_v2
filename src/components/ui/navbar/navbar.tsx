"use client";
import "./navbar.css";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const projects = [
      {
        name: "Card Database",
        to: "/pages/project/Card-Database/card-home.php"
    },
    {
        name: "Most Likely To",
        to: "/pages/project/Project/index.php"
    },
    // { todo: add back in zipcode finder
    //     name: "Zipcode Finder",
    //     to: "/pages/project/zipcode/"
    // },
    {
        name: "Sort Demo",
        to: "/pages/project/Sort/"
    }

]




import Link from "next/link";


function NavBar() {
    return (
        <div id="mynav" className="bg-[#0f0026] w-full flex mx-auto relative">
            <p className="mr-auto !text-white !text-2xl ml-5">Sean Slaughter</p>
            <div className="relative justify-center flex-1 flex justify-end mr-5">
                <NavigationMenu className="w-auto flex relative" viewport={false}>
                    <NavigationMenuList>

                        <NavigationMenuItem>
                            <Link href = "/" className = {navigationMenuTriggerStyle()}>
                                Home
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href = "/pages/experience" legacyBehavior passHref>
                                <NavigationMenuLink className = {navigationMenuTriggerStyle()}>
                                    Experience
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                            <NavigationMenuContent className={"absolute min-w-min"}>
                                {projects.map((project, index) => (
                                    <Link key = {index} href = {project.to} legacyBehavior passHref>
                                        <NavigationMenuLink title = {project.name}>
                                            {project.name}
                                        </NavigationMenuLink>
                                    </Link>

                                ))}

                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}

export {
    NavBar
}