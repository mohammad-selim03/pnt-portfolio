import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ProjectsLInks from "./ProjectsLInks";
import img1 from "../assets/images/project1.png";
import img2 from "../assets/images/project2.png";
import img3 from "../assets/images/project3.png";
import img4 from "../assets/images/project4.png";
import img5 from "../assets/images/project5.png";

const Project = () => {
  return (
    <Container id="project" className="py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="mt-10 flex flex-col items-center justify-center gap-28">
        {/* Project One */}
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* Image */}
          <a
            href="https://fruits-front-end.vercel.app/"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={img5}
              alt="project5 img"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Fruits World Full Stack
              </h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lg:-mr-16">
              A full functional Foods web app where an user can buy their
              products with secure online payments.{" "}
              <span className="text-designColor">An admin</span> can manage
              all the users profile and products{" "}
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>React JS</li>
              <li>Node JS</li>
              <li>Firebase Authenticatioin</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectsLInks
              link="https://fruits-front-end.vercel.app/"
              github="https://github.com/selimnill/Fruits-World"
            />
          </div>
        </div>
        {/* Project Two */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <a
            href="https://nill-brainwave.vercel.app/"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={img1}
              alt="project img"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Brain Wave</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md">
              An excellent user friendly front end web app. Where are some
              amazing animation and transition. And it's full of responsive{" "}
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>React JS</li>
              <li>Javascript</li>
              <li>Framer Motion</li>
              <li>Tailwind CSS</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectsLInks
              link="https://nill-brainwave.vercel.app/"
              github="https://github.com/selimnill/brainwave"
            />
          </div>
        </div>
        {/* Project Three */}
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* Image */}
          <a
            href="https://air-travel-ltd.netlify.app/"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={img2}
              alt="project2 img"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Traveling Website Full Stack
              </h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lg:-mr-16">
              A full functional Travellig web app where an user can book their
              flite with secure online payments.{" "}
              <span className="text-designColor">With admin</span> can manage
              all the users profile and flite{" "}
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>React JS</li>
              <li>Node JS</li>
              <li>Firebase Authenticatioin</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectsLInks
              link="https://air-travel-ltd.netlify.app/"
              github="https://github.com/selimnill/air-travel"
            />
          </div>
        </div>
        {/* Project Four */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <a
            href="https://co-ca.netlify.app/"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img src={img4} alt="coca" className="w-full h-full object-cover" />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Coca Stock Experience</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md">
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with{" "}
              <span className="text-textGreen">O-auth</span> and then make the
              purchage using <span className="text-designColor">stripe</span>.
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>React JS</li>
              <li>Rest API</li>
              <li>Tailwind CSS</li>
              <li>Netlify Deployment</li>
            </ul>
            <ProjectsLInks
              link="https://co-ca.netlify.app/"
              github="https://github.com/selimnill/coca"
            />
          </div>
        </div>
        {/* Project Five */}
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* Image */}
          <a
            href="https://electro-shop-frontend.vercel.app/"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={img3}
              alt="project2 img"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Traveling Website Full Stack
              </h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lg:-mr-16">
              A full functional Travellig web app where an user can book their
              flite with secure online payments.{" "}
              <span className="text-designColor">With admin</span> can manage
              all the users profile and flite{" "}
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>React JS</li>
              <li>Node JS</li>
              <li>Firebase Authenticatioin</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectsLInks
              link="https://electro-shop-frontend.vercel.app/"
              github="https://github.com/selimnill/electro-shop"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
