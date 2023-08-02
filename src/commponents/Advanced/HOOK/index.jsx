import RulesOfHOOKs from "./RulesOfHOOKs";
import UseEffect from "./UseEffect";
import UseState from "./UseState";

function HOOK() {

  return (
    <>
      <h1> HOOK s</h1>
      <UseState />
      <UseEffect />
      {/* the rule of hooks */}
      {/* 1. all the rules of hooks in React */}
      {/* 2. Call hooks at the top level and form React functions */}

      {/* A. only call hooks from a React component function */}
      {/* B. only call hooks at the top level of a React component function */}
      {/* C. allowed call multiple state or effect hooks */}
      {/* D. always make the multiple hook calls in the same sequence */}
      <RulesOfHOOKs/>

    </>
  )
}
export default HOOK;