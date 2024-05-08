import RandomImg from "./RandomImg"
import LanguageTextarea from "./LanguageTextarea"
import { useState } from "react";

function ReactDemo() {
  // 左侧 save 和 右侧的导出 同一份数据
  // 这个数据存本地一份，方便后续复习----至于其他的想法再说 --- 如果目前只是存本地，那就先存本地的markdown里面吧
  // 还是需要存成对象，然后查看的时候用某种方式查看
  const [data, setData] = useState([]);// [ {img:... , english:... , }, {}, ... ]
  const [imageUrl, setImageUrl] = useState('');
  return (
    <div className="bg-white w-screen h-screen pt-[32px] text-black-500 flex flex-col xs:flex-row">
      {/* 这里我就搞那个吧，随机出来一个图片，然后练习英语的那个 */}
      {/* <h2>R Demo</h2> */}
      <div className="bg-slate-100 border-2 border-solid xs:w-2/5 w-full xs:h-full h-1/2">
        {/* Image --- show a random image */}
        JavaScript HTMl CSS
        {/* <img srcSet="@/assets/desmos.jpeg" alt="" srcset="" /> */}
        <RandomImg imageUrl={imageUrl} setImageUrl={setImageUrl} />
      </div>
      <div className="bg-slate-100 border-2 border-solid xs:w-3/5 w-full xs:h-full h-1/2">
        {/* Language */}
        <LanguageTextarea imageUrl={imageUrl} data={data} onSave={setData} />
      </div>
    </div>
  )
}
export default ReactDemo;