import React, { useState, useEffect } from "react";

interface Certificate {
  id: number;
  certificate: React.ReactNode;
}

interface CertificatesProps {
  certificates: Certificate[];
}

const Certificates = ({ certificates }: CertificatesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide for mobile (every 2.5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <>
      {/* Mobile View - Single certificate slider */}
      <div className="md:hidden w-full">
        <div className="flex justify-center items-center py-6 px-6">
          <div
            className="flex justify-center items-center transition-all duration-500"
            style={{ transform: 'scale(1)', transformOrigin: 'center center' }}
          >
            {certificates[currentIndex]?.certificate}
          </div>
        </div>
        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-2 flex-wrap px-4">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-4' : 'bg-zinc-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View - Continuous scroll */}
      <div className="hidden md:block logo-scroll-container w-full overflow-hidden">
        <div className="logo-scroll">
          {certificates.map((item) => (
            <div
              className="flex justify-center items-center mx-4 flex-shrink-0"
              key={item.id}
            >
              {item.certificate}
            </div>
          ))}
          {certificates.map((item) => (
            <div
              className="flex justify-center items-center mx-4 flex-shrink-0"
              key={item.id + 100}
            >
              {item.certificate}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;
