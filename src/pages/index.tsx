import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const showThreshold = 0.75;

const Tagline = () => {
  const componentRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isInFullView, setIsInFullView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, intersectionRatio } = entry;
          if (isIntersecting) {
            if (intersectionRatio > 0.9) {
              setIsInView(true);
            }
            else {
              setIsInView(false);
            }
          } else {
            setIsInView(false);
          }
          if (intersectionRatio > 0.9) {
            setIsInFullView(true);
          }
          else {
            setIsInFullView(false);
          }
        });
      },
      { threshold: [0.01, 0.1, showThreshold, 0.9, 0.99] } // Define the percentage of visibility required to trigger the callback
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <>
      {isInView &&
        <HeaderDynamic sectionname="Home" />
      }
      {isInFullView &&
        <MobileHeader />
      }
      <div ref={componentRef} id="tagline" className="flex flex-col min-h-screen w-full items-center justify-center text-center 
      bg-waves5 bg-cover bg-center 
        ">
        <div className="flex flex-col min-h-screen w-full items-center justify-center text-center 
         bg-gradient-to-b from-[#191c23e7] to-[#222031c7]  
        ">
          <div className="container flex flex-col items-center justify-center gap-10 px-10 pt-10 bg-opacity-100">
            <h1 className="text-7xl font-bold tracking-tight 
            text-transparent bg-clip-text bg-gradient-to-br from-tag11 to-tag22
            md:px-10 px-2
            ">
              <div className="pb-1">Tagline</div>
            </h1>
            <div className="flex ">
              <Link href="/"
                className="flex w-64 pl-0 pr-4 pt-3 pb-3 mt-3 mb-3
                text-indigo-200 bg-indigo-800 bg-opacity-80
                hover:bg-opacity-100 hover:text-slate-100
                text-3xl font-semibold
                rounded-full tracking-wide 
                text-center justify-center align-middle
                shadow-lg shadow-[#0a112498] 
                ">
                Let&apos;s Chat!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  )
};

const CustomSaaS = () => {
  return (
    <div className="flex text-5xl text-slate-100 font-bold items-center justify-center w-full
            my-10 lg:my-0 
            ">
      <div className="max-w-[800px] container flex flex-col items-center justify-center gap-0 pt-10 pb-4 
            bg-gradient-to-br from-[#f0f3f8] to-[#cfd4e717] p-10 rounded-xl shadow-xl shadow-zinc-400 
            md:mx-10 md:px-10 sm:mx-8 sm:px-8 px-3 mx-3
            ">
        <h1 className=" text-3xl font-bold tracking-tight 
            text-slate-700
             px-4 py-0
            ">
          Title
        </h1>
        <p className=" text-xl my-4 pt-3 text-slate-700  p-5 pb-1 font-medium text-justify ">
          About text goes here.
          To learn more, <a href="mailto:info@pytheia.com" className="text-blue-800 underline" >email us</a> or book a free consultation below.
        </p>
        <div className="">
          <button onClick={() => window.open("/", "_blank")}
            className="bg-pink-900 hover:bg-pink-800  bg-opacity-70 hover:bg-opacity-80 hover:white
                text-xl
                text-slate-100 font-bold py-2 px-5 rounded-full shadow-sm
                mb-5 mt-2">
            Set Up a Call
          </button>
        </div>
      </div>
      <div className="grid lg:m-10 lg:bg-computer lg:bg-cover lg:w-[400px] lg:h-[500px] rounded-lg 
          shadow-lg shadow-zinc-400 place-content-center">
      </div>
    </div>
  )
}

const AboutSection = () => {
  const componentRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: showThreshold } // Define the percentage of visibility required to trigger the callback
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <>
      {isInView &&
        <HeaderDynamic sectionname="About" />
      }
      <div ref={componentRef} id="about" className="flex-col m-0 p-0 min-h-screen w-screen justify-center items-center 
       left-0 right-0
       ">
        <div className="flex 
        bg-cover bg-center bg-waves4
        min-h-screen w-full items-center justify-center place-content-center">
          <div className="flex flex-col gap-10 text-5xl text-slate-100 font-bold items-center justify-center mt-0 pt-0 
          min-h-screen w-full
          bg-gradient-to-b from-[#e2e8f0f3] to-[#ebddf7ea]">
            <div className="flex text-slate-700 sm:mt-0 mt-10 visible sm:invisible">
              About
            </div>
            <CustomSaaS />
            <div className="py-3 my-3"> </div>
          </div>
        </div>
      </div >
    </>
  )
}

