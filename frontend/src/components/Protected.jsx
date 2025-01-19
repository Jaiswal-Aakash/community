import React, { useEffect, useState } from "react";
import axios from "axios";

function Protected() {
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token"); // Retrieve token from localStorage directly

  useEffect(() => {
    if (token) {
      const fetchProtectedData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/protected", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setMessage(response.data.message);
        } catch (error) {
          setMessage("Access denied");
        }
      };

      fetchProtectedData();
    } else {
      setMessage("Please log in");
    }
  }, [token]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Protected;
