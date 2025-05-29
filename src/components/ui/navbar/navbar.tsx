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
        name: "Audio Demo",
        to: "/pages/project/AudioDemo/"
    },
    {
        name: "Card Database",
        to: "/pages/project/Card-Database/card-home.php"
    },
    {
        name: "Most Likely To",
        to: "/pages/project/Project/index.php"
    },
    {
        name: "Zipcode Finder",
        to: "/pages/group/zipcode/zipcode.html"
    },
    {
        name: "Sort Demo",
        to: "/pages/solo/Sort/sort.html"
    }

]




import Link from "next/link";


function NavBar() {
    return (
        <div id = "mynav" className = "bg-[#14003d] w-full flex mx-auto  relative">
            <p className = "mr-auto !text-white !text-2xl ml-5">Sean Slaughter</p>
            <div className = "relative justify-center">
                <NavigationMenu className = "w-full flex relative" viewport = {false}>
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
                            <NavigationMenuContent>
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