import React, { useState } from 'react';
import Heading from '../heading/Heading';

const CertificateLicense = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const certificates = [
        { src: '/certificates/INCORPORATION CERTIFICATE_page-0001.jpg', alt: 'Incorporation Certificate' },
        { src: '/certificates/ISO IEC 61439 -1-2020 - LAXMI ELECTROMECH PRIVATE LIMITED_page-0001.jpg', alt: 'ISO IEC Certificate' },
        { src: '/certificates/LAXMI ELECTROMECH EMS_page-0001.jpg', alt: 'EMS Certification' },
        { src: '/certificates/MSME CERTIFICATE_page-0001.jpg', alt: 'MSME Certification' },
        { src: '/crpi/IP_CPRI_page-0001.jpg', alt: 'IP CPRI' },
        { src: '/crpi/SHT_CKT_CPRI_page-0001.jpg', alt: 'SHT CKT CPRI' },
        { src: '/crpi/TR_CPRI_page-0001.jpg', alt: 'TR CPRI' },
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
            <div className="bg-gray-100 py-8 w-full">
                <Heading startText="Our" endText="Certificates" />
                <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7  w-full px-4 lg:px-12 gap-6">
                    {certificates.map((cert, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <div
                                className="relative border-2 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out w-[260px] cursor-pointer overflow-hidden group"
                                onClick={() => openOverlay(cert.src)}
                            >
                                <img
                                    src={cert.src}
                                    alt={cert.alt}
                                    className="w-full h-auto rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <span className="text-white text-lg font-semibold">View Certificate</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[10000] transition-opacity duration-300 ease-in-out"
                    onClick={closeOverlay}
                >
                    <span
                        className="absolute top-5 right-7 text-white text-4xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
                        onClick={closeOverlay}
                    >
                        ×
                    </span>
                    <img
                        src={selectedImage}
                        alt="Enlarged Certificate"
                        className="max-w-[90%] max-h-[85%] border-4 border-white shadow-xl rounded-lg transition-transform duration-300 ease-in-out"
                    />
                </div>
            )}
        </>
    );
};

export default CertificateLicense;
