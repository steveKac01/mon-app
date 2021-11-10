
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;