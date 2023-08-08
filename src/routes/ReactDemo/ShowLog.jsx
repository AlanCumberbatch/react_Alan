// 这个 component：
/*
  一个弹窗，
  里面是轮播图，每一个都包括 一张图片和自己曾经写的英语说明
*/
function ShowLog() {
  const dialogWrapClassName = "fixed top-0 left-0  w-full h-full flex items-center justify-center";
  const dialogClassName = "bg-grey-500 w-4/5 h-4/5 flex flex-row";

  return (
    <div className={dialogWrapClassName}>
      <div className={dialogClassName}>
        <div className="border-2 w-2/5">111</div>
        <div className="border-2 w-3/5">222</div>
      </div>
    </div>
  )
}
export default ShowLog;