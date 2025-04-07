import React from 'react'
import Nav from './Nav'
import { myContext } from '../reducers/SharedStore'
import { useContext } from 'react'

const Favourite = () => {
const {state}=useContext(myContext)

  return (
    <main className='h-screen w-full bg-slate-100 flex flex-col items-center'>
    <Nav/>
     <h1>my favourite</h1>
    {
     state && state.favs.map((f,index)=>{
      return (
   <img src={f} alt="" key={index}/>
      )
     })
    }
    </main>
  )
}

export default Favourite