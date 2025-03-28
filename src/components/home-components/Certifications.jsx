import React, { useState } from 'react';
import Heading from '../heading/Heading';

const CertificateLicense = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const certificates = [
        {
            src: '/certificates/INCORPORATION CERTIFICATE_page-0001.jpg',
            alt: 'Incorporation Certificate',
        },
        {
            src: '/certificates/ISO IEC 61439 -1-2020 - LAXMI ELECTROMECH PRIVATE LIMITED_page-0001.jpg',
            alt: 'ISO IEC Certificate',
        },
        {
            src: '/certificates/LAXMI ELECTROMECH EMS_page-0001.jpg',
            alt: 'EMS Certification',
        },
        {
            src: '/certificates/MSME CERTIFICATE_page-0001.jpg',
            alt: 'MESE Certification',
        },
    ];

    const openOverlay = (imgSrc) => {
        setSelectedImage(imgSrc);
        setLightboxOpen(true);
    };

    const closeOverlay = () => {
        setLightboxOpen(false);
    };

    return (
        <>
            <div className="bg-gray-100 py-2 w-full">
                <Heading startText="Our" endText="Certificates" />

                {/* Certificate Grid */}
                <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full px-4 lg:px-12 gap-4">
                    {certificates.map((cert, index) => (
                        <div key={index} className='flex justify-center items-center'>
                            <div
                                key={index}
                                className="border-4 border-blue-500 bg-white p-2.5 shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out w-[250px] cursor-pointer rounded-lg overflow-hidden"
                                onClick={() => openOverlay(cert.src)}
                            >
                                <img
                                    src={cert.src}
                                    alt={cert.alt}
                                    className="w-full h-auto rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[10000] transition-opacity duration-300 ease-in-out"
                    onClick={closeOverlay}
                >
                    {/* Close Button */}
                    <span
                        className="absolute top-5 right-7 text-white text-3xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
                        onClick={closeOverlay}
                    >
                        ×
                    </span>

                    {/* Enlarged Image */}
                    <img
                        src={selectedImage}
                        alt="Enlarged Image"
                        className="max-w-[80%] max-h-[80%] border-4 border-white shadow-[0_0_15px_white] rounded-lg transition-transform duration-300 ease-in-out scale-100"
                    />
                </div>
            )}
        </>
    );
};

export default CertificateLicense;
