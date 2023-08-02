function Events(props) {
  return (
    <div style={{display:'flex', alignItems:'center'}}>
      <button style={{ cursor: "pointer" }} onClick={props.addClick}>{props.children ? props.children : "addClick"}</button>
      {/* <button style={{ cursor: "pointer" }} onClick={props.onClick}>{props.children ? props.children : "getClick"}</button> */}
      --- <span style={{display:'inline-block', width:'30px', height:'30px', border:'1px solid black', borderRadius:'5px', backgroundColor:'skyblue', fontSize:'20px'}}>{props.number}</span>
    </div>
  )
}
export default Events;