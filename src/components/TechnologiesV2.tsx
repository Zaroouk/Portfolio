import React from 'react'
import { Container, Card, Text, Progress, Grid, Row, Avatar, Image } from '@nextui-org/react'
import { ImHtmlFive2 } from 'react-icons/Im'
// import { SiCss3, SiReact, SiJavascript, SiPython, SiDjango, SiTypescript, SiNextdotjs, SiJava, SiVite } from 'react-icons/Si'
import JSLogo from '../assets/svg-only/javascript-js-seeklogo.com.svg'
import BootSrapLogo from '../assets/svg-only/bootstrap-5-seeklogo.com.svg'
import CSSLogo from '../assets/svg-only/css-3-seeklogo.com.svg'
import DjangoLogo from '../assets/svg-only/django-seeklogo.com 2.svg'
import DjangoLogo2 from '../assets/svg-only/django-seeklogo.com.svg'
import FALogo from '../assets/svg-only/fastapi-seeklogo.com.svg'
import GinLogo from '../assets/svg-only/gin-seeklogo.com.svg'
import HTML5Logo from '../assets/svg-only/html5-without-wordmark-color.svg'
import NextLogo from '../assets/svg-only/next-js-seeklogo.com 2.svg'
import Next2Logo from '../assets/svg-only/next-js-seeklogo.com.svg'
import PyLogo from '../assets/svg-only/python-seeklogo.com.svg'
import ReactLogo from '../assets/svg-only/react-seeklogo.com.svg'
import SpringLogo from '../assets/svg-only/spring-seeklogo.com.svg'
import TWLogo from '../assets/svg-only/tailwind-css-seeklogo.com.svg'
import TSLogo from '../assets/svg-only/typescript-seeklogo.com.svg'
import ViteLogo from '../assets/svg-only/vite-seeklogo.com.svg'


function TechnologiesV2() {
    const techs = [
        {
          title: "JavaScript",
          img: JSLogo,
          price: "$5.50",
        },
        {
          title: "BootStrap",
          img: BootSrapLogo,
          price: "$3.00",
        },
        {
          title: "CSS",
          img: CSSLogo,
          price: "$10.00",
        },
        // {
        //   title: "Django",
        //   img: DjangoLogo,
        //   price: "$5.30",
        // },
        // {
        //   title: "Django",
        //   img: DjangoLogo2,
        //   price: "$15.70",
        // },
        {
          title: "Fast API",
          img: FALogo,
          price: "$8.00",
        },
        {
          title: "HTML5",
          img: HTML5Logo,
          price: "$12.20",
        },
          {
            title: "Python",
            img: PyLogo,
            price: "$12.20",
          },
          {
            title: "React",
            img: ReactLogo,
            price: "$12.20",
          },
          {
            title: "Tailwind",
            img: TWLogo,
            price: "$12.20",
          },
          {
            title: "TypeScript",
            img: TSLogo,
            price: "$12.20",
          },
          {
            title: "Vite",
            img: ViteLogo,
            price: "$12.20",
          },
      ];
  return (

    <div>
        <Container className="Techs"
    css={{marginTop:'100px'}}
    >
            <Grid.Container gap={2} justify="flex-start">
      {techs.map((item, index) => (
        <Grid xs={12} sm={4} md={4} lg={3} xl={4} key={index}>
          <Row wrap='wrap' justify="center"><Card
          css={{maxW:'25vw',
                maxH:'100vh'
        }}
          isPressable>
            <Card.Body css={{
                p: 0, backgroundColor:'#F6F4F3' }}>
        <img alt={item.title} src={item.img}
        style={{
            maxWidth:'25vw',
            maxHeight:'25vh',
            padding:'25px'
        }}
        />
            </Card.Body>
            <Card.Footer
            css={{
                justifyItems: "flex-start",
                background:'transparent'
         }}>
              <Row wrap="wrap"
              justify="center"
              align="center">
                <Text b>{item.title}</Text>
              </Row>
            </Card.Footer>
          </Card>
          </Row>
        </Grid>
      ))}
    </Grid.Container>
    </Container>
    </div>
  )
}

export default TechnologiesV2