import { useEffect, useState } from "react";

// Side effect( from impure function): to deal with it,
function UseEffect() {
  const [toggle, setToggle] = useState(false);
  const clickHandler = (e) => {
    setToggle(!toggle);
  }

  // useEffect(() => {
  //   document.title = toggle ? "A" : "B";
  // })//! always run
  // useEffect(() => {
  //   document.title = toggle ? "A" : "B";
  // }, [])//! only excute when compile / on the initial component render,  '[]' called as dependencies array. React will compare the current dependencies with the previous dependencies and only re-run the effect if they have changed.
  useEffect(() => {
    document.title = toggle ? "A" : "B";
  }, [toggle])//! whenever 'toggle' changed/updated
  return (
    <div style={{border:'5px solid black'}}>
      <h1>UseEffect</h1>
      <div>
        <div style={{ display: 'flex', width: 'auto', height: '40px', alignItems: 'center', minWidth:'320px'}}>
          <button onClick={clickHandler}>Toggle message</button>
          {toggle && <h2>Welcome to Little Lemon.</h2>}
        </div>
      </div>
    </div>
  )
}
export default UseEffect