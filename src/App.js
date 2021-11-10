
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header />

      <Home />

      <Footer />
    </div>
  );
}

export default App;