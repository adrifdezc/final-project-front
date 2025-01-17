import { Link } from "react-router-dom";
import { useContext} from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./Landing/Logo.png";
import CartComponent from "./CartComponent/CartComponent";


function NavbarComp(props) {
  console.log("PROPS", props);
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, userData, logOutUser } = useContext(AuthContext);

  

  return (
    <div className="App">
      <Navbar className="navbar" expand="lg">
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
                  {window.location.pathname !== "/" ? null : (
                    <>
                      <a href="#Services">Services</a>
                      <a href="#Articles">Articles</a>
                      <a href="#Contact">Contact</a>
                    </>
                  )}
                  <>
                    <Link to="/cocktails">Cocktails</Link>
                    <Link to="/create">Create Yours</Link>
                  </>
                </Nav>
                <div className="User">
                  <Link to="/profile">
                    {" "}
                    <span>{user.name}</span>
                    {console.log(user)}
                  </Link>
                  <Link to="/cart">
                    <CartComponent userData={userData} />
                  </Link>
                  {"\u00A0"}|
                  <button className="logout" onClick={logOutUser}>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/signup">
                  {" "}
                  <button>Sign Up</button>{" "}
                </Link>
                <Link to="/login">
                  {" "}
                  <button>Log In</button>{" "}
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
