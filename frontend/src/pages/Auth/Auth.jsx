import React, { useState } from "react";
import Register from "../../components/SignUp/Register";
import Login from "../../components/Login/Login";
import Protected from "../../components/Protected";
import { Button, Container, Box } from "@mui/material";

function Auth() {
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Register

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle the form view
  };

  return (
    <Container maxWidth="sm">
      {!token ? (
        <Box>
          {/* Show either Login or Register component */}
          {isLogin ? <Login setToken={setToken} /> : <Register />}

          {/* Toggle button at the bottom, reduced gap */}
          <Button
            variant="outlined"
            onClick={toggleForm}
            sx={{ marginTop: 0, width: "505px", marginLeft: "24px" }} // Reduced gap between button and form
            fullWidth
          >
            {isLogin ? "Go to Register" : "Go to Login"}
          </Button>
        </Box>
      ) : (
        <Protected token={token} />
      )}
    </Container>
  );
}

export default Auth;
