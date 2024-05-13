import React from 'react'
import Minusbutton from './minusbutton'
import Plusbutton from './plusbutton'

const Buttoncontainer = () => {
  return (
    <Plusbutton increase= {increase} />
    <Minusbutton decrease= {decrease} />
  )
}

export default Buttoncontainer