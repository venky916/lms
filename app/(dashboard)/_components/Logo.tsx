import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image alt='LOGO' src={"logo.svg"} height={100} width={100}/>
  )
}

export default Logo
