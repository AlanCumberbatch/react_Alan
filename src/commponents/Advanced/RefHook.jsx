import { useRef } from "react";

function RefHook() {
  const formInputRef = useRef(null);
  const focusInput = () => {
    formInputRef.current.focus();
  }
  return (
    <div style={{border:'5px solid black'}}>
      <h1>RefHook</h1>
      <input ref={formInputRef} type="text" />
      <button onClick={focusInput}>Focus input</button>
    </div>
  )
}
export default RefHook;