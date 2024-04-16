// import Header from '../components/header/Header'

import Homesectionvideo from '../components/homesectionvideo/Homesectionvideo'
import Imagebackground from '../components/imagebackgroud/Imagebackground'
import models from '../assets/model-s.jpg'
import modelx from '../assets/model-x.jpg'
import model3 from '../assets/model-3.jpg'
import modely from '../assets/model-y.jpg'
import cybertruck from '../assets/cybertruck.webp'

export default function HomePage() {
  return (
    <div className="content">
      <section className="section">
        <Homesectionvideo />
      </section>
      <section className="section">
        <Imagebackground
          header="MODEL-3"
          description="View Inventory"
          background={model3}
        />
      </section>
      <section className="section">
        <Imagebackground
          header="MODEL-S"
          description="View Inventory"
          background={models}
        />
      </section>
      <section className="section">
        <Imagebackground
          header="MODEL-X"
          description="View Inventory"
          background={modelx}
        />
      </section>
      <section className="section">
        <Imagebackground
          header="MODEL-Y"
          description="View Inventory"
          background={modely}
        />
      </section>
      <section className="section">
        <Imagebackground
          header="Cyber Truck"
          description="View Inventory"
          background={cybertruck}
        />
      </section>
    </div>
  )
}
