import React from 'react'
import logo from "images/stayherelah.png"

type Props={
    title:string
    desc: string
    imglink:string
    date: string
}

const Project = ({title,desc,imglink, date}:Props) => {
  return (
    <div className='flex flex-col mb-10 bg-[#252A34] box-border gap-2'>
        <img src={imglink} alt={title}/>
        <h2 className='text-2xl'>
            {title}
        </h2>
        <h3 className='text-slate-400 italic text-lg'>
            {date}
        </h3>
        <p className='text-base'>
        {desc}
        </p>
    </div>
  )
}

export default Project