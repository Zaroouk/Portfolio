import React from "react";
import { Container, Text, Card, Input, Textarea } from "@nextui-org/react";
function ContactMe() {
  return (
    <div>
      <Container>
        <Card css={{
            marginBtoom:'25px',
            backgroundColor:'transparent',
            borderRadius:'0'
        }}>
          <Container
            css={{
              display: "flex",
              flexDirection: "column",
            //   alignItems: "flex-end",
            }}
          >
            <Container
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
                  width: "20vw",
                }}
                color="secondary"
                clearable
                bordered
                labelPlaceholder="Name"
              />
              <Input
                css={{
                  marginBottom: "40px",
                  width: "20vw",
                }}
                color="secondary"
                clearable
                bordered
                labelPlaceholder="Email"
              />
              <Input
                css={{
                  marginBottom: "20px",
                  width: "20vw",
                }}
                color="secondary"
                clearable
                bordered
                labelPlaceholder="Subject"
              />
              <Textarea
                css={{
                  marginBottom: "40px",
                  width: "20vw",
                }}
                color="secondary"
                helperText="The body of your inquiry"
                helperColor="secondary"
                placeholder="Your Amazing Message"
                bordered
              />
            </Container>
            <Card
        css={{
            width:'50%',
            height:'100%',
            borderRadius:'0',
            backgroundColor:'white',
            position:'absolute',
            bottom:'0',
            right:'0'
        }}
        children={undefined}
        ></Card>
          </Container>
        </Card>
      </Container>
    </div>
  );
}

export default ContactMe;
