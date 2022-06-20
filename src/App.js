import './App.css';
import Header from './components/Header';
import NavBarSmall from './components/NavBarSmall';
import Hero from './components/Hero';
import Projects from './components/Projects';
document.body.style.backgroundColor = "#17171F";
function App() {
  return (
    <div className='text-white font-poppins pb-12'>
    <Header></Header>
    <NavBarSmall/>
    <Hero></Hero>
    <Projects></Projects>
    </div>
 
    )
}

export default App;
