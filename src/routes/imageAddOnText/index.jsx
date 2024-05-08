// 尝试一下截图
/*
  网页版图片+文字而后叠加生成图片，无水印的平台—— 没有实现：
  • 引入图片 - - OK
  • 引入文字 - - OK
  • 编辑文字样式
  • 裁剪（有开源）https://juejin.cn/post/7157151914667442207
  • 保存到本地
*/
import myImage from '../../assets/desmos.jpeg';

function ImageAddOnText() {
  return (
    <div>
      <div>imageAddOnText</div>
      <div>imageAddOnText</div>
      <div>imageAddOnText</div>
      <div>imageAddOnText</div>
      <div>imageAddOnText</div>
      <div>imageAddOnText</div>
      <div>imageAddOnText</div>
      <div>imageAddOnText</div>
      <div className='myImage bg-blue-500'>
        <img src={myImage} alt="" />
        <span className='fixed top-[225px] left-[30px]'>123123</span>
      </div>
    </div>
  )
 }
export default ImageAddOnText;