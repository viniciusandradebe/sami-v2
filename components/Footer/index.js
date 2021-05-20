import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import { linksFooter } from "./type";

const Footer = () => {
  return (
    <footer>
      <Container className="align-left pt-5 pb-5">
        <Row className="mb-3">
          <Col xs="12" lg="4" md="4" sm="4">
            <Image
              src="/images/sami_footer.webp"
              width={101}
              height={36}
              alt="Sami Footer"
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="4" md="4" sm="4">
            <h4>Sobre a Sami</h4>
            {linksFooter.map((item, index) => (
              <h4 key={index}>
                <a
                  id={item.id}
                  target="_blank"
                  className="text-white font-weight-300"
                  href={item.link}
                  onClick={() => {
                    setTrackEvent({ eventId: "Click Footer - " + item.status });
                  }}
                >
                  {item.title}
                </a>
              </h4>
            ))}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
