import { Route, Routes } from "react-router-dom"
import Login from "./components/login/Login"
import Home from "./pages/home/Home"
import ProductList from "./pages/product-list/ProductList"
import About from "./pages/about/About"
import RequiresAuth from "./components/requires-auth/RequiresAuth"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/products" element={<RequiresAuth><ProductList/> </RequiresAuth>} />
          <Route path="/about" element={<RequiresAuth><About/></RequiresAuth>} />
      </Routes>
    </div>
  )
}

export default App
