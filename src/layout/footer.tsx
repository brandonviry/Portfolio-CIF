"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import IconLink from '@/components/ui/icon_link'; 
import {scrollToTop} from "@/lib/scroll";

const Footer = () => {
  return (
    <footer className="text-white bg-[#191919] py-6 flex flex-col items-center">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <IconLink icon="/assets/img/github.png" href="https://github.com/brandonviry" width={20} height={20}>
            GitHub
          </IconLink>
          <IconLink icon="/assets/img/youtube.png" href="https://www.youtube.com/@chikara9742" width={20} height={20}>
            YouTube
          </IconLink>
          <IconLink icon="/assets/img/instagram.png" href="https://www.instagram.com/virybrandon/" width={20} height={20}>
            Instagram
          </IconLink>
          <IconLink icon="/assets/img/linkedin.svg" href="https://www.linkedin.com/in/brandon-viry-81187b237/" width={20} height={20}>
            LinkedIn
          </IconLink>
        </div>
        <p className="text-sm">
          &copy; 2024 VIRY BRANDON. Tous droits réservés.
        </p>
        <div className="text-center mt-4">
          <button className="flex items-center text-sm hover:text-gray-400" onClick={scrollToTop}>
            Retour en haut
            <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
