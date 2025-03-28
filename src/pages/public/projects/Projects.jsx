import React from "react";
import Heading from "../../../components/heading/Heading";
import { Title } from "react-head";

const projects = [
    {
        id: 1,
        title: "Laser Cutting Machine",
        description: "A high-precision laser cutting system for metal fabrication.",
        image: "/images/product-images/fabrication-plant/1.png",
    },
    {
        id: 2,
        title: "CNC Press Brake",
        description: "Advanced CNC press brake for accurate sheet metal bending.",
        image: "/images/product-images/fabrication-plant/2.png",
    },
    {
        id: 3,
        title: "Metal Shaving Machine",
        description: "A heavy-duty machine for metal surface finishing.",
        image: "/images/product-images/fabrication-plant/3.png",
    },
    {
        id: 4,
        title: "Boulder Coating Plant",
        description: "An automated system for protective boulder coating.",
        image: "/images/product-images/fabrication-plant/7.png",
    },
];

const Projects = () => {
    return (
        <div className="py-3 px-4 lg:px-12">
            <Title>Our Projects</Title>
            <div className="mx-auto">
                <Heading startText="Our" endText="Projects" pb={1} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-lg p-4">
                            {/* Image Container with Fixed Size */}
                            <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-md">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mt-4">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
