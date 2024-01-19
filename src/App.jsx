import Home from "./components/Home"
import Nav from "./components/Nav"
import Products from "./components/Products"
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div id="home">
      <Nav />
      <Home />
      <Products />
      </div>
      <Footer />
    </>
  )
}

export default App
