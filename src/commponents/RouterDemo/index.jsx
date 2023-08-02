import AboutMe from "./AboutMe";
import CurrentMessage from "./CurrentMessage";
import HomePage from "./HomePage";
import { Link, Route, Routes } from "react-router-dom";

function RouterDemo() {
  return (
      <div style={{marginTop:"20px",backgroundColor:"green"}}>
        <nav style={{ backgroundColor: "skyblue", display: "flex", justifyContent:'space-around'}}>
            Router Demo:
            {/* <a href="#">HomePage</a> */}
            {/* <a href="#">About Me</a> */}
            <Link to="/">HomePage</Link>
            <Link to="/about">About Me</Link>
            <Link to="/week">Week day OR Week end</Link>
        </nav>
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/about" element={ <AboutMe/> } />
          <Route path="/week" element={ <CurrentMessage/> } />
        </Routes>
      </div>
  )
}
export default RouterDemo;