import './App.css';
import Header from './components/Header';
import NavBarSmall from './components/NavBarSmall'
document.body.style.backgroundColor = "#17171F";
function App() {
  return (
    <div className='text-white font-poppins pb-12'>
    <Header></Header>
    <NavBarSmall/>
    </div>
 
    )
}

export default App;
