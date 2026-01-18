import React from "react";
import { useRouter } from 'next/router';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import BaseImage from "@/components/BaseImage";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-12">
      {/* Footer Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <BaseImage
                src="/images/dr_soma_logo.png"
                alt="Dr. Soma Plastic Surgery Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional Plastic Surgery &amp; Aesthetic Medicine tailored to your needs.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/somasurgery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#EA622F] transition-colors cursor-pointer"
              >
                <Facebook className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.instagram.com/drsomaplasticsurgery/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#EA622F] transition-colors cursor-pointer"
              >
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCo6puB2cXTvirx0jm_lIOEQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#EA622F] transition-colors cursor-pointer"
              >
                <Youtube className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-[#EA622F] cursor-pointer" onClick={() => router.push('/about-dr-soma')}>About Dr. Soma</li>
              <li className="hover:text-[#EA622F] cursor-pointer" onClick={() => router.push('/servicespage')}>Our Services</li>
              <li className="hover:text-[#EA622F] cursor-pointer" onClick={() => router.push('/success-stories')}>Success Stories</li>
              <li className="hover:text-[#EA622F] cursor-pointer" onClick={() => router.push('/blogs')}>Patient Resources</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#EA622F] w-[18px] h-[18px] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Klinik Plastic Surgery Soma</span>
                  <span>45B, 2nd Floor, Jalan SS15/5A,</span>
                  <span>47500, Subang Jaya, Selangor,</span>
                  <span>Malaysia</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#EA622F] w-[18px] h-[18px] shrink-0" />
                <span>603 5887 4422</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#EA622F] w-[18px] h-[18px] shrink-0" />
                <span>enquiry.drsoma@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6">Clinic Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between text-[#EA622F]">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} SJ Clinical Aesthetics Sdn Bhd 200401017853 (656356-A). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
