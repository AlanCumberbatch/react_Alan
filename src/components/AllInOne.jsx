import TestClass from './JsTest'
function Heading(props) {// what are the content in props ?
  // return <div>111</div>
  // return (<div>111</div>);

  const spanStyle = {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    border: '1px solid black',
    borderRadius: "5px",
    backgroundColor: "skyblue",
    fontSize: "20px"
  };// innerStyle

  const imgUrl = "";// Assets

  return (
    <>
      <h2 style={{ cursor: "pointer", }} onClick={props.onClick}>
        {props.title}+(Clickable) ----
        <span style={spanStyle}>{props.count}</span>
        <span>{props.toggle ? props.toggle : "toggle"}</span>
        <img src={ imgUrl } alt="assets" />
      </h2>
      <TestClass/>
    </>
  )
}
export default Heading;