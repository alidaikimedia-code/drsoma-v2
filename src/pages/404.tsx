import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Home, ArrowLeft } from 'lucide-react';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Dr. Soma Plastic Surgery</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Head>

      <section className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          {/* 404 Number */}
          <h1 className="text-[120px] sm:text-[150px] font-bold text-[#EA622F] leading-none mb-2">
            404
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-base sm:text-lg">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EA622F] text-white font-semibold rounded-md hover:bg-[#d55626] transition-colors duration-300 w-full sm:w-auto justify-center"
            >
              <Home className="w-6 h-6" />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-md hover:border-[#EA622F] hover:text-[#EA622F] transition-colors duration-300 w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-6 h-6" />
              Go Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Custom404;
