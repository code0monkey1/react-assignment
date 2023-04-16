// A demo component
export default function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;
    
    const styleClass={
      tableData:{
        width:"20vw"
      }
    }
    return <tr>
        <td style={styleClass.tableData}>
            {title}
        </td>
        <td style={styleClass.tableData}>
            {acceptance}
        </td>
        <td style={styleClass.tableData}>
            {difficulty}
        </td>
    </tr>
}