import React from 'react'
import Button from '../../Button'

export const Spy = () => {
  return (
    <div className='bg-[#4335DE] text-center flex flex-col gap-8 py-14 text-white'>
        <h1 className='text-[34px] font-extrabold'>Is someone spying on your phone?</h1>
        <p>Find out with Certo</p>
        <div className="md:flex gap-12 mx-auto">
          <Button bgColor="#FFC247" text="get Certo  iPhone" imageSrc="/images/arrow.png" TextColor='#000'/>
          <Button text="get Certo for Android" borderColor="white" TextColor='white'/>
          </div>
    </div>
  )
}
