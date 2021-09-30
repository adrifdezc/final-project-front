import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Landing from "../components/Landing/Landing";

const API_URL = process.env.REACT_APP_API_URL;


function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => props.history.push("/login"))
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  
  return (
    <>
    <Landing/>
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <input type="text" name="email" placeholder="E-mail" value={email} onChange={handleEmail} />

        <input type="password" name="password" placeholder="Password" value={password} onChange={handlePassword} />

        <input type="text" name="name" value={name} placeholder="Name" onChange={handleName} />

        <button type="submit">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have an account?</p>
      <Link to={"/login"}> Log In</Link>
    </div>
    </>
  )
}

export default SignupPage;