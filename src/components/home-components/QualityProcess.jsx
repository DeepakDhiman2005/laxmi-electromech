// src/components/QualityProcess.jsx
import React from 'react';
import Heading from '../heading/Heading';

const QualityProcess = () => {
  const Arrow = () => {
    return <>
      <span className="text-orange-500 mr-2">➤</span>
    </>
  }
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8 py-1 bg-white">
      {/* Left Section: Text Content */}
      <div className="md:w-1/2 p-4">
        <Heading
          startText="Quality"
          endText="Processes"
          justify="start"
          pb={1}
        />

        {/* Quality Assurance Section */}
        <div className="mb-2">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">QUALITY ASSURANCE (QA):</h2>
          <ul className="space-y-1">
            <li className="flex items-start">
              <Arrow />
              <span>
                <strong>ISO Certification:</strong> Adherence to ISO 9001 standards ensures consistent quality and continuous improvement in all processes.
              </span>
            </li>
            <li className="flex items-start">
              <Arrow />
              <span>
                <strong>Rigorous Inspections:</strong> Stringent quality checks from raw material procurement to final assembly of electrical panels and automation systems.
              </span>
            </li>
            <li className="flex items-start">
              <Arrow />
              <span>
                <strong>Automated Testing:</strong> Advanced automated systems minimize errors and enhance precision in panel manufacturing and EPC projects.
              </span>
            </li>
          </ul>
        </div>

        {/* Quality Control Section */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">QUALITY CONTROL (QC):</h2>
          <ul className="space-y-1">
            <li className="flex items-start">
              <Arrow />
              <span>
                <strong>Batch Testing:</strong> Random sampling and testing of production batches to maintain high standards across all products.
              </span>
            </li>
            <li className="flex items-start">
              <Arrow />
              <span>
                <strong>Failure Analysis:</strong> Detailed investigation of defects to identify root causes and implement corrective actions.
              </span>
            </li>
            <li className="flex items-start">
              <Arrow />
              <span>
                <strong>Customer Feedback:</strong> Integration of client feedback to continually enhance our electrical solutions and services.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section: Graphic */}
      <div className="md:w-1/2 flex justify-center p-4">
        <div className="relative">
          {/* Circular Background */}
          <div className="rounded-full flex items-center justify-center">
            <img src="/images/quality-control.png" alt="Quality Control Process" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityProcess;