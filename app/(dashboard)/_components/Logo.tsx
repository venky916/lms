import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image alt='LOGO' src={"/images/logo.svg"} height={100} width={100} className='w-24 h-auto' priority/>
  )
}

export default Logo
