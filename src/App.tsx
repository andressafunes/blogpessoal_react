import Footer from "./componentes/footer/Footer"
import Navibar from "./componentes/navbar/Navibar"
import Home from "./pages/home/Home"


function App() {
  

  return (
    <> 
{/* A <> Tag fantasma para limitação, sem ele não consegue retornar + de uma linha pode ser utilizado <div> também*/}
    <Navibar />
    <Home />
    <Footer/>
    </>
    
  )
}

export default App
