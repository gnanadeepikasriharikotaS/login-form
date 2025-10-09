
import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Authentication</h1>

      <Login
        setShowRegister={setShowRegister}
        setLoginMessage={setLoginMessage}
      />

      {loginMessage && <div className="alert alert-info mt-3">{loginMessage}</div>}

      {showRegister && (
        <div className="mt-4">
          <hr />

          <Register />
        </div>
      )}
    </div>
  );
}

export default App;
