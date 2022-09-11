import { Container, Text } from "@nextui-org/react";
import React from "react";
// import '../assets/Landing.css'

function Landing() {
  return (
    <div className="Landing">
      <Container

      ><Text
        h1
        size={120}
        css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%",
        width: "100%",
        display: "flex",
        justifyItems: "flex-start",
     }}
        weight="bold"
      >
        Hello World!
      </Text>
      <Text
        h1
        size={120}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
          width: "100%",
          display: "flex",
          justifyItems: "flex-start",
        }}
        weight="bold"
      >
        I'm Emanuel.
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
          width: "100%",
          display: "flex",
          justifyItems: "flex-start",
        }}
        weight="bold"
      >
        I'm a Software Engineer
      </Text></Container>
    </div>
  );
}

export default Landing;
