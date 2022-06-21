import '../App.css';
export default function Card(props) {
  return (
    <div className='bg-input/[0.3] p-12 hover:bg-input/[0.5]'>
      <h2 className='text-xl text-center mb-6'>{props.title}</h2>
      <div className='block w-72 h-48 mx-auto'> <img src={`/img/${props.image}`}alt={props.alt}></img></div>
      <p className=' h-36 mx-auto text-center w-72'>{props.description}</p>
    <div className='flex justify-center gap-8 text-center py-8'>
    <button className='bg-theme p-2 md:p-3 font-semibold hover:scale-105 hover:bg-theme/[.7]' onClick={(e) => {e.preventDefault(); window.open(props.source)}}>Source Code </button> 
    <button className='bg-theme p-2 md:p-3 font-semibold hover:scale-105 hover:bg-theme/[.7]' onClick={(e) => {e.preventDefault(); window.open(props.preview)}}>Live Preview</button>
  </div>
</div>
  )
}