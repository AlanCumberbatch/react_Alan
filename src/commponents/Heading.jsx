function Heading(props) {
  // return (
  //   <h1 onClick={props.onClick}>{props.title}</h1>
  // )
  return <h2 style={{ cursor: "pointer" }} onClick={props.onClick}>
    {props.title}+(Clickable) ---
    <span style={{display:'inline-block', width:'30px', height:'30px', border:'1px solid black', borderRadius:'5px', backgroundColor:'skyblue', fontSize:'20px'}}>{props.count}</span>
  </h2>
}
export default Heading;