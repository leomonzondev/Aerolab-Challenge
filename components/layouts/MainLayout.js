import Head from "next/head";
import Image from "next/image";


import header from '../../assets/header-x2.png'

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";



export const MainLayout = ({ children, title, pageDescription, imageFullUrl }) => {
    
    
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={ pageDescription } />

                <meta name="og:title" content={ title } />
                <meta name="og:description" content={ pageDescription } />

                {
                    imageFullUrl && (
                        <meta name="og:image" content={ imageFullUrl } />
                    )
                }

            </Head>

            <div className="w-fullh-56 md:h-[500px] h-48 ">
                <div className="overflow-hidden md: md:mx-10 h-full bg-[url('../assets/header-x2.png')] bg-right md:bg-center bg-cover bg-no-repeat flex items-end">
             
                <h1 className=" md:pl-32 pl-3 md:pb-24 text-white text-6xl md:text-8xl font-bold">Electronics</h1>
                </div>

                
            </div>


            <main className="md:my-[80px] md:mx-auto max-w-[1440px] py-0 md:px-8">
                { children }
            </main>

            <footer>
                <Footer />
            </footer>


        </>
    )
}