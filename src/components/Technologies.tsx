import React from 'react'
import { Container, Card, Text, Progress, Grid } from '@nextui-org/react'
import { ImHtmlFive2 } from 'react-icons/Im'
import { SiCss3, SiReact, SiJavascript, SiPython, SiDjango, SiTypescript, SiNextdotjs, SiJava, SiVite } from 'react-icons/Si'

function Technologies() {
  return (
    <Container className="Techs"
    css={{marginTop:'100px'}}
    >
        {/* <Card
        css={{marginTop:'100px'}}
        > */}
            {/* sidenote:
            **use a grid to stylish the card component
            **make sure it is responsive
            */}
            <Grid.Container
            gap={4}
            justify="flex-start"
            css={{
                margin:'5px'
            }}
            >
                <Grid xs={10} sm={5.5}
                md={3.7}
                lg={5.5}>
            <Text
            css={{
                marginRight: '15px',
            }}
            >
                {/* TS */}
                <SiTypescript />
            </Text>
            <Progress shadow color='secondary' value={65} />
            </Grid>
            <Grid xs={10} sm={5.5}
            md={3.7}
            lg={5.5}>
            <Text
            css={{
                marginRight: '15px',
            }}
            >
                {/* JS */}
                <SiJavascript />
            </Text>
            <Progress shadow color='secondary' value={75} />
            </Grid>
            <Grid xs={10} sm={5.5}
            md={3.7}
            lg={5.5}>
            <Text
            css={{
                marginRight: '15px',
            }}
            >
                {/* HTML5 */}
                <ImHtmlFive2 />
            </Text>
            <Progress shadow color='secondary' value={70} />
            </Grid>
            <Grid xs={10} sm={5.5}
            md={3.7}
            lg={5.5}>
            <Text
            css={{
                marginRight: '15px',
            }}
            >
                {/* CSS */}
                <SiCss3 />
            </Text>
            <Progress shadow color='secondary' value={75} />
            </Grid>
            <Grid xs={10} sm={5.5}
            md={3.7}
            lg={5.5}>
            <Text
            css={{
                marginRight: '15px',
            }}
            >
                {/* Python */}
                <SiPython />
            </Text>
            <Progress shadow color='secondary' value={69} />
            </Grid>
            <Grid xs={10} sm={5.5}
            md={3.7}
            lg={5.5}>
            <Text
            css={{
                marginRight: '15px',
            }}
            >
                {/* Django */}
                <SiDjango />
            </Text>
            <Progress shadow color='secondary' value={75} />
            </Grid>
            <Grid xs={10} sm={5.5}
            md={3.7}
            lg={5.5}>
            <Text
            css={{
                marginRight: '15px',
            }}
            >
                {/* Java */}
                <SiJava />
            </Text>
            <Progress shadow color='secondary' value={60} />
            </Grid>
            <Grid xs={10} sm={5.5}
            md={3.7}
            lg={5.5}>
            <Text
            css={{
                marginRight: '15px',
            }}
            >
                {/* React */}
                <SiReact />
            </Text>
            <Progress shadow color='secondary' value={75} />
            </Grid>
            <Grid xs={10} sm={5.5}
            md={3.7}
            lg={5.5}>
            <Text
            css={{
                marginRight: '15px',
            }}
            >
                {/* Nextjs */}
                <SiNextdotjs />
            </Text>
            <Progress
            // indeterminated
            status='secondary'shadow color='secondary' value={30} />
            </Grid>
            <Grid xs={10} sm={5.5}
            md={3.7}
            lg={5.5}>
            <Text
            css={{
                marginRight: '15px',
            }}
            >
                {/* Vite */}
                <SiVite />
            </Text>
            <Progress shadow color='secondary' value={75} />
            </Grid>
            </Grid.Container>
        {/* </Card> */}
    </Container>
  )
}

export default Technologies