import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./componentes/footer/Footer"
import Navibar from "./componentes/navbar/Navibar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"


function App() {


  return (
    <>
      {/* A <> Tag fantasma para limitação, sem ele não consegue retornar + de uma linha pode ser utilizado <div> também*/}
      <BrowserRouter>
        <Navibar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </>

  )
}

export default App
