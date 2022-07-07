import { Image } from 'react-native'
import React from 'react'
const Icon = ({source , width , height}) => {
  return (
    <Image source={source} resizeMode={'contain'} style={{width: width || 48, height: height|| 48 }} />
  )
}

export default Icon

