import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get('https://basic-mern-app-backend.onrender.com');
      setMessage(response.data);  // Update state with the response
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);  // Empty dependency array ensures it's called once when the component mounts

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
