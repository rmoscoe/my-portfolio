import React, { useState } from "react";
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import PortfolioContainer from "./components/portfolioContainer";
import "./assets/css/bulma.min.css";
import "./assets/css/style.css"

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <div className="is-hidden-tablet is-relative is-flex is-justify-content-center my-3">
          <div className="w65">
            <div className="image-container">
              <img className="headshot" src="./images/Headshot_rectangular.jpg"
                alt="professional headshot" />
            </div>
            <div className="container is-overlay is-align-self-center has-background-transparent">
              <h1 className="has-background-transparent shadow is-size-2">Ryan Moscoe</h1>
              <p className="headline-mobile has-background-transparent shadow is-size-4">Software Engineer | AI Prompt Engineer | Ninja</p>
            </div>
          </div>
        </div>
        <section id="hero" className="is-hidden-mobile">
          <img className="hero-img headshot" src="./images/Headshot_rectangular.jpg"
            alt="professional headshot" />
          <aside id="hook">
            <h1>Ryan Moscoe</h1>
            <p className="headline">Software Engineer | AI Prompt Engineer | Ninja</p>
            <p>If you are looking for a coding ninja, look no further. I code in HTML, CSS, JavaScript, Python, Java, C#, and other languages. In my spare time, I practice--you guessed it--ninjutsu.</p>
          </aside>
        </section>
        <PortfolioContainer currentPage={currentPage} />
      </main>
      <Footer />
    </>
  );
}

export default App;
