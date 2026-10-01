import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.svg";
import { Stack } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import LineText from "./LineText";
import IconText from "./IconText";
import { navCategories } from "../../variables/variable";
import SearchBox from "../SearchBox/SearchBox";
function Header() {
  return (
    <Navbar className="bg-body-tertiary d-flex flex-column pb-0" expand="xl">
      <Container fluid style={{ paddingLeft: "4rem", paddingRight: "4rem" }}>
        <Row className="w-100 align-items-center " style={{ height: "4.5rem" }}>
          <Col
            className=" col-10 d-flex column-gap-4 align-items-center "

            
            xl={7}
            xxl={8}
          >
            <Navbar.Brand href="#home">
              <img src={logo} alt="" width={156} height={36} />
            </Navbar.Brand>
            <div className="d-none d-xl-block w-50">
              <SearchBox />
            </div>
          </Col>
          <Col  xxl={4} xl={5} className="d-flex  col-2">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Meesho
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex column-gap-2">
                <LineText text="Become a Supplier" />
                <LineText text="Investor Relations" />
                <IconText
                  icon={
                    <CgProfile
                      fontSize={24}
                      style={{
                        letterSpacing: 0.5,
                        fontWeight: 500,
                        lineHeight: "20px",
                        color: "#666671",
                      }}
                    />
                  }
                  text="Profile"
                />
                <IconText
                  icon={
                    <LuShoppingCart
                      fontSize={24}
                      style={{
                        letterSpacing: 0.5,
                        fontWeight: 500,
                        lineHeight: "20px",
                        color: "#666671",
                      }}
                    />
                  }
                  text="Cart"
                />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Col>
        </Row>
      </Container>
      <hr className="w-100 my-1" />
      <Container
        fluid
        className="py-3  "
        style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
      >
        <Stack
          className="flex-row gap-3 overflow-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          {navCategories.map((navCategory) => {
            return (
              <h6
                style={{
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  lineHeight: "20px",
                  whiteSpace: "nowrap",
                  color: "gray",
                }}
              >
                {navCategory.name}
              </h6>
            );
          })}
        </Stack>
      </Container>
    </Navbar>
  );
}

export default Header;
