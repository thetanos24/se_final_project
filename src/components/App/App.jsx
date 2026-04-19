import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  return (
    <BrowserRouter>
      <div className="page">
        <Header />

        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <section className="hero">
                  <h1 className="main__title">rise & hydrate</h1>
                  {/* Your large hero logo or image goes here */}
                </section>
              }
            />

            {/* Route 2: Gallery (Required second route) */}
            <Route
              path="/gallery"
              element={
                <section className="gallery">
                  <h2 className="gallery__title">Gallery</h2>
                  {/* Gallery content will go here in the future */}
                </section>
              }
            />

            {/* Additional Routes matching your Header links */}
            <Route
              path="/about"
              element={
                <section className="about">
                  <h2>About Us</h2>
                </section>
              }
            />
            <Route
              path="/contact"
              element={
                <section className="contact">
                  <h2>Contact</h2>
                </section>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
