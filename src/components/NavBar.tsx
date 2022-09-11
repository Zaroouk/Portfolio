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
  const projects = useRef(null)
  const contactMe = useRef(null)

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
        // secondary
        >
        <Navbar.Brand>
          {/* <AcmeLogo /> */}
          <img width='40px'src={Logo}/>



{/* onClick={()=>themeToggler()} */}

        </Navbar.Brand>
        <Spacer x={15} />
        <Navbar.Content
        hideIn="xs"
        activeColor={'secondary'}
        variant="underline">

          {/* <Button
          onClick={()=>themeToggler()}
          auto
          color="secondary"
          rounded
          // bordered
          flat
          >Dark</Button> */}
          <Navbar.Link
          hideIn='sm'
          className='switchy'
          ><Switch
          checked={true}
          size='xl'
          iconOn={<BsSunFill />}
          iconOff={<BsMoonStarsFill />}
          color='secondary'
          onChange={()=>themeToggler()}
          /></Navbar.Link>

          {/* <Navbar.Link hideIn='sm' href="#">About Me</Navbar.Link>
          <Navbar.Link isActive hideIn='sm' href="#">Projects</Navbar.Link>
          <Navbar.Link hideIn='sm' href="#">Contact Me</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link> */}

        </Navbar.Content>
          <Navbar.Content
          // enableCursorHighlight
          hideIn="xs" variant="underline">
            <Navbar.Link
            className='ContactMe'
            as={Button}
            light color="secondary" auto
            href="#">Contact Me</Navbar.Link>
            <Navbar.Link
            className='Projects'
            as={Button}
            light color="secondary" auto
            isActive href="#">
              Projects
            </Navbar.Link>
            <Navbar.Link
            className='AboutMe'
            as={Button}
            light color="secondary" auto
            href="#">About Me</Navbar.Link>
            {/* <Navbar.Link
            className='Company'
            href="#">Company</Navbar.Link> */}
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
        <Navbar.Content>
          {/* <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link> */}
          {/* <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item> */}
                  <Navbar.Toggle aria-label="toggle navigation" />

        </Navbar.Content>
      </Navbar>
      </NextUIProvider>
  )
}

export default NavBar