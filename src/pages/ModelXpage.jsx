// import Header from '../components/header/Header'
import Imagebackground from '../components/imagebackgroud/Imagebackground'
import modelx from '../assets/model-x.jpg'
import Imagebackgroundnotext from '../components/imagebackgroundnotext/Imagebackgroundnotext'
import front1 from '../assets/teslafront-modelx.webp'
import Imagegrid from '../components/imagegrid/Imagegrid'
import front2 from '../assets/modelx-interior.webp'
import front3 from '../assets/model-x1.jpg'

export default function ModelXpage() {
  return (
    <div className="content">
      <section className="section">
        <Imagebackground
          header="MODEL-X"
          description="View Inventory"
          background={modelx}
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
          image2={modelx}
          text1="Stay Connected

        Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
          text2="Sublime Sound

          A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
        />
      </section>
      <section className="section">
        <Imagebackgroundnotext background={front3} />
      </section>
    </div>
  )
}
