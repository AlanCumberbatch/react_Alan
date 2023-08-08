import { useEffect, useState } from "react";
import Button from "../../UIComponent/Button"
import MouseTracker from "../../UIComponent/MouseTracker"
import axios from 'axios';

function RandomImg(props) {
  const [mouseInfo, setMouseInfo] = useState("点击可刷新图片");
  const imageUrl = props.imageUrl;
  const setImageUrl = props.setImageUrl;

  const getRandomImage = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          client_id: 'AWynG5Kh62MpNLAtWQDgt1PXxF7yl0UTqJ38gx4_zTs', // 替换为你的Unsplash Access Key
          count: 1,
        },
      });
      const image = response.data[0];
      setImageUrl(image.urls.regular);
      setMouseInfo("点击可刷新图片")
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  const refreshImage = () => {
    if (mouseInfo != "点击可刷新图片") return;

    setMouseInfo("更新中 ... ")
    getRandomImage();
  };

  return (
    <div className="h-full">
      <div className="relative w-full h-full p-[15px] flex items-center  justify-center border-[1px] overflow-hidden" >
        {/* <MouseTracker className="absolute w-full h-full bg-grey-500/10  overflow-hidden" text={mouseInfo} onClick={refreshImage} > */}
          {/* <div className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] leading-[110px] text-start text-white p-[25px]  bg-black-500/60 rounded-full">Next Pic</div> */}
        {/* <MouseTracker className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] leading-[110px] text-start text-white p-[25px]  bg-black-500/60 rounded-full" text={mouseInfo} onClick={refreshImage} >Next Pic</MouseTracker> */}
        <MouseTracker className=" absolute bottom-[-30px] right-0 w-[100px] h-[100px] leading-[100px] text-end text-white p-[5px] bg-black-500/60 rounded-full"  onClick={refreshImage} >Next Pic</MouseTracker>
        <img src={imageUrl} className="max-w-full max-h-full" alt="" srcset="" />
      </div>
    </div>
  )
}
export default RandomImg;