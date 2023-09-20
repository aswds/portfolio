import React from "react";
import { projectsList } from "../../static/projects/projects";
import AnimatedDiv from "../Animations/AnimatedDiv/AnimatedDiv";
import "./ProjectSection.scss";
import ProjectCard from "./components/ProjectCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const ProjectsSection: React.FC = () => {
  const slidePX = 300;
  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft += slidePX;
  };
  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft -= slidePX;
  };
  return (
    <div className="projects-section">
      <AnimatedDiv
        style={{
          alignSelf: "flex-start",
          alignItems: "flex-start",
          marginBottom: "5%",
        }}
      >
        <h2 className="projects-title">Projects</h2>
        <h6 className="projects-description">
          Here you'll find my projects i was working on
        </h6>
      </AnimatedDiv>
      <div
        id="slider"
        className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth rounded-lg shadow-md items-center flex scrollbar-hide"
        style={{ borderRadius: 40, paddingLeft: 70, paddingRight: 70 }}
      >
        <div className="absolute left-20 z-20" onClick={sliderLeft}>
          <MdChevronLeft
            className="cursor-pointer rounded-full bg-black"
            color="white"
            size={50}
          />
        </div>

        {projectsList?.map((project, i) => {
          return (
            <ProjectCard
              techUsed={project.techUsed}
              id={i}
              key={i}
              link={project.link}
              title={project.title}
              image={project.image}
              description={project.description}
            />
          );
        })}
        <div
          className="right-20 z-20 absolute"
          onClick={sliderRight}
          style={{}}
        >
          <MdChevronRight
            color="white"
            size={50}
            className="cursor-pointer rounded-full bg-black "
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
