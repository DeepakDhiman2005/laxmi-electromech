import React from 'react'
import Banner from '../../components/banner/Banner'
import OurServices from './services/OurServices'
// import LatestBlog from './blogs/LatestBlog'
import OurMissionPage from './ourmission/OurMissionPage'
import AboutSection from '../../components/home-components/AboutSection'
import ProductCategoriesSection from '../../components/home-components/ProductCategoriesSection'
import WhyChooseUs from '../../components/home-components/WhyChooseUs'
import Certifications from '../../components/home-components/Certifications'
import ClientTestimonials from '../../components/home-components/ClientTestimonials'
import Clientele from '../../components/home-components/Clientele'
import FAQs from '../../components/home-components/FAQs'
import { Title } from 'react-head'
import WelcomeMessageSection from '../../components/home-components/WelcomeMessageSection'
import QualityProcess from '../../components/home-components/QualityProcess'
import PlantAndMachinery from '../../components/home-components/PlantAndMachinery'
import License from '../../components/home-components/License'
import Introduction from '../../components/home-components/Introduction'
import HomeCards from '../../components/home-components/HomeCards'
import OurProjectsSection from '../../components/home-components/OurProjectsSection'
import GallerySection from '../../components/home-components/GallerySection'
import LaserCuttingSection from '../../components/home-components/LaserCuttingSection'

const Home = () => {
    return (
        <>
            <Title>Laxmi Electromech Pvt. Ltd.</Title>
            <Introduction />
            {/* <Banner /> */}
            <HomeCards />
            <AboutSection />
            <Certifications />
            <GallerySection />
            <OurMissionPage />
            <LaserCuttingSection />
            <ProductCategoriesSection />
            <WelcomeMessageSection />
            <OurServices />
            <WhyChooseUs />
            {/* <PlantAndMachinery /> */}
            {/* <License /> */}
            <ClientTestimonials />
            <QualityProcess />
            {/* <LatestBlog /> */}
            <OurProjectsSection />
            <FAQs />
            <Clientele />
        </>
    )
}

export default Home;