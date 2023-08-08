import Advanced from '../../components/Advanced'
import ControlledComponent from "../../components/Advanced/ControlledComponent";
import Feedback from "../../components/Advanced/Feedback";
import MapAndKeys from "../../components/Advanced/mapAndKeys";
import Context from "../../components/Advanced/Context";
import HOOK from '../../components/Advanced/HOOK'
import UseReducer2useState from '../../components/Advanced/UseReducer2useState'
import RefHook from '../../components/Advanced/RefHook'
import FetchDemo from '../../components/FetchDemo'

import ComponentCompositionWithChildren from '../../components/Advanced/ComponentCompositionWithChildren'
import ManipulatingChildrenDynamicallyInJSX from '../../components/Advanced/ManipulatingChildrenDynamicallyInJSX'
import SpreadAttributes from '../../components/Advanced/SpreadAttributes'
import CrossCuttingConcerns from '../../components/Advanced/CrossCuttingConcerns'
import RenderProps from '../../components/Advanced/RenderProps'
import TestingLibraryAndJest from '../../tests/TestingLibraryAndJest.test.jsx'

function AdvancedReact() {
  return (
    <>

        {/* Another person: */}
        {/* <Advanced/> */}
        <div style={{ fontSize: '40px', fontWeight:'800', textAlign:'start'}}>Advanced</div>
        <div style={{width:'100vw', display:'flex', alignItems:'center', backgroundColor:'grey' }}>
          <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
            <div>通过 Array.map 动态生成 list (JSX)</div>
            <div>1. use  arr.map(...) to get a list</div>
            <div> 2. Keys in react list</div>
            <div> 3. about How to use a JSX table</div>
          </div>
          <MapAndKeys />
        </div>
        {/* Controlled Component:   component's state handles form data; Uncontrolled Components: DOM handles form data */}
        <div style={{ width: '100vw', backgroundColor: 'pink', paddingTop: '5px', paddingBottom:'5px' }}>
          <div style={{ border: '1px solid black',display:'flex', alignItems:'center' }}>
            <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
              <div>1. Controlled Component from a Uncontrolled Components</div>
              <div>2. How to use a JSX Form</div>
              <div>3. prevent default JSX Form events</div>
              <div>4. use local state and the onChange event</div>
            </div>
            <div>
              <div><ControlledComponent /></div>
              <div><Feedback /></div>
            </div>
          </div>
          <div style={{ border: '1px solid black',display:'flex', alignItems:'center',color:'blue', }}>
            <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
              Controlled Component vs Uncontrolled Components
            </div>
            <div style={{textAlign:'start'}}>
              <div>Controlled Component:   component's state handles form data;</div>
              <div>Uncontrolled Components: DOM handles form data</div>
            </div>
          </div>
        </div>

         {/* Props and State */}
          {/*
          Props: immutable --- pure function <===> useEffect
          State: allow react to determine when to rerender a component. Less is better. ---

          both: 1. plain JS project; 2. deterministic; 3. trigger render updates;
          // 1.
          // 2. deterministic: means a component always generate the same output from the same combination of props and state
          // 3. changes ---> render updates
        */}
        <div style={{width:'100vw',  backgroundColor:'grey' }}>
          <div style={{ border: '1px solid black',display:'flex', alignItems:'center',color:'blue', }}>
            <div style={{ width: '15%', borderRight:'1px solid black',marginRight:'15px', fontSize:'20px' }}>
              Props and State
            </div>
            <div style={{textAlign:'start'}}>
              <div>Props: immutable --- pure function  --》 useEffect</div>
              <div>State: allow react to determine when to rerender a component. Less is better. ---</div>
              <div>both: 1. plain JS project; 2. deterministic; 3. trigger render updates;</div>
              <div> // 1.</div>
              <div>// 2. deterministic: means a component always generate the same output from the same combination of props and state</div>
              <div>// 3. changes 《---》 render updates</div>
            </div>
          </div>
        </div>

        {/* React.Context */}
        {/* when a certain type of date is very needed by many component within a app (Globe State), using props is not always efficitive  ---> Context */}
        {/* Context---deal with----Props drilling problem(mentioned above) */}
        {/* Recommend: props and state is better, date would be easy to follow in this way. */}
        <div style={{width:'100vw',backgroundColor:'pink' }}>
          {/* <div style={{ width: '45%', borderRight:'1px solid black',marginRight:'15px' }}>
            <div>React.Context</div>
            <div>when a certain type of date is very needed by many component within a app (Globe State), using props is not always efficitive  ---》 Context </div>
            <div>Context---deal with----Props drilling problem(mentioned above) </div>
            <div>Recommend: props and state is better, date would be easy to follow in this way.</div>
          </div>
          <div style={{ backgroundColor: 'lightblue' }}> <Context /></div> */}

          <div style={{ border: '1px solid black',display:'flex', alignItems:'center'}}>
            <div style={{ width: '15%', borderRight:'1px solid black',marginRight:'15px', fontSize:'20px' }}>
            <div>React.Context</div>
            </div>
            <div style={{ backgroundColor: 'lightblue' }}> <Context /></div>
          </div>
          <div style={{ border: '1px solid black',display:'flex', alignItems:'center',color:'blue', }}>
            <div style={{ width: '10%', borderRight:'1px solid black',marginRight:'15px', fontSize:'20px' }}>
              NOTE
            </div>
            <div style={{textAlign:'start'}}>
              <div>when a certain type of date is very needed by many component within a app (Globe State), using props is not always efficitive  ---》 Context </div>
              <div>Context---deal with----Props drilling problem(mentioned above) </div>
              <div>Recommend: props and state is better, date would be easy to follow in this way.</div>
            </div>
          </div>
        </div>

        {/* React HOOKs */}
        <div style={{width:'100vw', display:'flex', alignItems:'center', backgroundColor:'grey', boxSizing:'border-box' }}>
          <div style={{ width: '15%', borderRight:'1px solid black',marginRight:'15px', fontSize:'20px' }}>
            <div>React HOOKs</div>
          </div>
          {/* <div style={{backgroundColor:'lightblue'}}> <HOOK /></div> */}
          <div style={{border:'1px solid black', margin:'5px'}}> <HOOK /></div>
        </div>

        {/* Things to need to know before fetching data */}
        <FetchDemo />

        {/* Think useReducer as a super powered useState */}
        <UseReducer2useState />

        {/* ref Hook */}
        <RefHook />

        {/* react hooks and custom hooks */}
        {/* custom hooks: a collection of react hooks to do certain things */}


        {/*
          JSX --> Elements [Plain JavaScript Objects] & Component [Functions]
          --> the use of children prop: Containment & Specialization
          --> manipulating children dynamically: React.cloneElement & React.children
          --> Spread operator (...): Enables copying and merging
          --> To reuse common behavior: Crossing-cutting concerns
              --> Higher-order component: Enables powerful abstraction. Just a function takes a component and return a new component
              --> Render props: Special props; New props injected as function parameters dynamically

          React Testing Library --Jest
        */}
        {/* ComponentCompositionWithChildren */}
        <ComponentCompositionWithChildren />
        {/* ManipulatingChildrenDynamicallyInJSX */}
        <ManipulatingChildrenDynamicallyInJSX />
        {/* SpreadAttributes */}
        <SpreadAttributes />
        {/* CrossCuttingConcerns */}
        <CrossCuttingConcerns />
        {/* RenderProps */}
        <RenderProps />
        {/* TestingLibraryAndJest */}
        {/* <TestingLibraryAndJest/> */}

        {/* Course recap */}
        {/*

        */}
    </>
  )
};
export default AdvancedReact;