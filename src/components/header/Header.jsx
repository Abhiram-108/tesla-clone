import { useNavigate } from 'react-router-dom'
import './Header.css'
// import { useState } from 'react'
// import Sidebar from '../sidebar/Sidebar'
// import Backdrop from '../backdrop/Backdrop'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useRecoilValue } from 'recoil'
import { cartstate } from '../../global-state/cartstate'

export const navElements = [
  { label: 'TESLA', route: '', style: { marginRight: 'auto' } },
  { label: 'Model S', route: 'model_s' },
  { label: 'Model X', route: 'model_x' },
  { label: 'Model 3', route: 'model_3' },
  { label: 'Model Y', route: 'model_y' },
  { label: 'Cyber Truck', route: 'cybertruck' },
  { label: 'Shop', route: 'shop' },
  { label: <ShoppingCartIcon />, route: 'cart', style: { marginLeft: 'auto' } },
  { label: 'Menu', route: null }
]

export default function Header({ setShowsidebar }) {
  const navigate = useNavigate()
  const cartitems = useRecoilValue(cartstate)

  // const [showSidebar, setShowsidebar] = useState(false)
  return (
    <>
      <nav>
        <ul className="headerList">
          {navElements.map(({ label, route, style }) => {
            if (route === 'cart') {
              return (
                <li
                  key={route}
                  style={style}
                  onClick={() => {
                    navigate(`${route}`)
                  }}
                >
                  <span className="cart-items">{cartitems.length}</span>
                  {label}
                </li>
              )
            }
            return (
              <li
                style={style}
                key={label}
                onClick={() => {
                  if (label === 'Menu') {
                    setShowsidebar(true)
                  } else {
                    navigate(`/${route}`)
                  }
                }}
              >
                {label}
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
