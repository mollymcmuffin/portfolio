import React from "react";
import Project from "./Project";
import Tech from "./Tech";

const Projects = () => {
  return (
    <div className="text-white bg-[#252A34] p-5 laptop:px-72">
      <h1 className="text-4xl text-center">Projects</h1>
      <h2 className="mb-6 text-base text-center">
        Personal projects I have worked on
      </h2>
      <div className="flex flex-col gap-2 mb-8">
        <Project
          title={"StayHereLah"}
          desc={
            "A platform to streamline the planning process of purchasing a BTO in Singapore as the current rules and regulations provided by HDB can be a hassle and confusing for first time buyers."
          }
          imglink={"/images/stayherelah.png"}
          date={"Oct - Nov 2022"}
        />
        <div className="flex justify-start gap-6 p-2 bg-slate-500 rounded-[8px] box-border mb-6">
          <Tech imglink={"images/reactlogo.svg"} title={"React"} />
          <Tech
            imglink={"images/styledcomponentslogo.svg"}
            title={"Styled-Components"}
          />
          <Tech imglink={"images/firebaselogo.svg"} title={"Firebase"} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-8">
        <Project
          title={"Clothing E-Commerce"}
          desc={
            "A full-stack web application using React with Styled-components in the front-end and Express.js with MongoDB in the back-end. It uses JWT tokens to authenticate and authorize users, instead of the traditional approach of having to store session within a database."
          }
          imglink={"/images/ecommerce.png"}
          date={"July 2022 - July 2022"}
        />
        <div className="flex justify-start gap-6 p-2 mb-8 bg-slate-500 rounded-[8px] box-border">
          <Tech imglink={"images/reactlogo.svg"} title={"React"} />
          <Tech
            imglink={"images/styledcomponentslogo.svg"}
            title={"Styled-Components"}
          />
          <Tech imglink={"images/expresslogo.svg"} title={"ExpressJS"} />
          <Tech imglink={"images/jwtlogo.svg"} title={"JWT"} />
          <Tech imglink={"images/reduxlogo.svg"} title={"Redux"} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-6 ">
        <Project
          title={"Idle Tidle Band Page"}
          desc={
            "Built a front-end web application from scratch using NextJS with TailwindCSS as styling for a friend’s band. This web app serves as an alternative to LinkTree with additional features such as integration of YouTube API to grab the latest video from the band’s channel. The web app is hosted on Vercel."
          }
          imglink={"/images/idletidal.png"}
          date={"June 2022 - June 2022"}
        />
        <div className="box-border flex flex-wrap justify-start gap-6 p-2 mb-6 bg-slate-500 rounded-[8px]">
          <Tech imglink={"images/reactlogo.svg"} title={"React"} />
          <Tech imglink={"images/nextjs.svg"} title={"NextJS"} />
          <Tech imglink={"images/tailwindcsslogo.svg"} title={"Tailwind"} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
