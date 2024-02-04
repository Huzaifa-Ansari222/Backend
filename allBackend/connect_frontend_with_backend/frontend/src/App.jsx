import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes]=useState([]);

  useEffect(()=>{

    axios.get('/api/jokes')
    .then( (response)=>{setJokes(response.data);} 
    
    )
    .catch( (error)=>{console.log(error);} )
    
  })

  return (
    <>
      {/* jokes.length to check array element  */}
      
      {/* if jokes array come */}

      {
        jokes.map((joke, index)=>(
          <div style={{border:"1px white solid",margin:"10px"}} 
          key={joke.id}>
            
            <p>Joke No: {jokes.length}</p>
            <h2>{joke.title}</h2>
            <h4>{joke.content}</h4>
          
          </div>
        ))
      }

    </>
  )
}

export default App



/*
.we use axios package to fetch data from backend
.we use proxy vite package to white list route 
.we modify package.json file to set up route proxy
.aslo add type:"module" so our backend will understand it as backend
.tips of bad practise : when use proxy and build vite...drop dist folder to backend and make 
app.getexpress.static('dist')
and dnt write / code
*/ 