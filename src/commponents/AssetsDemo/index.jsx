import reactIcon from '../../assets/react.svg'
import VideoPlayer from './VideoPlayer';

function AssetsDemo() {
  const imgUrl = "https://camo.githubusercontent.com/179d66ab2b0321726c88a586c4ad38802e7113a3c98c6fd3f0156c01c98cfd14/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67";
  const vidUrl = "";
  return (
    <>
      {/* Image */}
      <img src={reactIcon} alt="reactIcon"  />
      {/* <img src={require('./assets/react.svg')} alt="reactIcon" /> */}{/* 应该是因为vite，所以用不了 */}
      <img src={imgUrl} alt="url image" width={36} />

      {/* Video */}
      {/* A. local video: <video src=""></video> */}
      {/* B. Embedded third-party video */}
      {/* C. npm package: frequency of updates + Github page:  react-player */}
      {/* <VideoPlayer vidUrl={vidUrl} /> */}
    </>
  )
}
export default AssetsDemo;