const Carousel = () => {
  const slides = [
    {
      url: "/quad.png",
      product: "Project 1",
      title: "Subtitle 1",
      text: "blurb 1",
      buttonText: "See a Demo",
      buttonLink: "/",
    },
    {
      url: "/math.png",
      product: "Project 2",
      title: "Subtitle 2",
      text: "blurb2.",
      buttonText: "Learn More",
      buttonLink: "/"
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="max-w-[1400px] sm:h-[800px] md:h-[600px] h-[1000px] m-auto md:py-16 py-5 px-0 relative w-full group bg-slate-400 bg-opacity-0 mb-5">
      <div className="md:flex w-full py-0 md:py-10 md:px-[80px] sm:px-[30px] px-[10px] h-full bg-red-800 bg-opacity-0">
        <div className="grid grid-cols-1 md:w-1/2 h-1/2 md:h-full bg-green-600 bg-opacity-0 content-center">
          <div className="w-full items-center">
            <p className=" py-0 px-3 md:px-4 lg:px-10 my-2 text-center align-center w-full bg-indigo-400 
            lg:text-4xl md:text-3xl text-4xl bg-opacity-0 font-semibold
            text-transparent bg-clip-text bg-gradient-to-br from-sky-100 to-rose-50 pb-1">
              {slides[currentIndex]?.product}
            </p>
            <p className=" py-0 px-0 md:px-0 lg:px-0 my-1 text-center align-center w-full bg-indigo-400 
            lg:text-2xl md:text-xl text-2xl font-medium bg-opacity-0 
            text-transparent bg-clip-text bg-gradient-to-br from-sky-100 to-rose-100 italic pb-1">
              {slides[currentIndex]?.title}
            </p>
            <p className=" pb-3 pt-1 px-3 md:px-4 lg:px-10 text-justify align-center w-full bg-cyan-400  bg-opacity-0
            font-normal md:text-sm lg:text-lg text-md text-fuchia-50
            text-transparent bg-clip-text bg-gradient-to-br from-sky-50 to-fuchsia-100">
              {slides[currentIndex]?.text}
            </p>
            <div className="p-3 text-center">
              {slides[currentIndex]?.buttonText &&
                <button onClick={() => window.open(slides[currentIndex]?.buttonLink, "_blank")}
                  className="bg-zinc-700 hover:bg-zinc-700 bg-opacity-50 hover:bg-opacity-80 hover:text-slate-100
                text-slate-200 font-bold py-2 px-4 rounded-full shadow-sm">
                  {slides[currentIndex]?.buttonText}
                </button>
              }
            </div>
          </div>

        </div>
        <div className="flex md:w-1/2 w-full h-1/2 md:h-full place-content-center bg-emerald-200 bg-opacity-0
        md:mt-0 mt-8 md:pb-0 pb-10">

          <div className="flex md:w-[93%] w-full h-full  rounded-2xl bg-center bg-cover opacity-95 duration-500 shadow-xl shadow-slate-700"
            style={{ backgroundImage: `url(${slides[currentIndex]?.url || ''})` }} >
          </div >
        </div>
      </div>
      <div className=" group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 
      bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      <div className=" group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 
      bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center py-2 pt-6">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div >
  )
}

const PortfolioSection = () => {
  const componentRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isInFullView, setIsInFullView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, intersectionRatio } = entry;
          if (isIntersecting) {
            if (intersectionRatio > 0.8) {
              setIsInView(true);
            }
            else {
              setIsInView(false);
            }
          } else {
            setIsInView(false);
          }
          if (intersectionRatio > 0.8) {
            setIsInFullView(true);
          }
          else {
            setIsInFullView(false);
          }
        });
      },
      { threshold: [showThreshold, 0.9, 0.99] } // Define the percentage of visibility required to trigger the callback
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <>
      {isInView &&
        <div className="flex justify-center items-center">
          <HeaderDynamic sectionname="Solutions" />
        </div>

      }
      <div ref={componentRef} id="solutions" className="flex-col m-0 p-0 min-h-screen justify-center items-center 
       left-0 right-0 
       bg-gradient-to-b from-[#191c23] to-[#0c0d11]">
        <div className="bg-cover bg-center bg-spacex min-h-screen w-full items-center justify-center place-content-center">
          <div className="flex flex-col text-5xl text-slate-100 font-bold items-center justify-center
           mt-0 pt-14 min-h-screen h-full
          bg-slate-800 bg-opacity-60 w-full">
            <div className="visible sm:invisible sm:pt-0 pt-10">
              Solutions
            </div>
            <div className="flex pt-2 text-xl w-full bg-slate-100 bg-opacity-0 md:mb-10 mb-12  md:pb-0 pb-10">
              <Carousel />
            </div>
            <div className="sm:h-[60px] h-[0px]"></div>
            {isInFullView &&
              <Footer />
            }
          </div>

        </div>

      </div >

    </>
  )
}

