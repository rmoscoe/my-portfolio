import React, { useState } from "react";
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import PortfolioContainer from "./components/portfolioContainer";
import "./assets/css/style.css"

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <PortfolioContainer currentPage={currentPage} />
      </main>
      <Footer />
    </>
  );
}

export default App;
