import './Homesectionvideo.css'
import teslahomepage from '../../assets/tesla-homepage.mp4'
// import teslahomepage2 from '../../assets/tesla-video2.mp4'
export default function Homesectionvideo() {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={teslahomepage} type="video/mp4" />
      </video>
      {/* <video className="video-background" autoPlay muted loop>
        <source src={teslahomepage2} type="video/mp4" />
      </video> */}
      <div className="overlay">
        <div>
          <h1>Experience Tesla</h1>
          <h5>Schedule a demo drive Today</h5>
        </div>
        <div>
          <button>Demo Drive</button>
        </div>
      </div>
    </div>
  )
}
