import AllRules from "./AllRules";

function RulesOfHOOKs() {
  return (
    <div style={{border:'5px solid black'}}>
      <h1>RulesOfHOOKs</h1>
      {/* 1. all the rules of hooks in React */}
      <AllRules/>
      {/* 2. Call hooks at the top level and form React functions: before return station; outside loops、conditions or nested functions */}
      <h1>Call hooks at the top level and form React functions</h1>
      <h3>❗️<span style={{color:'red', fontWeight:'900'}}>NOT</span>：before return station; outside loops、conditions or nested functions</h3>

      {/* A. only call hooks from a React component function */}
      {/* B. only call hooks at the top level of a React component function */}
      {/* C. allowed call multiple state or effect hooks */}
      {/* D. always make the multiple hook calls in the same sequence */}
    </div>
  )
}
export default RulesOfHOOKs;