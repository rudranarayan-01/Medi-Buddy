import Image from 'next/image'
import React from 'react'

function AppHeader() {
  return (
    <div>
      <Image src={"/logo.svg"} alt='header logo' height={120} width={180} />
    </div>
  )
}
 
export default AppHeader 