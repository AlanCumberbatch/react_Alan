function Toggler(props) {
  return (
    <button style={{marginRight:'15px'}}>{props.data ? props.data : "Events--onClick Btn"}</button>
  )
}
export default Toggler;