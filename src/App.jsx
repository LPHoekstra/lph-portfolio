import Home from "./pages/home/index"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import "./styles/main.scss"

// add typescript 
// add lazy load components ?
function App() {
  return (
    <>
        <Header />
        <Home />
        <Footer />
    </>
  )
}

export default App
