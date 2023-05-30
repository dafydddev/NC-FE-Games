import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/regions/Header";
import Footer from "./components/regions/Footer";

import Home from "./pages/Home";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
