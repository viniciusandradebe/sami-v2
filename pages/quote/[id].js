import { useRouter } from "next/router";
import React from "react";
import Meta from "../../components/Meta";
import {
  Container,
  Row,
  Col,
  CardBody,
  Table,
  Card,
  CardTitle,
} from "reactstrap";
import { currency } from "../../helpers/currency";

export default function Quote({ user }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Meta title="Sami Proposta | Plano de Saúde para MEI e PJ em São Paulo" desc="Sami é o Plano de Saúde Empresarial Corporativo para Empresas e MEI em São Paulo com o conceito de atendimento personalizado, médico de família e tecnologia de ponta focado no seu bem estar!"/>
      <Container className="themed-container information-quote" fluid={true}>
        <Container className="themed-container pt-5 pb-5" fluid="xl">
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
          <Col sm="12" md="12" xs="12" lg="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Apartamento</CardTitle>
                <Table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quant.</th>
                      <th>Preço</th>
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
                          <td>{currency(item.price, 'BRL')}</td>
                          <td>{currency((item.totalPeoples * item.price), 'BRL')}</td>
                        </tr>
                      )
                    )}
                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <strong>
                          {currency(user.quote.totals["Sami Sol - Apartamento"], 'BRL')}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="12" xs="12" lg="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Enfermaria</CardTitle>
                <Table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quant.</th>
                      <th>Preço</th>
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
                          <td>{currency(item.price, 'BRL')}</td>
                          <td>{currency((item.totalPeoples * item.price), 'BRL')}</td>
                        </tr>
                      )
                    )}
                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <strong>
                          {currency(user.quote.totals["Sami Sol - Enfermaria"], 'BRL')}
                        </strong>
                      </td>
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
