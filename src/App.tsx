import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./componentes/footer/Footer"
import Navibar from "./componentes/navbar/Navibar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import Login from "./pages/login/Login"


function App() {


  return (
    <>
      {/* A <> Tag fantasma para limitação, sem ele não consegue retornar + de uma linha pode ser utilizado <div> também*/}
      <AuthProvider>
        <BrowserRouter>
          <Navibar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>

  )
}

export default App
