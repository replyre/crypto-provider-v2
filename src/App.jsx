import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import "./App.css";
import CryptoDetails from "./components/CryptoDetails";
import ExchangeDetails from "./components/ExchangeDetails";

const App = () => {
  return (
    <div className="app">
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="exchanges" element={<Exchanges />} />
            <Route path="news" element={<News />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/exchange/:exchangeId" element={<ExchangeDetails />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
