import React from 'react'
import problemsArray from '../data'
import Problem from './Problem'
const Home = () => {
  return (<>

    <div>Home</div>
    <>
    {problemsArray.map(problem=><Problem data={problem} />)}
    </>

  </>
    
  )
}

export default Home