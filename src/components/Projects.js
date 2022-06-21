import '../App.css';
import Card from './ProjectCards';
export default function Projects(props) {
  return (
    <div id='work' className='bg-black md:mt-64 pt-12'>
    <h2  className='mt-6 text-5xl font-bold md:text-6xl lg:text-7xl text-center md:py-24  mb-16 bg-theme/[0.05]'>My Projects</h2>
    <div className='container grid  grid-cols-1 lg:grid-cols-2  mx-auto px-8 md:px-16 lg:px-24 w-full gap-12 items-center py-6'>
      
     
      
      <Card
        title='Todo List'
        image='todo.png'
        alt='a todo application website'
        description="Create new todo's, create new projects to hold your todo's, highlight your todo's by urgency,
        delete your todo's and add and edit notes for each individual to do."
        source='https://github.com/Dezzep/todo-list'
        preview='https://dezzep.github.io/todo-list/'
      ></Card>
      
      <Card
        title='Weather App'
        image='weather.png'
        alt='weather application website'
        description='Uses a weather api to fetch data and'
        source='https://github.com/Dezzep/weather-app'
        preview='https://dezzep.github.io/weather-app/'
      ></Card>
      <Card 
        title='Admin Dashboard' 
        image='admin-dashboard.png' 
        alt='project of a mock admin dashboard' 
        description='A design of an admin dashboard, created using:'
        source='https://github.com/Dezzep/Admin-Dashboard' 
        preview='https://dezzep.github.io/Admin-Dashboard/'></Card>

      <Card
      title='Book Tracker'
      image='library.png'
      alt="A library tracker web application to keep track of what books you have or haven't read"
      description="Keep track of the books you have or haven't read"
      source='https://github.com/Dezzep/library'
      preview='https://dezzep.github.io/library/'
      ></Card>
    </div>
   
    </div>

  ); 
}