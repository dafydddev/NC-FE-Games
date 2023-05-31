import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/regions/Header";
import Footer from "./components/regions/Footer";

import Home from "./pages/Home";
import AllReviews from "./pages/AllReviews"
import IndividualReview from "./pages/IndividualReview" 

function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/reviews/:id" element={<IndividualReview />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
