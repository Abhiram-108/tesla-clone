// import Header from '../components/header/Header'

import Imagebackground from '../components/imagebackgroud/Imagebackground'
import models from '../assets/model-s.jpg'
import Imagebackgroundnotext from '../components/imagebackgroundnotext/Imagebackgroundnotext'
import front1 from '../assets/model-sin.jpg'
import front2 from '../assets/models-in2.jpg'
import Imagegrid from '../components/imagegrid/Imagegrid'

export default function ModelSpage() {
  return (
    <div className="content">
      <section className="section">
        <Imagebackground
          header="MODEL-S"
          description="View Inventory"
          background={models}
        />
      </section>
      <section className="section">
        <Imagebackgroundnotext background={front2} />
      </section>
      <section className="section">
        <Imagebackgroundnotext background={front1} />
      </section>
      <section className="section">
        <Imagegrid
          image1={front1}
          image2={models}
          text1="Stay Connected

        Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
          text2="Sublime Sound

          A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
        />
      </section>
    </div>
  )
}
