import OfficialCourse from "./OfficialCourse"
import ReactDemo from "./ReactDemo"
import { Link, Route, Routes } from "react-router-dom";
function Routers() {
  return (
    <>
      {/* <nav style={{ backgroundColor: "skyblue", display: "flex", justifyContent:'space-around'}}> */}
        <nav className="bg-blue-500/50  w-screen flex fixed top-0 left-0 h-[32px] items-center">
            <Link to="/" className="text-white basis-1/2">R Demo</Link>
            <Link to="/officialCourse" className="text-white basis-1/2">Official Course</Link>
        </nav>
        <Routes>
          <Route path="/" element={ <ReactDemo/> } />
          <Route path="/officialCourse" element={ <OfficialCourse/> } />
        </Routes>
    </>
  )
}
export default Routers;