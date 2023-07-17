import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About />
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
