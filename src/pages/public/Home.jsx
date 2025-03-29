import React from 'react'
import Banner from '../../components/banner/Banner'
import OurServices from './services/OurServices'
import LatestBlog from './blogs/LatestBlog'
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

const Home = () => {
    return (
        <>
            <Title>Laxmi Electromech Pvt. Ltd.</Title>
            <Banner />
            <AboutSection />
            <Certifications />
            <OurMissionPage />
            <ProductCategoriesSection />
            <WelcomeMessageSection />
            <OurServices />
            <WhyChooseUs />
            <QualityProcess />
            <PlantAndMachinery />
            {/* <License /> */}
            <ClientTestimonials />
            <Clientele />
            <LatestBlog />
            <FAQs />
        </>
    )
}

export default Home;