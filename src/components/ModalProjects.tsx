import React, { useState } from "react";
import {
  Modal,
  useModal,
  Button,
  Text,
  Container,
  Pagination,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import Demigods2 from "../assets/img/91e193233aea91f0acce91d3b497c835.jpeg";
import Nico3 from "../assets/img/93bbf641ef6f6fd882c747ec13f82308.jpeg";
import CampsDemigods from "../assets/img/a29630bc575a82a2bcb4ae0cf9fedffe.png";
import Demigods3 from "../assets/img/eed8f6e01fb9da7127443f57d739a932.jpeg";
import Nico4 from "../assets/img/images.jpeg";

function ModalProjects() {
  const { setVisible, bindings } = useModal();

  const projects = [
    "Olympians Api",
    "Olympians Camps (Social Network)",
    "Quick Dev Chat",
    "Project Managment",
    "Wordle (with english vocabulary API)",
  ];

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedProjects, setSelectedProjects] = useState(projects[0]);

  const selectNewProjects = (
    index: number,
    projects: string[],
    next = true
  ) => {
    const condition = next
      ? selectedIndex < projects.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : projects.length - 1;
    setSelectedProjects(projects[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    const condition = selectedIndex > 0;
    selectNewProjects(selectedIndex, projects, false);
  };

  const next = () => {
    selectNewProjects(selectedIndex, projects);
  };

  const [page, setPage] = useState(0);

  // here is the image mapping

  const images = [Demigods2, Nico3, CampsDemigods, Demigods3, Nico4];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index: number, images: string[], next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  return (
    <div
      className="Modal"
      style={{
        marginBottom: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button auto shadow color="secondary" onClick={() => setVisible(true)}>
        Preview
      </Button>

      <Modal
      css={{
        background: 'rgba( 255, 255, 255, 0.3 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 9.5px )',
        // -webkit-backdrop-filter: blur( 9.5px );
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
      }}
      blur
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header
          css={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text id="modal-title" size={30}>
            {selectedProjects}
          </Text>
          <Button
            auto
            flat
            color="secondary"
            onClick={() => setVisible(false)}
            css={{
              position: "absolute",
              right: "15px",
              top: "15px",
              background: 'transparent'
            }}
          >
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Container
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Text id="modal-description"></Text>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 170 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              style={{
                width: "70vh",
                height: "40vh",
                borderRadius: "25px",
                cursor: "pointer",
              }}
              src={selectedImage}
            />
            <Pagination
              loop
              color="secondary"
              onChange={(page) => {
                setSelectedProjects(projects[page - 1]),
                  setSelectedImage(images[page - 1]);
              }}
              page={page}
              onlyDots
              shadow
              css={{
                margin: "30px",
              }}
              controls={true}
              total={projects.length}
              size={"md"}
            />
          </Container>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ModalProjects;
