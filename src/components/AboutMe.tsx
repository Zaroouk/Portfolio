import { Container, Card, Text, Avatar, Grid } from "@nextui-org/react";
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

function AboutMe() {
  return (
    <div className="About">
      <Container
      css={{
        marginTop: "100px",
    }}
      >
        {/* {props.children} */}
        <Card className="Card-Object">
          <Avatar
            className="avatar"
            src={LeoValdez}
            color="gradient"
            bordered
          />
          <Text h1 className="text-head">
            About Me
          </Text>
          <Text className="text-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </Text>
        </Card>
      </Container>
    </div>
  );
}

export default AboutMe;
