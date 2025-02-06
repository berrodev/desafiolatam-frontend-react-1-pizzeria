import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import PizzaDetails from './pages/PizzaDetails';
import Register from './pages/Register';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { BrowserRouter, Routes, Route } from 'react-router';

const mySwal = withReactContent(Swal);

function App() {
  // const token = true;
  // TODO: router
  return (
    <>
      <Navbar />
      <Header />
      <main className="h-full max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register mySwal={mySwal} />} />
          <Route path="/login" element={<Login mySwal={mySwal} />} />
          <Route path="/pizzas/:id" element={<PizzaDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<div>profile</div>} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
