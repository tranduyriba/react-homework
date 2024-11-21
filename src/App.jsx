import React from "react";
import ProductsList from "./components/products";
import Footer from "./components/footer";
import Header from "./components/header";
import App from './App';

function App() {
  return (
    <>
      <Header />
      <ProductsList />
      <Footer />
    </>
  );
}

export default App;
