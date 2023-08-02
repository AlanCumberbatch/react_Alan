import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Heading from './commponents/Heading'
import Props2 from './commponents/Props2'
import Events from './commponents/Events'
import Toggler from './commponents/Toggler'
import ContentAPI from './commponents/ContentAPI'
import ReducerHooks from './commponents/ReducerHooks'
import RouterDemo from './commponents/RouterDemo'
import AssetsDemo from './commponents/AssetsDemo'
import Calculator from './commponents/Calculator'
import InternalStyle from './commponents/InternalStyle'
import Advanced from './commponents/Advanced'
import ControlledComponent from "./commponents/Advanced/ControlledComponent";
import Feedback from "./commponents/Advanced/Feedback";
import MapAndKeys from "./commponents/Advanced/mapAndKeys";
import Context from "./commponents/Advanced/Context";
import HOOK from './commponents/Advanced/HOOK'
import FetchDemo from './commponents/FetchDemo'
import UseReducer2useState from './commponents/Advanced/UseReducer2useState'
import RefHook from './commponents/Advanced/RefHook'
import ComponentCompositionWithChildren from './commponents/Advanced/ComponentCompositionWithChildren'
import ManipulatingChildrenDynamicallyInJSX from './commponents/Advanced/ManipulatingChildrenDynamicallyInJSX'
import SpreadAttributes from './commponents/Advanced/SpreadAttributes'
import CrossCuttingConcerns from './commponents/Advanced/CrossCuttingConcerns'

//


