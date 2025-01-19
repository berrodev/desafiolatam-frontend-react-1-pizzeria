import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  // const token = true;
  return (
    <>
      <Navbar />
      <Header />
      <main className="max-w-6xl mx-auto">
        <Register />
        <Login />
      </main>
      <Home />
      <Footer />
    </>
  );
}

export default App;
