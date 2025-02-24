import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика авторизации
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Логин:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default App;
