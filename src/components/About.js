import '../App.css';
export default function About(props) {
  return (
    <div id='about' className='p-16 container mt-56 lg:flex-col justify-between items-center mx-auto px-8 md:px-24 lg:px-24 w-full bg-black'>
      <h2 className='mt-6 text-3xl font-bold md:text-6xl lg:text-5xl text-center mb-12'> About Me </h2>
      <div className='w-96 mx-auto'>{props.description}</div>
      <div className='flex card-list'>
        <article className='card'>
          <h3 className='text-pop mb-2 text-center'>Reading</h3>
          <p className='ml-2'>Here are 3 of my <span className='bg-pop px-1'> favourite books</span> I've read <span className='bg-pop px-1'>this year</span>.</p>
          <div className='lg:p-2'>
            <p className='mt-2'><a className='text-selected-text hover:text-selected-text/[0.7]' href="https://www.goodreads.com/book/show/52668915-entangled-life" rel='noreferrer' target={'blank'}>Entangled Life<span className='text-sm'> by Merlin Sheldrake</span></a>
            <br/><span className='ml-4 text-sm text-slate-600'>- Mycology/Botany</span></p>
            <p className='mt-2'><a className='text-selected-text hover:text-selected-text/[0.7]' href="https://www.goodreads.com/book/show/52668915-entangled-life" rel='noreferrer' target={'blank'}>Deep Work<span className='text-sm'> by Cal Newport</span></a>
            <br/><span className='ml-4 text-sm text-slate-600'>- Focus/Effeciency</span></p>
            <p className='mt-2'><a className='text-selected-text hover:text-selected-text/[0.7]' href="https://www.goodreads.com/book/show/52668915-entangled-life" rel='noreferrer' target={'blank'}>Chapterhouse: Dune<span className='text-sm'> by Frank Herbert</span></a>
            <br/><span className='ml-4 text-sm text-slate-600'>- Science Fiction</span></p>
          </div>
          
         </article>
         <article className='card'>
          <h3 className='text-pop mb-2 text-center'>Snowboarding</h3>
          <p className='ml-2'>I've been an avid snowboarder for about 10 years. I teach beginners how to gain confidence, and I teach my friends how to do tricks!</p>
          <p className='mt-2'><span className='bg-pop px-1'>Favourite Mountains</span> <br/></p>
          <ul className='list-disc p-4 ml-2'><li>Fernie BC</li><li>Jay Peak VT</li>  <li>Bromont QC</li> </ul>
          
         </article>
        <article className='card'>
      aaaa
        </article>
    </div>
    </div>
  )
}