import React from "react";
import { Rotas } from "./routes/AppRoutes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { CarrinhoProvider } from "./components/context/carrinhoContext";




function App() {
  return (
    <>
      <Header />
      <CarrinhoProvider>
        <Rotas />
      </CarrinhoProvider>
      <Footer />
    </>
  );
}

export default App;