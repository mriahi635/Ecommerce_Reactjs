// src/App.js
import { lazy, Suspense } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Dashboard from "./pages/admin/Dashboard"; 
import Orders from "./pages/admin/Commandes";
import Clients from './pages/admin/Clients';
import Parametres from './pages/admin/settings';
import Products from './pages/admin/Produits';
import SignIn from './pages/SinIn/SignIn';
import SignUp from './pages/SinUp/SignUp';
import PaymentPage from './pages/PaymentPage';
import OrderConFirmation from './pages/OrderConfirmation';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <NavBar />
        <Routes>
           <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/OrderConfirmation" element={<OrderConFirmation />} /> 
          <Route path="/admin/dashboard" element={<Dashboard />} />  
          <Route path="/admin/Clients" element={<Clients />} />
          <Route path="/admin/Commandes" element={<Orders />} />
          <Route path="/admin/Produits" element={<Products />} />
          <Route path="/admin/settings" element={<Parametres />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
