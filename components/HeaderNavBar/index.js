import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@oisamitech/samui";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const HeaderNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="p-3" color="light" light expand="lg">
        <Container className="py-md">
          <NavbarBrand href="https://www.samisaude.com.br/">
            <Image
              src="/images/sami-logo.webp"
              className="mr-5"
              id="logoSami"
              alt="Sami Logo"
              width={104}
              height={37}
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto align-items-center" navbar>
              <NavItem>
                <NavLink href="https://www.samisaude.com.br/#/about-us" target="_blank">Sobre nós</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://blog.samisaude.com.br/" target="_blank">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.samisaude.com.br/#/product" target="_blank">
                  <Button size="small">Conheça nosso plano</Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavBar;
