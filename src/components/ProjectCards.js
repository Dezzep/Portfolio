import '../App.css';
export default function Card(props) {
  return (
    <div>
      <h2 className='text-xl text-center mb-6'>{props.title}</h2>
      <div className='block w-72 h-48 mx-auto'> <img src={`/img/${props.image}`}alt={props.alt}></img></div>
      <p className='mx-auto text-center w-72'>{props.description}</p>
    <div className='flex mx-auto text-center'>
    <button onClick={(e) => {e.preventDefault(); window.open(props.source)}}>Source Code </button> 
    <button onClick={(e) => {e.preventDefault(); window.open(props.preview)}}>Live Preview</button>
  </div>
</div>
  )
}