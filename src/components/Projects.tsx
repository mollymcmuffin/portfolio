import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div className='text-white bg-[#252A34] p-5'>
        <h1 className='text-center text-4xl'>Projects</h1>
        <h2 className='text-center'>Personal projects I have worked on</h2>
        <Project title={'StayHereLah'} desc = {"A platform to streamline the planning process of purchasing a BTO in Singapore as the current rules and regulations provided by HDB can be a hassle and confusing for first time buyers."} imglink={"/images/stayherelah.png"} date = {"Oct - Nov 2022"}/>
        <Project title={'Clothing E-Commerce'} desc = {"Developed a full-stack web application using React with Styled-components in the front-end and Express.js with MongoDB in the back-end. It uses JWT tokens to authenticate and authorize users, instead of the traditional approach of having to store session within a database."} imglink={"/images/ecommerce.png"} date = {"July 2022 - July 2022"}/>
        <Project title={'Idle Tidle Band Page'} desc ={"Developed a front-end web application from scratch using NextJS with TailwindCSS as styling for a friend’s band. This web app serves as an alternative to LinkTree with additional features such as integration of YouTube API to grab the latest video from the band’s channel. The web app is hosted on Vercel."}imglink={"/images/idletidal.png"} date = {"June 2022 - June 2022"}/>
    </div>
    
  )
}

export default Projects