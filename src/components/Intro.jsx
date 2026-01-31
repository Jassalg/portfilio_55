import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col gap-3 w-101.5'>
        <h3 className='text-[#FDC435] text-[20px]'>UI/UX Designer</h3>
        <h1 className='text-[38px] font-bold w-[73%] '>Hello,  my name is Tanish jassal</h1>
        <p className='text-[20px] mt-5 w-[73%]'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
        <div className='flex gap-3 mt-5'>
            <button className='h-10.75 w-28.75 bg-[#FDC435] rounded-md'>Projects</button>
        <button className='h-10.75 w-28.75 border rounded-md'>LinkedIn</button>
        </div>
    </div>
  )
}

export default Intro