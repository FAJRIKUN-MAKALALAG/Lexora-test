import React, { useState } from "react";
import cityImg from "../assets/herosection/city.png";
import redsideImg from "../assets/herosection/redside.png";
import statueImg from "../assets/herosection/statue.png";
import paperImg from "../assets/herosection/paper.png";
import logoImg from "../assets/herosection/logo.png";
import fbImg from "../assets/herosection/Fb.png";
import instaImg from "../assets/herosection/insta.png";
import linkedinImg from "../assets/herosection/LinkedIn.png";
import hamburgerImg from "../assets/herosection/hamburgericon.png";
import arrowImg from "../assets/herosection/arrow.png";


const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[700px] overflow-hidden bg-[#F5F5F5]">
      {/* Blurred container for Hero contents */}
      <div className={`w-full h-full relative transition-all duration-500 ${isMenuOpen ? 'blur-[4px]' : ''}`}>
        {/* 1. Container utama dengan background image kota */}
        <div
          className="absolute inset-0 z-0 opacity-60 pointer-events-none"
          style={{
            backgroundImage: `url(${cityImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "multiply",
          }}
        ></div>

        {/* 2. Elemen absolute berupa Abstract Red Chevron Shape */}
        <div className="absolute left-0 top-12 sm:top-16 md:top-20 bottom-0 h-full z-10 w-1/4 sm:w-1/5 md:w-1/6 max-w-[200px] pointer-events-none">
          <img
            src={redsideImg}
            alt="Abstract Red Shape"
            className="h-full w-full object-contain object-left"
          />
        </div>

        {/* 3. Elemen absolute berupa Cutout PNG Statue */}
        <div className="absolute left-[1%] sm:left-[2%] md:left-[4%] bottom-0 h-[60%] sm:h-[75%] md:h-[90%] lg:h-[95%] z-20 pointer-events-none">
          <img
            src={statueImg}
            alt="Statue of Justice"
            className="h-full w-auto object-contain object-left-bottom block"
          />
        </div>

        {/* Header Overlay (Logo, Socials, Contact) */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-start pt-4 sm:pt-6 md:pt-10 px-4 sm:px-8 md:px-12 z-30">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoImg} alt="Lexora Logo" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />
          </div>

          {/* Top Right Actions (Socials + Contact) */}
          <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-8 mr-16 sm:mr-24 md:mr-32 mt-2 md:mt-4">
            <div className="flex items-center space-x-2.5 sm:space-x-4">
              <img
                src={fbImg}
                alt="Facebook"
                className="h-3.5 sm:h-4 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src={instaImg}
                alt="Instagram"
                className="h-3.5 sm:h-4 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src={linkedinImg}
                alt="LinkedIn"
                className="h-3.5 sm:h-4 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="h-3 sm:h-4 w-[1px] bg-gray-400"></div>
            <button className="text-[#8B735B] font-bold text-[10px] sm:text-xs tracking-widest uppercase hover:text-[#6b5844] transition-colors whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>

        {/* 4. Konten teks di sebelah kanan */}
        <div className="absolute inset-0 flex flex-col justify-center items-end pl-[28%] sm:pl-[35%] md:pl-[42%] pr-20 sm:pr-28 md:pr-36 lg:pr-[20%] z-30 pointer-events-none">
          <div className="max-w-[320px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-[550px] text-left pointer-events-auto">
            <h1 className="text-[36px] sm:text-[52px] md:text-[64px] lg:text-[72px] leading-[1.08] font-medium text-[#333333] uppercase mb-3 sm:mb-4 md:mb-6 font-oswald">
              Become an <br />
              <span className="text-[#8B1A1A]">Affiliate</span> <br />
              of the Lexora
            </h1>
            <p className="text-[#555555] sm:text-[#666666] text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-[480px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Sed dignissim, metus.
            </p>

            <button className="flex items-center group text-[#8B735B] hover:text-[#6b5844] transition-colors font-semibold text-sm sm:text-base md:text-[18px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-montserrat">
              Find Lawyer
              <div className="ml-3 sm:ml-4 flex items-center">
                <span className="w-16 sm:w-24 md:w-30 h-[1px] bg-[#8B735B]"></span>
                <img src={arrowImg} alt="Arrow" className="ml-2 h-3.5 sm:h-4 md:h-5 w-auto object-contain" />
              </div>
            </button>
          </div>
        </div>

        {/* 5. Torn Paper Edge Divider - Stuck tightly at bottom 0 */}
        <div className="absolute bottom-0 -left-[2%] -right-[2%] w-[104%] z-40 pointer-events-none overflow-hidden">
          <img
            src={paperImg}
            alt="Torn Paper Edge"
            className="w-full max-w-none h-auto block translate-y-[37.5%] scale-x-105"
          />
        </div>

        {/* Sidebar Menu & Navigation (Right Corner) */}
        <div className="absolute top-0 right-0 h-full w-16 sm:w-24 md:w-28 lg:w-32 bg-[#383838] z-50 flex flex-col items-center justify-between py-6 sm:py-8 md:py-12">
          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="hover:opacity-80 transition-opacity p-2 focus:outline-none"
            aria-label="Open navigation menu"
          >
            <img src={hamburgerImg} alt="Menu" className="w-5 sm:w-6 md:w-8 h-auto" />
          </button>

          {/* Scroll Down Indicator */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-6 mb-4 sm:mb-8">
            <span className="[writing-mode:vertical-lr] text-white/60 text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase font-medium">
              Scroll Down
            </span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/20 flex items-center justify-center">
              {/* Small Triangle Down */}
              <div className="w-0 h-0 border-l-[3px] sm:border-l-[4px] border-l-transparent border-r-[3px] sm:border-r-[4px] border-r-transparent border-t-[4px] sm:border-t-[5px] border-t-white/80 mt-[2px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
