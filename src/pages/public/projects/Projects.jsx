
import React from 'react';
import Heading from '../../../components/heading/Heading';
import { useMediaQuery, useTheme } from '@mui/material';
import { Title } from 'react-head';

const Projects = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // Sample project image URLs (replace these with your actual project images)
    const projectImages = [
        'https://detricaelectromechanical.com/assets/img/service/Commercial-electrical-works.jpg',
        'https://5.imimg.com/data5/SELLER/Default/2021/9/HZ/EV/IF/129834044/electrical-contractors-500x500.jpg',
        "https://gpcest.com/wp-content/uploads/2022/05/electrical-1.jpg",
        "https://i0.wp.com/theconstructor.org/wp-content/uploads/2021/11/ft-pic.jpeg?fit=1000%2C667&ssl=1",
        "https://media.istockphoto.com/id/1469656864/photo/electrician-engineer-uses-a-multimeter-to-test-the-electrical-installation-and-power-line.jpg?s=612x612&w=0&k=20&c=h70UOpNbJYT5G2oGT-KUeIE3yXwEgsCpr25yR1rnGtU=",
        'https://tiimg.tistatic.com/fp/1/003/230/commercial-electrical-contractors-service-965.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEy0BhVmmxNx8Q9o8vXTaAcTgz5iOJi-SLpgvjLNJu7lbFFzg_AaX-NZ422I2h-QbPMxc&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQszInC63zuM9YcKPV8iPqNqwMcAKi96hI0vFPmrzrP-o2lo248jn6EuLkSP7nllN0AL8&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8LOWDzFbNj6hNXIJxRMis18aG8mt62lOwZQ3cfSSsyN3Ok1HExjSCIre8DmPWe0DVZY&usqp=CAU',
    ];

    return <>
        <Title>Our Projects</Title>
        <div className='w-auto h-auto bannerCard'>
            <a className="w-auto h-auto">
                <img src={isMobile ? "/banners/Our-Project-mobile.png" : "/banners/Our-project.png"} alt="image" className="w-auto" />
            </a>
        </div>

        <div className="bg-gray-100 py-3 px-4 sm:px-6 lg:px-8">
            {/* Main Heading */}
            <Heading startText="Our" endText="Projects" pb={2} />


            {/* Projects Grid */}
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                    >
                        <img
                            src={image}
                            alt={`Project ${index + 1}`}
                            className="w-full h-52 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    </>
};

export default Projects;