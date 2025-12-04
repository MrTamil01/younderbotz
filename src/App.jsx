import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") return <Home />;
    if (page === "about") return <About />;
    return <Home />;
  };

  return (
    <center>
    <div className="app">
      <header className="navbar">
        <h1 className="logo">React</h1>
        <nav>
          <button
            className={page === "home" ? "nav-btn active" : "nav-btn"}
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button
            className={page === "about" ? "nav-btn active" : "nav-btn"}
            onClick={() => setPage("about")}
          >
            About
          </button>
        </nav>
      </header>

      <main className="content">{renderPage()}</main>
    </div>
    </center>
  );
}

export default App;
