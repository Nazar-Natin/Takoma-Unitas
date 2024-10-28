import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Services from "./features/Services/Services";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import "./styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router basename="/Takoma-Unitas/">
      <Header openModal={openModal} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Form />
      </Modal>
    </Router>
  );
};

export default App;
