import ControlledComponent from "./ControlledComponent";
import Feedback from "./Feedback";
import MapAndKeys from "./mapAndKeys";

/*
  1. use  arr.map(...) to get a list
  2. Keys in react list
*/
function Advanced(props) {
  return (
    <div>
      <MapAndKeys />
      {/* Controlled Component:   component's state handles form data; Uncontrolled Components: DOM handles form data */}
      <ControlledComponent />
      <Feedback />
      {/* Props and State */}
      {/*
        Props: immutable
        State: allow react to determine when to rerender a component. Less is better.
      */}

      {/* React.Context */}

    </div>
  )
}
export default Advanced;