import './App.css'
import Header from "./header.tsx"
import Footer from "./footer.tsx"
import Products from "./frontpage/produtos.tsx";
import Noticias from "./frontpage/noticias.tsx"
import Trofeus from "./frontpage/info.tsx"

function App() {

  return (
    <>
      <Header />
        <Products />
        <Noticias />
        <Trofeus />
        <Footer />
    </>
  )
}

export default App
