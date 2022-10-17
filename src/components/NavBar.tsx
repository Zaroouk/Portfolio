import React, { useRef, useState } from 'react'
import { Navbar, Button, Spacer, NextUIProvider, Switch, Link } from '@nextui-org/react'
import Logo from '../assets/img/ee4300dd3cd45d21eff38bb9e05a16da.png'
import '../assets/NavBar.css'
import { dark, light } from "./next-themes";
import SunIcon from '../assets/img/sun-svgrepo-com.svg'
import MoonIcon from '../assets/img/night-snow-svgrepo-com.svg'
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

function NavBar() {
  const [mode, setMode] = useState("light");
  const themeToggler = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const techs = useRef(null);
  const landing = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo(
      {
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      }
    )
  }

  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];

  return (
      <NextUIProvider theme={mode === "light" ? dark : light}>

        <Navbar
        className="navbar"
        isBordered
        variant="floating"
        >
        <Navbar.Brand>
          {/* <AcmeLogo /> */}
          <Link><img width='40px'src={Logo}
          onClick={() => scrollToSection(landing)}
          /></Link>
        </Navbar.Brand>
        <Spacer x={15} />
        <Navbar.Content
        // hideIn="xs"
        activeColor={'secondary'}
        variant="underline">
          <Navbar.Link
          // hideIn='xs'
          className='switchy'
          ><Switch
          checked={true}
          size='xl'
          iconOn={<BsMoonStarsFill />}
          iconOff={<BsSunFill />}
          color='secondary'
          onChange={()=>themeToggler()}
          /></Navbar.Link>
        </Navbar.Content>
          <Navbar.Content
          hideIn="sm" variant="underline">
            <Navbar.Link
            className='ContactMe'
            as={Button}
            // onClick={() => scrollToSection(contact)}
            light color="secondary" auto
            href="#">Contact Me</Navbar.Link>
            <Navbar.Link
            className='Projects'
            as={Button}
            onClick={() => scrollToSection(projects)}
            light color="secondary" auto
            isActive href="#">
              Projects
            </Navbar.Link>
            <Navbar.Link
            className='AboutMe'
            as={Button}
            onClick={() => scrollToSection(about)}
            light color="secondary" auto
            href="#">About Me</Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem
          >
              <Link
            className='ContactMe'
            color="inherit"
              css={{
                minWidth: "100%",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            as={Button}
            // onClick={() => scrollToSection(contact)}
            light
            auto
            href="#">Contact Me</Link>
            </Navbar.CollapseItem>

              <Navbar.CollapseItem>
            <Link
            className='Projects'
            as={Button}
            color="inherit"
              css={{
                minWidth: "100%",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            onClick={() => scrollToSection(projects)}
            light
            auto
            href="#">
              Projects
            </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
            <Link
            className='AboutMe'
            as={Button}
            onClick={() => scrollToSection(about)}
            light
            color="inherit"
              css={{
                minWidth: "100%",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}

            auto
            href="#">About Me</Link>

          </Navbar.CollapseItem>
      </Navbar.Collapse>
        <Navbar.Content>
                  <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Content>
      </Navbar>
      </NextUIProvider>
  )
}

export default NavBar