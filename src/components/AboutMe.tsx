import { Container, Card, Text, Avatar, Grid } from '@nextui-org/react'
import React from 'react'
import Nico1 from '../assets/img/2c09b129558a3a98dbfdb6fa07d3a1c7ec45beaf_00.jpeg'
// import Nico2 from '../assets/img/9da003e5af1f109caf34f4ef3db2df8f.jpeg'
import Demigods from '../assets/img/16c9d9969daf28edfed04ae8e53fb222.jpeg'
import LeoValdez from '../assets/img/56ec5c38bdee8a3fd2cf3b9f4e467de5.jpeg'
import Demigods2 from '../assets/img/91e193233aea91f0acce91d3b497c835.jpeg'
import Nico3 from '../assets/img/93bbf641ef6f6fd882c747ec13f82308.jpeg'
import CampsDemigods from '../assets/img/a29630bc575a82a2bcb4ae0cf9fedffe.png'
import Demigods3 from '../assets/img/eed8f6e01fb9da7127443f57d739a932.jpeg'
import Nico4 from '../assets/img/images.jpeg'
import '../assets/AboutMe.css'



function AboutMe() {
    // function AvatarSizes(){
    //     const AvatarSM = {
    //         width:'150px',
    //         height:'150px',

    //         '@xs': {
    //         position:'relative',
    //         top: '55px',
    //         left: '0px',
    //     },
    //         '@sm': {
    //         position:'relative',
    //         top: '60px',
    //         left: '0px',
    //     },
    //         '@md': {
    //         position:'relative',
    //         top: '55px',
    //         left: '0px',
    //     },
    //     }
    // }
    const AvatarXS = {
        '@xs':{
        position:'relative',
        top: '2px',
        left: '20px',
    }
    }

    const AvatarSM = {
        '@sm':{
        position:'relative',
        top: '100px',
        left: '0px',
        marginLeft:'25px'
    }
    }

    const AvatarMD = {
        position:'relative',
        top: '-80px',
        left: '80px',
    }


  return (
    <div>
<Container
    // css={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignContent: 'center',
    // }}
>
    {/* <Grid.Container>
        <Grid
        justify="center"
        xs={8.8} sm={10} md={10} lg={10}
        > */}

    <Card className="Card-Object"
    // css={{

    // }}
    >
    {/* <Grid.Container
    gap={1}
    justify='center'
    >
    <Grid xs={7} sm={12} md={12} lg={12}> */}

        <Avatar className='avatar'
        //   css={
    //         {
    //         width:'150px',
    //         height:'150px',

    //         '@xs': {
    //         position:'relative',
    //         top: '0px',
    //         left: '70px',
    //     },
    //         '@sm': {
    //         position:'relative',
    //         top: '100px',
    //         left: '-15px',
    //         marginLeft: '25px'
    //     },
    //         '@md': {
    //         position:'relative',
    //         top: '70px',
    //         left: '0px',
    //     },
    //     }
    // }
        src={LeoValdez}
          color="gradient"
          bordered
        />
        {/* </Grid> */}
{/* <Grid xs={7} sm={7.5} md={12} lg={12}> */}
    <Text h1 className='text-head'
// css={{
//     '@xs': {
//         position:'relative',
//         top: '25px',
//         left: '65px',
//         // marginLeft:'50px'

//     },
//     '@sm': {
//         position:'relative',
//         top: '-120px',
//         left: '250px',
//     },

//     '@md': {
//         position:'relative',
//         top: '-120px',
//         left: '600px',
//     },
// }}
>About Me</Text>
{/* </Grid> */}
{/* <Grid xs={7} sm={8.5} md={9} lg={9}> */}
<Text
className='text-body'
// css={{
    // position:'relative',
    // left: '-75px',

    //     '@xs': {
    //     position:'relative',
    //     top: '25px',
    //     left: '0px',
    // },
    //     '@sm': {
    //     position:'relative',
    //     top: '-120px',
    //     left: '80px',
    // },

    //     '@md': {
    //     position:'relative',
    //     top: '-120px',
    //     left: '80px',
    // },
// }}
>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.
</Text>
{/* </Grid> */}
{/* </Grid.Container> */}
</Card>
{/* </Grid> */}
{/* </Grid.Container> */}
</Container>

    </div>
  )
}

export default AboutMe