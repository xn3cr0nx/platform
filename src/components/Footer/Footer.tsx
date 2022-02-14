import { SocialIcon } from "react-social-icons";
import { Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <img
              alt="..."
              className="logo img-fluid rounded"
              src={require("assets/img/logo-transparent.png").default}
            />
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink
                  href="https://opensea.io/PoseidonNftFund"
                  target="_blank"
                  rel="noreferrer"
                >
                  OpenSea
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://superrare.com/poseidonnftfund"
                  target="_blank"
                  rel="noreferrer"
                >
                  SuperRare
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://foundation.app/@Poseidonnftfund"
                  target="_blank"
                  rel="noreferrer"
                >
                  Foundation
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="2">
            <Nav>
              <NavItem>
                <NavLink href="mailto://info@poseidonnft.org">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://mirror.xyz">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://poseidongroup.ch/">
                  Group
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="4">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <SocialIcon
                className="social-icon"
                target="_blank"
                url="https://twitter.com/Poseidon_SF/"
                bgColor="#4824fa"
                fgColor="#FFF"
              />
              <SocialIcon
                className="social-icon"
                target="_blank"
                url="https://discord.gg/gUsX8MpTqk"
                bgColor="#4824fa"
                fgColor="#fff"
              />
              <SocialIcon
                className="social-icon"
                target="_blank"
                url="https://instagram.com/poseidondao"
                bgColor="#4824fa"
                fgColor="#fff"
              />
              <SocialIcon
                className="social-icon"
                target="_blank"
                url="https://github.com/Poseidon-DAO"
                bgColor="#4824fa"
                fgColor="#fff"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
