import '../App.css';
export default function NavLinks(props) { 
  return (
    <div className='flex gap-16 md:flex-row md:space-x-12 items-center md:gap-0'>
      <a href="#" className="text-selected-text">Home</a>
      <a href="#work">My work</a>
      <a href="#about">About</a>
      <a href="#hire"> <button className='px-6 py-2 bg-theme font-bold'>Hire me</button></a>
    </div>
  )
}