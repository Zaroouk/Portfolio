import { Button } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import AboutMe from "./AboutMe";
import Landing from "./Landing";
import NavBar from "./NavBar";
import Technologies from "./Technologies";
import'../assets/HomePage.css'
import Carousel from "./Carousel";
import ContactMe from "./ContactMe";
import Footer from "./FooterComponent";
import TechnologiesV2 from "./TechnologiesV2";

function HomePage(theme: any) {
  const [type, setTheme] = useState(0);
  // const tech = useRef(null);
  // const about = useRef(null);
  // const home = useRef(null);
  // const projects = useRef(null);

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo(
  //     {top: elementRef.current.offsetTop,
  //     behavior: 'smooth'}
  //   )
  // }
  return (
    <div>
      {/* <ImageSlider slides={SliderData} /> */}
      <NavBar />
        <Landing />
        <AboutMe />
        {/* <Technologies /> */}
        <TechnologiesV2 />
        <Carousel />
        <ContactMe />
    </div>
  );
}

export default HomePage;
