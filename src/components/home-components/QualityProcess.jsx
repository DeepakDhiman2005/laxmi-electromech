// src/components/QualityProcess.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heading from '../heading/Heading';

const QualityProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const Arrow = () => (
    <span className="text-orange-500 mr-2">➤</span>
  );

  return (
    <section className="w-full px-4 md:px-8 py-3 bg-[linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.4)),url('/images/categoryBg.jpg')] bg-cover bg-center bg-fixed overflow-hidden">
      <div className='w-full flex justify-center items-center'>
        <Heading
          startText="Quality"
          endText="Processes"
          justify="start"
          pb={0}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-6">
        {/* QA Section - Animate from Left */}
        <div data-aos="fade-right">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">QUALITY ASSURANCE (QA):</h2>
          <ul className="space-y-1">
            <li className="flex items-start"><Arrow /><span><strong>ISO Certification:</strong> Adherence to ISO 9001 standards ensures consistent quality and continuous improvement in all processes.</span></li>
            <li className="flex items-start"><Arrow /><span><strong>Rigorous Inspections:</strong> Stringent quality checks from raw material procurement to final assembly of electrical panels and automation systems.</span></li>
            <li className="flex items-start"><Arrow /><span><strong>Automated Testing:</strong> Advanced automated systems minimize errors and enhance precision in panel manufacturing and EPC projects.</span></li>
          </ul>
        </div>

        {/* Image - Animate from Top */}
        <div className="flex justify-center p-4" data-aos="fade-up">
          <div className="relative rounded-full overflow-hidden">
            <img src="/images/quality-control.png" alt="Quality Control Process" className="w-full h-full" />
          </div>
        </div>

        {/* QC Section - Animate from Right */}
        <div data-aos="fade-left">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">QUALITY CONTROL (QC):</h2>
          <ul className="space-y-1">
            <li className="flex items-start"><Arrow /><span><strong>Batch Testing:</strong> Random sampling and testing of production batches to maintain high standards across all products.</span></li>
            <li className="flex items-start"><Arrow /><span><strong>Failure Analysis:</strong> Detailed investigation of defects to identify root causes and implement corrective actions.</span></li>
            <li className="flex items-start"><Arrow /><span><strong>Customer Feedback:</strong> Integration of client feedback to continually enhance our electrical solutions and services.</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;
