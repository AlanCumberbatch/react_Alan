import OfficialCourse from "./OfficialCourse"
import ReactDemo from "./ReactDemo"
import ForCertifyInCoursera from "./forCertifyInCoursera"
import InterviewPage from "./InterviewPage"
import ImageAddOnText from "./ImageAddOnText"
import { Link, Route, Routes } from "react-router-dom";
function Routers() {
  const linkBtnClassName = "border-2 p-[2px] rounded-md cursor-pointer";
  return (
    <>
      {/* <nav style={{ backgroundColor: "skyblue", display: "flex", justifyContent:'space-around'}}> */}
        <nav className="bg-blue-500/50  w-screen flex fixed top-0 left-0 h-[32px] items-center">
          <Link to="/" className="text-white basis-1/2"><span className={linkBtnClassName}>English Learning</span></Link>
          <Link to="/officialCourse" className="text-white basis-1/2"><span  className={linkBtnClassName}>Official Course</span></Link>
          <Link to="/incoursera" className="text-white basis-1/2"><span  className={linkBtnClassName}>forCertifyInCoursera</span></Link>
          <Link to="/interview" className="text-white basis-1/2"><span  className={linkBtnClassName}>InterviewPage</span></Link>
          <Link to="/imageAddOnText" className="text-white basis-1/2"><span  className={linkBtnClassName}>imageAddOnText</span></Link>
        </nav>
        <Routes>
          <Route path="/" element={ <ReactDemo/> } />
          <Route path="/officialCourse" element={ <OfficialCourse/> } />
          <Route path="/incoursera" element={ <ForCertifyInCoursera/> } />
          <Route path="/interview" element={ <InterviewPage/> } />
          <Route path="/imageAddOnText" element={ <ImageAddOnText/> } />
        </Routes>
    </>
  )
}
export default Routers;