const Footer = () => {
  return (
    <footer className="flex absolute right-0 left-0 bottom-0 items-center text-center place-content-center  w-screen 
    bg-gradient-to-b from-[#233b4b] to-headerBgEnd border-t border-slate-600 invisible sm:visible">
      <div className="flex flex-col items-center justify-center sm:h-20 text-2xl
              bg-opacity-100 text-slate-300 font-normal ">
        © Company 2023  <span className="text-lg font-light text-slate-400">info@company.com</span>
      </div>
    </footer>
  )
}

const MobileFooter = () => {
  return (
    <footer className="flex right-0 left-0 bottom-0 items-center text-center place-content-center  w-screen 
    bg-gradient-to-b from-[#233b4b] to-headerBgEnd border-t border-slate-600 visible sm:invisible">
      <div className="flex flex-col items-center justify-center sm:h-0 h-20 text-2xl
              bg-opacity-100 text-slate-300 font-normal ">
        © Pytheia 2023  <span className="text-lg font-light text-slate-400">info@pytheia.com</span>
      </div>
    </footer>
  )
}

type HeaderProps = {
  sectionname: string;
};


const HeaderDynamic = (props: HeaderProps) => {

  const headerClass = "absolute top-0 max-w-[1400px] w-full md:px-5 lg:px-10  px-10 py-4 pt-0 sm:visible invisible";
  const navClass = "flex justify-between items-center h-[90px] bg-slate-200 bg-opacity-0";
  const navLeft = "inline-block align-middle font-light md:text-5xl text-4xl md:px-7 px-2 pb-1";
  const navUl = "flex space-x-6 md:gap-3 lg:gap-5 gap-2 md:pr-12 pr-4 md:text-2xl text-lg  ";

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={headerClass}>
        {(props.sectionname === "Home") &&
          <nav className={navClass}>
            <div className={navLeft}>
              <button className="text-transparent bg-clip-text bg-gradient-to-br from-[#9fddce] to-[#998ed6d0] cursor-pointer pb-1" onClick={() => scrollToSection('tagline')}>
                Company
              </button>
            </div>
            <div className="ml-auto text-[#8393ac]  pb-1">
              <ul className={navUl}>
                <li>
                  <button className="font-bold text-navBarHoverTag cursor-pointer" onClick={() => scrollToSection('tagline')}>
                    Home
                  </button>
                </li>
                <li>
                  <button className="cursor-pointer hover:text-navBarHoverTag " onClick={() => scrollToSection('about')}>
                    About
                  </button>
                </li>
                <li>
                  <button className="cursor-pointer hover:text-navBarHoverTag" onClick={() => scrollToSection('solutions')}>
                    Solutions
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        }
        {(props.sectionname === "About") &&
          <nav className={navClass}>
            <div className={navLeft}>
              <button className="text-transparent bg-clip-text bg-gradient-to-br from-[#862d5b] to-[#5c4fa8d0] cursor-pointer  pb-1" onClick={() => scrollToSection('tagline')}>
                Company
              </button>
            </div>
            <div className="ml-auto text-[#5f5969]  pb-1">
              <ul className={navUl}>
                <li>
                  <button className=" cursor-pointer hover:text-navBarHoverAbout" onClick={() => scrollToSection('tagline')}>
                    Home
                  </button>
                </li>
                <li>
                  <button className="cursor-pointer text-[#3e3946] font-bold" onClick={() => scrollToSection('about')}>
                    About
                  </button>
                </li>
                <li>
                  <button className="cursor-pointer hover:text-navBarHoverAbout" onClick={() => scrollToSection('solutions')}>
                    Solutions
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        }
        {(props.sectionname === "Solutions") &&
          <nav className={navClass}>
            <div className={navLeft}>
              <button className="text-transparent bg-clip-text bg-gradient-to-br from-[#e7c4b3] to-[#c0bcf3e3] cursor-pointer pb-1" onClick={() => scrollToSection('tagline')}>
                Company
              </button>
            </div>
            <div className="ml-auto text-[#9fa8b6]  pb-1">
              <ul className={navUl}>
                <li>
                  <button className="hover:text-navBarHoverSolutions cursor-pointer" onClick={() => scrollToSection('tagline')}>
                    Home
                  </button>
                </li>
                <li>
                  <button className="hover:text-navBarHoverSolutions cursor-pointer " onClick={() => scrollToSection('about')}>
                    About
                  </button>
                </li>
                <li>
                  <button className="cursor-pointer  font-bold text-[#c3cedf] " onClick={() => scrollToSection('solutions')}>
                    Solutions
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        }
      </header >
    </>

  );
};

const MobileHeader = () => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navClass = "flex justify-between items-center h-[90px]";
  const navLeft = "inline-block align-middle font-light text-5xl  px-2 pb-1";

  return (
    <header className="absolute top-0 w-full px-2  pt-0 bg-opacity-60 sm:invisible visible ">
      <nav className={navClass}>
        <div className={navLeft}>
          <button className="text-transparent bg-clip-text bg-gradient-to-br from-[#9fddce] to-[#998ed6d0] cursor-pointer pb-1" onClick={() => scrollToSection('tagline')}>
            Company
          </button>
        </div>
      </nav>
    </header >
  )
};



const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Company</title>
        <meta name="description" content="Description of company here" />
        <link rel="icon" href="/favicon.ico" />
      </Head >

      <main className="sm:snap-y  sm:snap-mandatory w-screen h-screen overflow-auto overflow-x-hidden">

        <div className="snap-start w-screen flex items-center justify-center  text-5xl">
          <Tagline />
        </div>
        <div className="h-[50px] bg-gradient-to-b from-headerBgEnd to-aboutBgStart mb-[0px] m-0 p-0"></div>
        <div className="snap-start  w-screen flex items-center justify-center text-5xl">
          <AboutSection />
        </div>
        <div className="h-[50px] bg-gradient-to-b from-aboutBgEnd to-[#144a67] mb-[0px] m-0 p-0 "></div>
        <div className="snap-start w-screen flex-col items-center justify-center text-center text-5xl">
          <PortfolioSection />
          <MobileFooter />
        </div>
      </main >
    </>
  );
};

export default Home;
