import { useRef, useState } from "react";

function Calculator() {
  const inputRef = useRef(null);
  const [number, setNumber] = useState(0);
  const add = (e) => {
    e.preventDefault();//???why this??
    // setNumber(number + Number(inputRef.current.value))   // OK
    setNumber(() => number + Number(inputRef.current.value))// OK
  };
  const minus = (e) => {
    e.preventDefault();//???why this??
    setNumber(() => number - Number(inputRef.current.value))
  };
  const times = (e) => {
    e.preventDefault();//???why this??
    setNumber(() => number * Number(inputRef.current.value))
  };
  const divide = (e) => {
    e.preventDefault();//???why this??
    setNumber(() => number / Number(inputRef.current.value))
  };

  const resetInput = (e) => {
    e.preventDefault();//???why this??
    inputRef.current.value = 0;
  }
  const resetNumber = (e) => {
    e.preventDefault();//???why this??
    setNumber(()=>number * 0)
  }


  return (
    <div style={{ backgroundColor: "lightgrey", display:'flex', flexFlow:'column', padding:'10px', fontSize:'20px' }}>
      <div style={{ textAlign: 'start' }}>Calculator:</div>
      <div style={{ textAlign: 'start' }}>{number}</div>
      <input  ref={inputRef} type="text" />
      <div>
        <button style={{height:"40px", fontSize:"10px"}} onClick={add}>add</button>
        <button style={{height:"40px", fontSize:"10px"}} onClick={minus}>sub</button>
        <button style={{height:"40px", fontSize:"10px"}} onClick={times}>time</button>
        <button style={{height:"40px", fontSize:"10px"}} onClick={divide}>divide</button>
        <button style={{height:"40px", fontSize:"10px", backgroundColor:'orange'}} onClick={resetInput}>reset input</button>
        <button style={{height:"40px", fontSize:"10px", backgroundColor:'orange'}} onClick={resetNumber}>reset number</button>
      </div>
    </div>
  )
}
export default Calculator;