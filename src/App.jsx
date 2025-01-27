import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);

function App() {
  // const token = true;
  // TODO: router
  return (
    <>
      <Navbar />
      <Header />
      <main className="max-w-6xl mx-auto">
        <Register mySwal={mySwal} />
        <Login mySwal={mySwal} />
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
