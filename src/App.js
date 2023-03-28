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
          <div className="is-hidden-tablet">
            <div className="image-container">
              <img className="headshot" src="./images/Headshot_rectangular.jpg"
                alt="professional headshot" />
            </div>
            <div className="card is-overlay is-align-self-center has-background-transparent">
              <h1 className="has-background-transparent">Ryan Moscoe</h1>
              <p className="headline has-background-transparent">Software Engineer | Problem Solver | Ninja</p>
            </div>
          </div>
          <section id="hero" className="is-hidden-mobile">
            <img className="hero-img headshot" src="./images/Headshot_rectangular.jpg"
              alt="professional headshot" />
            <aside id="hook">
              <h1>Ryan Moscoe</h1>
              <p className="headline">Software Engineer | Problem Solver | Ninja</p>
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
