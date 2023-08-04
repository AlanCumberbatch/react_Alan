import { useState } from "react";

function AllRules() {
  const [petName, setPetName] = useState('Fluffy');

  function nameLooper() {
    if (petName == 'Fluffy') {
      setPetName('Rexy');
    } else if (petName == 'Rexy') {
      setPetName('Gizmo');
    } else if (petName == 'Gizmo') {
      setPetName('Fluffy');
    }
  }

  return (
    <div style={{border:'1px solid black'}}>
      <h2>RulesOfHOOKs</h2>
      <div>
        <h3>I'm thinking to name my pet {petName}</h3>
        <button onClick={nameLooper}>Pick a new name</button>
      </div>
      <div style={{color:'#FEFEFE', textAlign:'start'}}>
        <div>"const [petName, setPetName] = useState('Fluffy');</div>
        <div>'petName' could be used  wherever u need in current function/component</div>
        <div>'setPetName' could be used wherever u need in current function/component</div>
      </div>
    </div>
  )
}
export default AllRules;