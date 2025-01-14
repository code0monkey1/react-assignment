import React from 'react'
import Problem from '../components/Problem'
import problemsArray from '../data'

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
            <h3>Title</h3>
        </td>
        <td style={styleClass.tableData_2}>
            <h3>Acceptance</h3>
        </td>
        <td style={styleClass.tableData_3}>
           <h3>Difficulty</h3>
        </td>
      </tr>
  )
}

export default Problemset