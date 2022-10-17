import { Container, Card, Text, Avatar, Grid, Row } from "@nextui-org/react";
import React from "react";
import Nico1 from "../assets/img/2c09b129558a3a98dbfdb6fa07d3a1c7ec45beaf_00.jpeg";
// import Nico2 from '../assets/img/9da003e5af1f109caf34f4ef3db2df8f.jpeg'
import Demigods from "../assets/img/16c9d9969daf28edfed04ae8e53fb222.jpeg";
import LeoValdez from "../assets/img/56ec5c38bdee8a3fd2cf3b9f4e467de5.jpeg";
import Demigods2 from "../assets/img/91e193233aea91f0acce91d3b497c835.jpeg";
import Nico3 from "../assets/img/93bbf641ef6f6fd882c747ec13f82308.jpeg";
import CampsDemigods from "../assets/img/a29630bc575a82a2bcb4ae0cf9fedffe.png";
import Demigods3 from "../assets/img/eed8f6e01fb9da7127443f57d739a932.jpeg";
import Nico4 from "../assets/img/images.jpeg";
import "../assets/AboutMe.css";

function AboutMe(){
  return(
<div className="About">
      <Container
      css={{
        marginTop: "100px",
    }}
      >
        <Card className="Card-Object">
          <Grid.Container>
            <Grid xs={12} sm={12} md={3} lg={3} xl={4} justify="center" css={{margin:'25px'}}>
          <Avatar
            className="avatar"
            src={LeoValdez}
            color="gradient"
            bordered
            css={{size:'200px'}}
          /></Grid><Grid xs={12} sm={12} md={8} lg={8} xl={4}>
          <Row wrap='wrap' justify="center" css={{margin:'25px'}}>
          <Text h1 className="text-head">
            About Me
          </Text>
          <Text
          css={{mb:'30px'}}
          className="text-body">
            Yelloow! Let me tell you a little about myself. I am a Computer Science student and ready to take a great challenge.
            There is more out there than just waiting, once a wise man said: "You don't know you are regreting something if you haven't tried it yet?"
            so, with this being said, When are We starting?
          </Text>
          </Row>
          </Grid>
          </Grid.Container>
        </Card>
      </Container>
    </div>
  );
}

export default AboutMe;