function App() {
  const [count, setCount] = useState(0);
  const data = new Date();

  const onClick = () => {
    console.log("Clicked");
  };
  const onBtnClick = () => {
    console.log("count:",count);
  };

  return (
    <>
      <h1>Vite + React</h1>
      {/* Props 传值 + 通过事件在 组件内部更改 Props 的值 + useState 的使用 */}
      <div style={{width:'100vw', display:'flex', alignItems:'center', backgroundColor:'grey' }}>
        <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
          <div>Props 传值</div>
          <div>通过事件在 组件内部更改 Props 的值</div>
          <div>useState 的使用</div>
        </div>
        <Heading count={count} title="Heading_title" onClick={()=>{setCount(count+1);}}/>
      </div>
      {/* 通过Props传值给 ul list */}
      <div style={{width:'100vw', display:'flex', alignItems:'center', backgroundColor:'pink' }}>
        <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
          <div>通过Props传值给 ul list</div>
        </div>
        <Props2
          first='first'
          second='second'
          third='third'
          />
      </div>
      {/* InternalStyle */}
      <div style={{width:'100vw', display:'flex', alignItems:'center', backgroundColor:'grey' }}>
        <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
          <div>Internal Style 的使用</div>
        </div>
        <InternalStyle/>
      </div>
      {/* 更改 Props 的值后数据共享 */}
      <div style={{width:'100vw', display:'flex', alignItems:'center', backgroundColor:'pink', paddingTop:'5px', paddingBottom:'5px' }}>
        <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
          <div>通过事件在 组件内部更改 Props 的值</div>
          <div>更改 Props 的值后数据共享</div>
        </div>
        <Events number={count} addClick={()=>setCount(count+1)} onClick={onBtnClick} >Get count value</Events>
      </div>
      {/* Toggle: 根据传入的参数渲染不同的JSX */}
      <div style={{width:'100vw', display:'flex', alignItems:'center', backgroundColor:'grey' }}>
        <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
          <div>Toggle: 根据传入的参数渲染不同的JSX</div>
        </div>
        <Toggler data={data.toLocaleDateString()} />
        <Toggler />
      </div>
      {/* HOOKS */}
      {/* useState */}
      {/* TODO: [待]自己写一个HOOK */}
      <div style={{width:'100vw', display:'flex', alignItems:'center', backgroundColor:'pink' }}>
        <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
          <div>HOOKS --- useState</div>
        </div>
        <div></div>
      </div>

      {/* State Management: */}
      <div style={{ width: '100vw',  backgroundColor: 'grey', }}>
        <div style={{ border: '1px solid black', }}>
          <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
            <div>State Management:</div>
          </div>
          <div></div>
        </div>
        {/* State in react: Props, State */}
        <div style={{ border: '1px solid black', }}>
          <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
              <div>State in react: Props, State</div>
          </div>
          <div></div>
        </div>
        {/* A. state lit up/类比找最大公约数，或者是找最下公倍数 */}
        <div style={{ border: '1px solid black',display:'flex', alignItems:'center' }}>
          <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
              <span style={{fontWeight:'800'}}>A.</span> state lit up/类比找最大公约数，或者是找最下公倍数
          </div>
          <div>used as before</div>
        </div>
        {/* B. Context API：一组数据在一些components上共享？  ---- //TODO [待]HOW it works? */}
        <div style={{ border: '1px solid black',display:'flex', alignItems:'center' }}>
          <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
              <span style={{fontWeight:'800'}}>B.</span> Context API：一组数据在一些components上共享？
          </div>
          <div>
            <ContentAPI />
          </div>
        </div>
        {/* C. Reducer Hooks: 多个操作改变一组数据？ */}
        <div style={{ border: '1px solid black',display:'flex', alignItems:'center' }}>
          <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
              <span style={{fontWeight:'800'}}>C.</span> Reducer Hooks: 多个操作改变一组数据？
          </div>
          <div>
            <ReducerHooks />
          </div>
        </div>
        {/* Stateful vs Stateless */}
        {/*
          Stateful : State must be maintained to work a component
          Stateless: State not needed to work a component (exactly:don't save state by its own)
        */}
        <div style={{ border: '1px solid black',display:'flex', alignItems:'center',color:'blue', }}>
          <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
            Stateful vs Stateless
          </div>
          <div style={{textAlign:'start'}}>
            <div>Stateful : State must be maintained to work a component</div>
            <div>Stateless: State not needed to work a component (exactly:don't save state by its own)</div>
          </div>
        </div>
      </div>

      {/* Basic types of navigation */}
      {/* Linking and routing */}
      {/*
        import {BrowserRouter} from "react-router-dom"; // this could only be used in main.jsx
      */}
      <div style={{ width: '100vw', display: 'flex', alignItems: 'center', backgroundColor: 'pink' }}>
        <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
          <div>Basic types of navigation</div>
          <div>Linking and routing</div>
        </div>
        <div style={{flex:'1'}}><RouterDemo /></div>
      </div>

      {/* Assets in React Project: store, import, and work with */}
      {/* Audio and Video: Using Assets in React */}
      <div style={{width:'100vw',  backgroundColor:'grey' }}>
        <div style={{ border: '1px solid black',display:'flex', alignItems:'center',}}>
          <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
              <div>Assets in React Project: store, import, and work with</div>
              <div> Audio and Video: Using Assets in React</div>
          </div>
          <div>
            <AssetsDemo />
          </div>
        </div>
        {/*
          Public Folder     : if project could be compiled without these assets
          Src/Assets Folder : assets are imported by at less one component
        */}
        <div style={{ border: '1px solid black',display:'flex', alignItems:'center',color:'blue', }}>
          <div style={{ width: '35%', borderRight:'1px solid black',marginRight:'15px' }}>
            Notes
          </div>
          <div style={{textAlign:'start'}}>
            <div>Public Folder     : if project could be compiled without these assets</div>
            <div>Src/Assets Folder : assets are imported by at less one component</div>
          </div>
        </div>
      </div>

      {/* React Demo Project */}
      <div style={{ width: '100vw', display: 'flex', alignItems: 'center', backgroundColor: 'pink' }}>
        <div style={{ width: '15%', borderRight:'1px solid black',marginRight:'15px', fontSize:'35px' }}>
          React Demo Project
        </div>
        {/* <div style={{flex:'1'}}><Calculator /></div> */}
        <div><Calculator /></div>
      </div>

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

      {/* ComponentCompositionWithChildren */}
      <ComponentCompositionWithChildren />
      {/* ManipulatingChildrenDynamicallyInJSX */}
      <ManipulatingChildrenDynamicallyInJSX />
      {/* SpreadAttributes */}
      <SpreadAttributes />
      {/* CrossCuttingConcerns */}
      <CrossCuttingConcerns/>
    </>
  )
}

export default App
