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
    <div className='flex flex-col items-center mb-5 bg-black box-border'>
        <img src={imglink} alt='StayHereLah'/>
        <h2 className='text-xl'>
            {title}
        </h2>
        <h3>
            {date}
        </h3>
        <p>
        {desc}
        </p>
    </div>
  )
}

export default Project