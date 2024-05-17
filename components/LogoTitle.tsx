import React from 'react'
import { Image } from 'react-native'

export function LogoTitle(): JSX.Element {
  return (
    <Image
      style={{ width: 50, height: 50, marginTop: 10 }}
      source={require('../assets/images/logo_um.png')}
    />
  )
}

// export default LogoTitle;
