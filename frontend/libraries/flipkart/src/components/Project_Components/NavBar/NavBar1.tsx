import { Container, Nav, NavDropdown } from "react-bootstrap"
import Navbar from "react-bootstrap/esm/Navbar"
import { Link } from "react-router-dom"
import logo from '../../../static/images/my-logo.jpg'

const NavBar:React.FC=()=>{
    return (<>
    <Navbar bg="info" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={logo}
              width="180"
              height="40"
              className="d-inline-block align-top"
              alt="myinstitutes.com logo"
            />
          </Navbar.Brand>

        <Navbar.Brand href="#home">Myinstitutes.Com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About"><Link to="/About">About</Link></Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>)
}

export default NavBar