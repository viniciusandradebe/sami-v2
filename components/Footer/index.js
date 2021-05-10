import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {

  return (
    <footer id="footer" className='section bg-primary'>
      <Container className='py-md'>
        <Row className='row-grid justify-content-lg-between align-items-lg-start'>
          <Col
            lg='3'
            sm='12'
            xs='12'
            className='d-flex flex-row align-items-center justify-content-lg-start justify-content-center mb-sm-5'
          >
            <a href='/#'>
            </a>
          </Col>
          <Col lg='9'>
            <Row className='row-grid d-flex justify-content-lg-between align-items-lg-start'>
              <Col xs='6' sm='4' lg='3'>
                {/* <img src={ansNumber} className='img-fluid' alt='Número ANS Sami' /> */}
              </Col>
              <Col xs='6' sm='4' lg='4' className='mt-0'>
                <a
                  href='http://www.ans.gov.br/'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => {
                    setTrackEvent({ eventId: 'Click Footer - ANS' })
                  }}
                >
                </a>
              </Col>
              <Col lg='5' sm='4'>
                <p className='text-white' style={{ fontSize: '1.2rem' }}>
                  Sami Assistência Médica LTDA CNPJ 36.567.721/0001-25 Al. Vicente
                  Pinzon, 54, Vila Olimpia São Paulo, SP, CEP 04547-130
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='row-grid justify-content-lg-start'>
          <Col xs='6' sm='6' md='3' lg='3'>
            <h4
              className='font-weight-700 text-white mb-3'
              style={{ fontSize: '1.25rem' }}
            >
              Sobre a Sami
            </h4>
            {/* {linksFooter.map((item, index) => (
              <h4 key={index}>
                <a
                  id={item.id}
                  className='text-white font-weight-300 '
                  style={{ fontSize: '1.25rem' }}
                  href={item.link}
                  onClick={() => {
                    setTrackEvent({ eventId: 'Click Footer - ' + item.status });
                  }}
                >
                  {item.title}
                </a>
              </h4>
            ))} */}
          </Col>
          <Col xs='6' sm='6' md='3' lg='4' className='mt-0'>
            <h4
              className='font-weight-700 text-white mb-3'
              style={{ fontSize: '1.25rem' }}
            >
              Baixe nosso app
            </h4>
            <Row className='justify-content-start'>
              {/* {storeFooter.map((item, index) => (
                <Col key={index} lg='5' xs='10' className='pl-1'>
                  <div>
                    <a
                      className='text-white font-weight-300 '
                      href={item.link}
                      id={item.id}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        src={item.img}
                        alt={item.alt}
                        style={{ maxHeight: '62px' }}
                      />
                    </a>
                  </div>
                </Col>
              ))} */}
            </Row>
          </Col>
          <Col xs='6' sm='6' md='3' lg='3' className='mt-lg-0'>
            <h4
              className='font-weight-700 text-white mb-2'
              style={{ fontSize: '1.25rem' }}
            >
              Redes sociais
            </h4>
            <Row>
              {/* <Col className='btn-wrapper'>
                {iconsFooter.map((item, index) => (
                  <Button
                    key={index}
                    className='btn-icon-only bg-white text-primary mt-2'
                    href={item.link}
                    target='_blank'
                    id={item.id}
                    style={{
                      borderColor: 'white',
                      borderRadius: '9px'
                    }}
                  >
                    <span
                      className='btn-inner--icon'
                      style={{ fontSize: '1.3rem', lineHeight: 2 }}
                    >
                      <img width={index === 1 ? "30%" : "50%"} src={item.icon} alt={"icon"} />
                    </span>
                  </Button>
                ))}
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
