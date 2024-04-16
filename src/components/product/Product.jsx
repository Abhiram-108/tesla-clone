import './Product.css'
import { cartstate } from '../../global-state/cartstate'
import { useSetRecoilState } from 'recoil'

export default function Product(product) {
  const { image, title, description, price } = product
  const setcart = useSetRecoilState(cartstate)

  function addtocart() {
    setcart((prevcart) => [...prevcart, product])
  }

  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
      <button onClick={addtocart} className="product-button">
        Add to Cart
      </button>
    </div>
  )
}
