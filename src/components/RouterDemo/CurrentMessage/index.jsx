import WeekDay from "./WeekDay";
import WeekEnd from "./Weekend";

function CurrentMessage() {
  const day = new Date().getDay();
  return (
    // <div style={{backgroundColor:"grey"}}>
    <div>
      { day >= 1 && day <= 5
        ? <WeekDay />
        : <WeekEnd />
      }
    </div>
  )
}
export default CurrentMessage;