import Product from '../product/Product'
import './Products.css'

// import model3 from '../assets/model-3.jpg'
import model3 from '../../assets/model-3.jpg'
import models from '../../assets/model-s.jpg'
import modelx from '../../assets/model-x.jpg'
import modely from '../../assets/model-y.jpg'
import charger from '../../assets/tesla-charger.jpg'
import supercharger from '../../assets/supercharger.jpeg'
import cybertruck from '../../assets/cybertruck.webp'

const products = [
  {
    id: 1,
    image: model3,
    title: 'MODEL 3',
    description: 'description',
    price: 10000
  },
  {
    id: 2,
    image: models,
    title: 'MODEL S',
    description: 'description',
    price: 20000
  },
  {
    id: 3,
    image: modelx,
    title: 'MODEL X',
    description: 'description',
    price: 25000
  },
  {
    id: 4,
    image: modely,
    title: 'MODELY',
    description: 'description',
    price: 30000
  },
  {
    id: 5,
    image: charger,
    title: 'EV charger',
    description: 'description',
    price: 30000
  },
  {
    id: 6,
    image: supercharger,
    title: 'Super Charger',
    description: 'description',
    price: 45000
  },
  {
    id: 7,
    image: cybertruck,
    title: 'CyberTruck',
    description: 'description',
    price: 100000
  }
]
export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  )
}
