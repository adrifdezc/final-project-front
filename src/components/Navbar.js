import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function NavbarComp() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>COCKTAIL APP</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {isLoggedIn ? (
              <>
                <Nav className="me-auto">
                  <Link to="/home">
                  Home
                  </Link>
                  <Link to="/profile">
                    Profile
                  </Link>
                  <Link to="/cocktails">
                   Cocktail
                  </Link>
                  <button onClick={logOutUser}>Logout</button>
                  <NavDropdown title="More" id="basic-nav-dropdown">
                    <Link to="/cart">
                      <NavDropdown.Item href="#cart">
                        Shopping Cart
                      </NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </Nav>
                <span>{user.name}</span>
              </>
            ) : (
              <>
                <Link to="/signup">
                  {" "}
                  <button>Signup</button>{" "}
                </Link>
                <Link to="/login">
                  {" "}
                  <button>Login</button>{" "}
                </Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
