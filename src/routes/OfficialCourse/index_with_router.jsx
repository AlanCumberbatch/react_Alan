import DropDowns from "../../UIComponent/DropDowns"
import SideBar from "../../UIComponent/SideBar"

import { Link, Outlet, Route, Routes} from "react-router-dom";
import AdvancedReact from './AdvancedReact';
import BasicReact from './BasicReact';


function OfficialCourse() {
  return (
    <>
      <div className=" w-screen h-screen pt-[32px] bg-grey-500">
        <BasicReact/>
        <AdvancedReact/>
      </div>
    </>
  )
}
export default OfficialCourse;