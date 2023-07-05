import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";


const Tagline = () => {
    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-center text-center 
        bg-earth bg-cover 
        ">
            <div className="flex flex-col min-h-screen w-full items-center justify-center text-center 
         bg-gradient-to-b from-[#101218f8] to-[#191722e3]
        ">
                <div className="container flex flex-col items-center justify-center gap-10 px-10 py-10 bg-opacity-100">
                    <h1 className="text-7xl font-bold tracking-tight 
                    text-transparent bg-clip-text bg-gradient-to-br from-[#89ffebe3] to-[#c486ffde]
                    pl-10 pr-10 mt-14 pb-1
                    ">
                        Thing
                    </h1>

                </div>
            </div>
        </div >
    )
};

const Footer = () => {
    return (
        <footer className="  items-center text-center place-content-center  w-screen 
            bg-gradient-to-b from-[#eff1f3] to-[#ffffff] border-t border-slate-600 ">
            <div className="flex flex-col items-center justify-center sm:h-20 text-2xl
                bg-opacity-100 text-slate-800 font-normal ">
                © Company 2023
                <span className="text-lg font-light text-slate-900">
                    info@company.com
                </span>
            </div>
        </footer>
    )
}


const Header = () => {

    return (
        <>
            <div className="grid grid-cols-1 place-items-center">
                <header className="absolute top-0 max-w-[1400px] w-full md:px-5 lg:px-10  px-10 py-4 pt-0 ">
                    <nav className="flex justify-between items-center h-[90px]">
                        <div className="inline-block align-middle font-light md:text-5xl text-4xl md:px-7 px-2 pb-1">
                            <button className="text-transparent bg-clip-text bg-gradient-to-br from-[#9fddce] to-[#998ed6d0] cursor-pointer pb-1" >
                                Company
                            </button>
                        </div>
                    </nav>

                </header >

            </div>

        </>

    );
};

const AboutSection = () => {
    return (
        <>
            <div id="about" className="flex-col m-0 p-0 w-screen justify-center items-center left-0 right-0">
                <div className="flex w-full items-center justify-center place-content-center">
                    <div className="flex flex-col gap-10 text-5xl text-slate-100 font-bold items-center justify-center 
                         w-full bg-slate-100">
                        <div className="py-5 my-5"> </div>
                        <div className="flex text-slate-700">
                            About
                        </div>
                        <div className="flex text-slate-700 text-lg font-normal">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className="py-5 my-5"> </div>
                    </div>
                </div>
            </div >
        </>
    )
}

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Thing</title>
                <meta name="description" content="dscription goes here" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col ">
                <Header />
                <Tagline />
                <AboutSection />
            </main >
            <Footer />
        </>
    );
};

export default Home;
