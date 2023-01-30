import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import ProductCreate from "./ProductCreate";
import ProductDetails from "./ProductDetails";
import ProductsPage from "./ProductsPage";
import UsersPage from "./UsersPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/create" element={<ProductCreate />} />
            <Route path="/products/:id" element={<ProductDetails />} />

            <Route path="/users" element={<UsersPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
