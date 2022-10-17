import React from "react";
import {
  Container,
  Text,
  Card,
  Input,
  Textarea,
  Image,
  Grid,
} from "@nextui-org/react";
import Calipso from "../assets/img/Calipso from Percy Jackson nad the Olympians __ Rick Riordan’s official art by Viria.jpeg";

function ContactMe() {
  return (
    <Container>
      <Card css={{ marginBottom: "100px", padding:0 }}>
        <Grid.Container>
          <Grid
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          >
        <Container
          className="form"
          css={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: "45px",
            marginLeft: "50px",
            flexDirection: "column",
          }}
        >
          <Text h2>Contact Me</Text>
          <Input
            css={{
              marginTop: "20px",
              marginBottom: "40px",
              width: "90%",
            }}
            color="secondary"
            clearable
            bordered
            labelPlaceholder="Name"
          />
          <Input
            css={{
              marginBottom: "40px",
              width: "90%",
            }}
            color="secondary"
            clearable
            bordered
            labelPlaceholder="Email"
          />
          <Input
            css={{
              marginBottom: "20px",
              width: "90%",
            }}
            color="secondary"
            clearable
            bordered
            labelPlaceholder="Subject"
          />
          <Textarea
            css={{
              marginBottom: "40px",
              width: "90%",
            }}
            color="secondary"
            helperText="The body of your inquiry"
            helperColor="secondary"
            placeholder="Your Amazing Message"
            bordered
          />
        </Container>
        </Grid>
        <Grid
        xs={12}
        sm={6}
        md={6}
        lg={6}
        xl={6}
        >
          <Image
            objectFit="contain"
            css={{
              maxH: "100%",
              maxW:'100%',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            src="https://64.media.tumblr.com/71cbab475904a919b5366d05cc9a3f83/tumblr_pm726pmTnv1tlz5d5_1280.jpg"
          />
        </Grid>
        </Grid.Container>
      </Card>
    </Container>
  );
}

export default ContactMe;
