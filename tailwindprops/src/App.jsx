import './App.css'
import Card from './conponents/Card'
// import shinchan from './assets/shinchan.png';

function App() {
  

  return (
    <>
    
        <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind </h1>

        {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        
        <img class="w-24 h-24 rounded-full mx-auto" src={shinchan} alt="" width="384" height="512" />
        
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              Sarah Dayan
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}
      <Card name='cartoon' btntxt='cickme'/>
      <Card name='doremone' btntxt='visitme'/>

    </>
  )
}

export default App
