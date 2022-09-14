import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Container, Card, Button, Pagination, Text } from '@nextui-org/react'
import Demigods2 from "../assets/img/91e193233aea91f0acce91d3b497c835.jpeg";
import Nico3 from "../assets/img/93bbf641ef6f6fd882c747ec13f82308.jpeg";
import CampsDemigods from "../assets/img/a29630bc575a82a2bcb4ae0cf9fedffe.png";
import Demigods3 from "../assets/img/eed8f6e01fb9da7127443f57d739a932.jpeg";
import Nico4 from "../assets/img/images.jpeg";
import { motion } from 'framer-motion'
import ModalProjects from './ModalProjects';

var setPage: number;
const images = [Demigods2, Nico3, CampsDemigods, Demigods3, Nico4]

function Carousel() {

  const [selectedIndex, setSelectedIndex] = useState(1)
    const [selectedImage, setSelectedImage] = useState(images[0])

const selectNewImage = (index: number, images: string[], next = true) => {
const condition = next ? selectedIndex < images.length -1: selectedIndex > 0;
const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1
setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
};



    const previous = () => {
      const condition = selectedIndex > 0;
      // const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
      // setSelectedImage(images[nextIndex]);
      // setSelectedIndex(nextIndex);
      selectNewImage(selectedIndex, images, false);
    }

    const next = () => {
      // const condition = selectedIndex < images.length;
      // const nextIndex = condition ? selectedIndex + 1 : 0;
      // setSelectedImage(images[nextIndex]);
      // setSelectedIndex(nextIndex);
      selectNewImage(selectedIndex, images);
    }
    const paginationIndex = selectedIndex + 1

    // const paginationFunc = (paginationIndex: number) => {
    //   (paginationIndex = selectedIndex + 1) ?
    // }


const [page, setPage] = useState(0)

const indexProjects = {
  0:'mengy.io',
  1:'mengy.io',
  2:'mengy.io',
  3:'mengy.io',
  4:'mengy.io',
  5:'mengy.io',
}

    console.log(selectedIndex)
  return (
    <Container
    css={{
      marginTop:'100px',
      marginBottom:'100px'
    }}
    >
        <Card
        style={{
          display:'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Container
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          >
            <Text
            h1
            css={{
              margin:'30px'
            }}
            >Projects</Text>
        <motion.img
        initial={{scale:0.90}}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 170 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
        style={{
          width:'70vh',
          height:'40vh',
          borderRadius: '25px',
          cursor: "pointer"
        }}
          src={selectedImage}
          />
          <Pagination
          loop
          color="secondary"
          onChange={(page) =>{setSelectedImage(images[page - 1])}}
          page={page}
          onlyDots
          shadow
          css={{
            margin:'30px',
          }}
          controls={true}
          total={images.length} size={"md"} />
          <div></div>
          </Container>
          <ModalProjects />
      </Card>
    </Container>
  )
}

export default Carousel