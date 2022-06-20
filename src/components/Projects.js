import '../App.css';
export default function Projects(props) {
  return (
    // container
    // 6 cards 
    // lg 3 rows
    // md 2 rows
    // s 1 row
    //card contents
    <div className='bg-black'>
    <h2 className='text-5xl font-bold md:text-6xl lg:text-7xl text-center py-16 mt-64 mb-16'>My Projects</h2>
    <div className='container grid  sm:grid-cols-1 md:grid-cols-2  mx-auto px-8 md:px-16 lg:px-24 w-full gap-12 items-center py-6'>
      
      <div>
        <h2 className='text-xl text-center mb-6'>ToDo List</h2>
      <div className='block w-72 h-48 mx-auto bg-todo-img bg-contain bg-no-repeat'></div>
      <p className='mx-auto text-center w-72'>Bleep a blick.. and a black block blicks tick tock sweet flick flocks</p>
      <div>
        <button>Source Code 
        </button> Live Preview</div>
      </div>
      <div>
      <div className='block w-72 h-48 mx-auto bg-admin-dashboard bg-contain bg-no-repeat'></div>
      </div>
      <div>
      <div className='block w-72 h-48 mx-auto bg-weather-img bg-contain bg-no-repeat'></div>
      </div>
      <div>
      <div className='block w-72 h-48 mx-auto bg-library-img bg-contain bg-no-repeat'></div>
      </div>

    </div>
    </div>

  ); 
}