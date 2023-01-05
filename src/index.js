// 1. Import the React and ReactDOM libraries
import {useState} from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
// import Run from './assests/running woman.png'

//2. Get a reference to the div with ID root 
const el = document.getElementById('root')

//3. Tell React to take control of that element 
const root = ReactDOM.createRoot(el)

//4. Create a component
function App() {
    const workOuts = [
        {
            workout: 'Weightlifting'
        },
        {
            workout: 'Running'
        },
        {
            workout: 'HIIT'
        },
        {
            workout: 'Hiking'
        },
        {
            workout: 'Jump rope'
        },
        {
            workout: 'Walking'
        }
        
    ]

const [workOut, setWorkOut] = useState(0);

const randomWorkOuts = (e) => {
    const len = workOuts.length;
    setWorkOut(Math.floor(Math.random() * len));
}

return (
    
    <div>
        <section className= "container mx-auto bg-zinc-300 opacity-80 border-8 rounded-xl shadow pt-4 m-40 h-80 w-80 text-center">
            
            <h1 className='text-3xl top-3 left-30 font-serif'>
            Get moving!
            </h1>
        <div key={workOut} className="text-4xl h-40 leading-extra-loose font-sans">

            {workOuts[workOut].workout}
        </div>
        <button className="bg-teal-800 rounded-xl w-40 text-white left-20" onClick={randomWorkOuts}>
            Workout
        </button>
        {/* <img src={Run}></img> */}
        </section>
    </div>
)
}
// 5. Show the component on the screen
root.render(<App />); 