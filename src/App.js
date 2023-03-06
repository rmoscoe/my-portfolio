import React, { useState } from "react";
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import PortfolioContainer from "./components/portfolioContainer";
import "./assets/css/bulma.min.css";
import "./assets/css/style.css"

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <section id="hero">
          <img className="hero-img" src="./images/Headshot_rectangular.jpg" id="headshot"
            alt="professional headshot" />
          <aside id="hook">
            <h1>Ryan Moscoe</h1>
            <p id="headline">Software Engineer | Problem Solver | Ninja</p>
            <p>If you are looking for a coding ninja, look no further. I code in Java, Python, C, JavaScript, HTML, and CSS. In my spare time, I practice--you guessed it--ninjutsu.</p>
          </aside>
        </section>
        <PortfolioContainer currentPage={currentPage} />
      </main>
      <Footer />
    </>
  );
}

export default App;
