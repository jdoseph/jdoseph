import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
