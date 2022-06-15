import '../App.css';
import NavLinks from './Nav-links';
export default function NavBarSmall(props) {
  return (
    <div className='flex justify-center sticky md:hidden'>
      <NavLinks/>
    </div>
  )
}