import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Logo from "./Landing/Logo.png"
function NavbarComp() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  
  return (
    <div className="App">
      <Navbar className="navbar" bg="dark" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              {" "}
              <img src={Logo} alt="" style={{ height: "45px" }} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {isLoggedIn ? (
              <>
                <Nav className="me-auto">
                  <Link to="/cocktails">Cocktail</Link>
                  <NavDropdown title="More" id="basic-nav-dropdown">
                    <Link to="/cart">
                      <NavDropdown.Item href="#cart">
                        Shopping Cart
                      </NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </Nav>
               <Link to="/profile"> <span>{user.name}</span></Link>
                <button className="logout" onClick={logOutUser}>
                  | {"\u00A0"} Logout
                </button>
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
