import Imagebackground from '../components/imagebackgroud/Imagebackground'
import model3 from '../assets/model-3.jpg'
import Imagebackgroundnotext from '../components/imagebackgroundnotext/Imagebackgroundnotext'
import front1 from '../assets/model-3in.jpg'
import front2 from '../assets/model3-interior.webp'
import Imagegrid from '../components/imagegrid/Imagegrid'

export default function Model3page() {
  return (
    <div className="content">
      <section className="section">
        <Imagebackground
          header="MODEL-3"
          description="View Inventory"
          background={model3}
        />
      </section>
      <section className="section">
        <Imagebackgroundnotext background={front1} />
      </section>
      <section className="section">
        <Imagebackgroundnotext background={front2} />
      </section>
      <section className="section">
        <Imagegrid
          image1={front1}
          image2={model3}
          text1="Stay Connected

        Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
          text2="Sublime Sound

          A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
        />
      </section>
    </div>
  )
}
