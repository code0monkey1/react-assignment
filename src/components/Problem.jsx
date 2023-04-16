// A demo component
export default function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;
    
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

    return <tr>
        <td style={styleClass.tableData_1}>
            {title}
        </td>
        <td style={styleClass.tableData_2}>
            {acceptance}
        </td>
        <td style={styleClass.tableData_3}>
            {difficulty}
        </td>
     </tr>
}