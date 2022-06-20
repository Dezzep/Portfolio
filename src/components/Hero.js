import '../App.css';
export default function Hero(props) { 
  return (
    <div className=' sm:flex-column container mt-16 md:flex justify-between items-center mx-auto px-8 md:px-16 lg:px-24 w-full'>
      <div className='flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36'>
        <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl text-center md:text-left'>Creating <br/> A Better Tomorrow</h1>
        <div className='w-full flex justify-center md:justify-start'>
          <button className='px-6 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3'>
            <span>My Work</span>
            </button>
          </div>
          
      </div>
      <div className='w-full flex justify-center md:justify-start md:ml-16 sm:space-y-4'>
        <img src={require('../images/JacobHandelman_picture.png')} alt ='Picture Of Jacob Handelman' className='rounded-full  w-1/2 md:w-3/4 p-3  mt-8 m:mt-0'></img>
      </div>
    </div>
  )
}