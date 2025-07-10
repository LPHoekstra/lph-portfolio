import Home from "./pages/home"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import "./styles/main.scss"
import { ThemeProvider } from "./context/theme"

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
