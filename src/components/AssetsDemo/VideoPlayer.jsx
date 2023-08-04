// npm i react-player
import ReactPlayer from 'react-player';

function VideoPlayer(props) {
  return (
    <>
      <ReactPlayer
        url={props.vidUrl}
        playing={false}
        volume={0.5}
      />
    </>
  )
}
export default VideoPlayer;