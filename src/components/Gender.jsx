import React from 'react'
import { useState } from 'react'

const Gender = () => {
const [open,setOpen]=useState(false)

  return (
    <>
<div onClick={()=> setOpen(!open)} className='cursor-pointer'>Gender</div>
   {
    open && <ul className='transition-all absolute mt-[30%]
    rounded-lg shadow-md
    bg-gray-200 py-[20px] px-[10px] capitalize'>
    <li onClick={handlemale}>male</li>
    <li>female</li>
   </ul>
   }
    </>

  )
}

export default Gender