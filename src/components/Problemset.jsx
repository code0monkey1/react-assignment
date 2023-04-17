import React from 'react'
import problemsArray from '../data'
import Problem from './Problem'

const Problemset = () => {

  
  return (<>
    <div style={{display: 'flex',justifyContent: 'center',flexDirection: 'column'}}>
    <h1 style={{textAlign:"center"}}>Problems</h1>
    <table>  
     <Headings/>
     {problemsArray.map(problem=><Problem key={problem.title} {...problem} />)}
    </table>
   </div>
  </>
    
  )
}

const Headings=()=>{
 
  const styleClass={
      tableData_1:{
        minWidth:"10vw",
        padding:"2rem",
        backgroundColor:"grey"
      },
       tableData_2:{
        minWidth:"10vw",
        padding:"2rem",
        backgroundColor:"green"
      },
       tableData_3:{
        minWidth:"10vw",
        padding:"2rem",
        backgroundColor:"skyBlue"
      }
    }
   
  return (
     <tr>
        <td style={styleClass.tableData_1}>
            Title
        </td>
        <td style={styleClass.tableData_2}>
            Acceptance
        </td>
        <td style={styleClass.tableData_3}>
          Difficulty
        </td>
      </tr>
  )
}

export default Problemset