import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  CardBody,
  Table,
  Card,
  CardTitle,
} from "reactstrap";

export default function Quote({ user }) {
  const { isFallback } = useRouter();
  const [activeTab, setActiveTab] = useState("1");
  const [totalApartament, setTotalApartament] = useState(0);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Container className="themed-container" fluid={true}>
        <Row className="nav-quote">
          <Nav>
            <NavItem>
              <NavLink href="#">
                <Image
                  src="/images/sami-logo.webp"
                  className="mr-5"
                  id="logoSami"
                  alt="Sami Logo"
                  width={104}
                  height={37}
                />
              </NavLink>
            </NavItem>
          </Nav>
        </Row>
      </Container>
      <Container className="themed-container information-quote" fluid={true}>
        <Container className="themed-container p-5" fluid="xl">
          <Row className="">
            <Col xs="6" sm="4" className="mb-2">
              <h3>
                {user.firstname} {user.lastname}
              </h3>
              <span>Celular: {user.phone}</span>
              <br />
              <span>Email: {user.email}</span>
            </Col>
            <Col xs="6" sm="4"></Col>
            <Col sm="4" className="mb-2">
              <h5>Dados do Vendedor</h5>
              <span>Nome: {user.vendorName} </span>
              <br />
              <span>email: {user.vendorEmail} </span>
              <br />
              <span>celular: {user.vendorPhone} </span>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="themed-container pt-5 pb-5" fluid="md">
        <Row>
          <Col sm="12" md="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Apartamento</CardTitle>
                <Table>
                  <thead>
                    <tr>
                      <th>Item e descrição</th>
                      <th>Quantidade</th>
                      <th>Preço unitário</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.quote.plans["Sami Sol - Apartamento"].map(
                      (item, index) => (
                        <tr key={index}>
                          <td>
                            {item.plan} - {item.age} anos
                          </td>
                          <td>{item.totalPeoples}</td>
                          <td>{item.price}</td>
                          <td>{item.totalPeoples * item.price}</td>
                        </tr>
                      )
                    )}
                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td></td>
                      <td></td>
                      <td><strong>{user.quote.totals["Sami Sol - Apartamento"]}</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Enfermaria</CardTitle>
                <Table>
                  <thead>
                    <tr>
                      <th>Item e descrição</th>
                      <th>Quantidade</th>
                      <th>Preço unitário</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.quote.plans["Sami Sol - Enfermaria"].map(
                      (item, index) => (
                        <tr key={index}>
                          <td>
                            {item.plan} - {item.age} anos
                          </td>
                          <td>{item.totalPeoples}</td>
                          <td>{item.price}</td>
                          <td>{item.totalPeoples * item.price}</td>
                        </tr>
                      )
                    )}
                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td></td>
                      <td></td>
                      <td><strong>{user.quote.totals["Sami Sol - Enfermaria"]}</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = [];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;

  const config = {
    method: "GET",
    headers: {
      Authorization:
        "Basic NjlkNTQxNDZlYjAyOWQ3MzZhZjFkZjAxZWEyOWJhZTY6MDY0YjAyYThmNTE0Njg1NGQyMjA4MzBiY2EwOWEyNmE=",
    },
    mode: "cors",
    cache: "default",
  };

  const response = await fetch(
    ` https://api-dev.samisaude.com.br/v1/site/quotation/quote/${id}`,
    config
  );
  const data = await response.json();

  return {
    props: {
      user: data,
    },
    revalidate: 10,
  };
};
