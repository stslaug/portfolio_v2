import type {Metadata} from "next";
import {Noto_Sans, Noto_Sans_Mono} from "next/font/google";
import "./globals.css";
import {NavBar} from "@/components/ui/navbar/navbar";
import {Footer} from "@/components/ui/footer";


const notoSans = Noto_Sans({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio | Sean Slaughter",
    description: "Sean Tyler Slaughter's Portfolio"
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang = "en">
            <head>
                <meta charSet = "utf-8"/>
                <meta content = "width=device-width, initial-scale=1, shrink-to-fit=no" name = "viewport"/>
                <meta content = "ie=edge" httpEquiv = "X-UA-Compatible"/>
                <link crossOrigin = "anonymous" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity = "sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" referrerPolicy = "no-referrer" rel = "stylesheet"/>

            </head>
            <body className = {`${notoSans.variable} ${notoMono.variable} antialiased`}
            >
                <NavBar/>

                <main>  {children} </main>

                <Footer/>
            </body>
            </html>
        </>
    );
}
