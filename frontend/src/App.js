import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
