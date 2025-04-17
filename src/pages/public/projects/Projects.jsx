
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
        "https://i0.wp.com/theconstructor.org/wp-content/uploads/2021/11/ft-pic.jpeg?fit=1000%2C667&ssl=1",
        "https://media.istockphoto.com/id/1469656864/photo/electrician-engineer-uses-a-multimeter-to-test-the-electrical-installation-and-power-line.jpg?s=612x612&w=0&k=20&c=h70UOpNbJYT5G2oGT-KUeIE3yXwEgsCpr25yR1rnGtU=",
        'https://tiimg.tistatic.com/fp/1/003/230/commercial-electrical-contractors-service-965.jpg',
        'https://www.nyserda.ny.gov/-/media/Project/Nyserda/Images/Featured-Stories/All-About-Electrical-Panels/Home_Electrical_Panel_1000x400.jpg?h=400&w=1000&la=en&hash=6558699B59D1C39B595653F255D477E3',
        'https://cdn2.hubspot.net/hub/215943/file-778730081-png/images/E3-Panels/electrical-panel-design-software--Wire-your-panel--light.png',
        'https://t3.ftcdn.net/jpg/02/07/26/14/360_F_207261458_0Z1Dmzjr3eCoQetPiP5rTMTXI9q25Srw.jpg',
        'https://powerprojectsltd.com/wp-content/uploads/2017/06/panel_service.jpg',
        'https://wpower.in/images/switch-and-cable-joining-projects.jpg',
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