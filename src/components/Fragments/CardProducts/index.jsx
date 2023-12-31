import { Fragment } from 'react'
import Buttons from '../../Elements/Buttons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/slices/cartSlice'

const CardProducts = ({ children }) => {
  return (
    <Fragment>
      <div className="w-full max-w-xs flex flex-col justify-between bg-gray-800 border border-gray-700 rounded-lg ">
        {children}
      </div>
    </Fragment>
  )
}

const Header = ({ imgSrc, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <img
        src={imgSrc}
        alt="Sepatu Baru"
        className="p-8 rounded-l-lg h-60 w-full"
      />
    </Link>
  )
}

const limitsWords = (words, limit) => {
  const word = words.split(' ')
  return word.slice(0, limit).join(' ')
}

const Body = ({ title, children }) => {
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white mb-2">
          {limitsWords(title, 4)}
        </h5>
        <p className="text-sm text-white">{limitsWords(children, 20)}...</p>
      </a>
    </div>
  )
}

const Footer = ({ price, id }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-2xl font-bold text-white">
        Rp{' '}
        {price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}
      </span>
      <Buttons
        btnStyle="bg-blue-600 hover:bg-blue-700"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
        Add to Cart
      </Buttons>
    </div>
  )
}

CardProducts.Header = Header
CardProducts.Body = Body
CardProducts.Footer = Footer

export { limitsWords }
export default CardProducts
