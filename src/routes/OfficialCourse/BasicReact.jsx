import Heading from '../../components/Heading'
import Props2 from '../../components/Props2'
import Events from '../../components/Events'
import Toggler from '../../components/Toggler'
import InternalStyle from '../../components/InternalStyle'
import ContentAPI from '../../components/ContentAPI'
import ReducerHooks from '../../components/ReducerHooks'
import RouterDemo from '../../components/RouterDemo'
import AssetsDemo from '../../components/AssetsDemo'
import Calculator from '../../components/Calculator'
import { useState } from 'react'

function BasicReact() {
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
    </>
  )
};
export default BasicReact;