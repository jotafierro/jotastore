import 'boxicons'

import './CartWidget.scss'

const CardWidget = ({ qty }) => {
  return (
    <div className='card-container'>
      <box-icon
        color='#61C7D2'
        name='cart'
        size='md'
        />
      <span className='card-container__badge'>{qty}</span>
    </div>
  )
}

export default CardWidget
