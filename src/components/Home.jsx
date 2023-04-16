import React from 'react'
import problemsArray from '../data'
import Problem from './Problem'

const Home = () => {
  return (<>

    <div>Home</div>
    <>
    <table>
     {problemsArray.map(problem=><Problem key={problem.title} {...problem} />)}
    </table>
    </>

  </>
    
  )
}

export default Home