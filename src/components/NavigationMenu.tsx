import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import fbImg from '../assets/herosection/Fb.png';
import instaImg from '../assets/herosection/insta.png';
import linkedinImg from '../assets/herosection/LinkedIn.png';
import vintageImg from '../assets/vintage.png';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainMenuItems = [
  { id: 'about', label: 'ABOUT US' },
  { id: 'lawyers', label: 'LAWYERS' },
  { id: 'public', label: 'PUBLIC' },
  { id: 'admissions', label: 'ADMISSIONS' },
  { id: 'media', label: 'MEDIA' },
  { id: 'cpd', label: 'CPD' },
  { id: 'login', label: 'MEMBER LOGIN' },
  { id: 'membership', label: 'MEMBERSHIP' },
  { id: 'careers', label: 'CAREERS' },
  { id: 'advertise', label: 'ADVERTISE' },
];

const subMenuItems: Record<string, string[]> = {
  about: [
    'What We Do',
    'Council 2025',
    'Executive Committee 2025',
    'Presidents & Honorary Members',
    'Award Recipients',
    'Secretariat 2025',
    'Standing Committees 2025',
    'Practice Areas',
    'Support Schemes',
    'Membership Privileges',
  ],
  lawyers: [
    'Find a Lawyer',
    'Directory of Advocates',
    'Legal Ethics',
    'Practicing Certificates',
  ],
  public: [
    'Public Legal Education',
    'Legal Aid & Pro Bono',
    'Community Legal Clinics',
    'Consumer Guides',
  ],
  admissions: [
    'Admission Requirements',
    'Bar Examinations',
    'Foreign Lawyers',
    'Pupillorship',
  ],
  media: [
    'Press Releases',
    'Publications & Journals',
    'Media Enquiries',
    'Photo Gallery',
  ],
  cpd: [
    'CPD Requirements',
    'Upcoming Courses',
    'E-Learning Portal',
    'CPD Points Tracker',
  ],
  login: ['Member Portal', 'Renew Certificate', 'e-Filing Access'],
  membership: [
    'Join as Member',
    'Categories & Fees',
    'Benefits & Discounts',
    'Insurance Schemes',
  ],
  careers: ['Job Opportunities', 'Legal Internships', 'Career Guidance'],
  advertise: [
    'Advertising Rates',
    'Sponsorship Packages',
    'Journal Classifieds',
  ],
};

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end items-center overflow-hidden">
          {/* Backdrop Blur & Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md cursor-pointer"
          />

          {/* Navigation Menu Panel (w: 1130px, full height h-full, smooth slide right to left) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 300, mass: 0.8 }}
            className="relative z-10 w-full lg:w-[1130px] max-w-full h-full bg-[#383838] text-white flex flex-col justify-between overflow-y-auto overflow-x-hidden p-6 sm:p-10 md:p-14 lg:p-16 shadow-2xl"
          >
            {/* Background Vintage Scales Image */}
            <img
              src={vintageImg}
              alt="Scales of Justice"
              className="absolute right-0 bottom-0 h-full max-h-[85vh] w-auto object-contain object-right-bottom opacity-30 md:opacity-40 pointer-events-none z-0"
            />

            {/* Main Container Content */}
            <div className="relative z-10 w-full flex flex-col h-full justify-between">
              
              {/* Top Header Actions (Socials + Contact + Close Button) */}
              <div className="flex justify-between items-center w-full mb-8 sm:mb-12">
                {/* Empty left side spacer to balance header */}
                <div></div>

                {/* Right Header Actions */}
                <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img
                      src={fbImg}
                      alt="Facebook"
                      className="h-3.5 sm:h-4 w-auto cursor-pointer hover:opacity-80 transition-opacity filter brightness-0 invert"
                    />
                    <img
                      src={instaImg}
                      alt="Instagram"
                      className="h-3.5 sm:h-4 w-auto cursor-pointer hover:opacity-80 transition-opacity filter brightness-0 invert"
                    />
                    <img
                      src={linkedinImg}
                      alt="LinkedIn"
                      className="h-3.5 sm:h-4 w-auto cursor-pointer hover:opacity-80 transition-opacity filter brightness-0 invert"
                    />
                  </div>
                  
                  <div className="h-4 w-[1px] bg-white/40"></div>

                  <a
                    href="#contact"
                    onClick={onClose}
                    className="text-xs sm:text-sm font-montserrat font-semibold tracking-wider text-white hover:text-[#B89659] uppercase transition-colors"
                  >
                    CONTACT US
                  </a>

                  <button
                    onClick={onClose}
                    className="ml-2 sm:ml-4 text-white/80 hover:text-white transition-colors focus:outline-none p-1"
                    aria-label="Close menu"
                  >
                    <X className="w-7 h-7 sm:w-8 sm:h-8" />
                  </button>
                </div>
              </div>

              {/* Search Input Bar */}
              <div className="w-full max-w-3xl mb-8 sm:mb-12">
                <div className="relative w-full border-b border-white/30 pb-2.5 flex items-center gap-3 group focus-within:border-white transition-colors">
                  <Search className="w-5 h-5 text-white/60 group-focus-within:text-white transition-colors" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search here"
                    className="w-full bg-transparent text-white placeholder-white/50 text-[16px] font-montserrat font-normal outline-none"
                  />
                </div>
              </div>

              {/* Menu Grid (Left Column: Main Categories, Right Column: Subcategories) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 w-full max-w-5xl my-auto">
                
                {/* Main Menu Titles */}
                <div className="md:col-span-5 flex flex-col items-start space-y-3 sm:space-y-4">
                  {mainMenuItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`text-left font-oswald text-[30px] font-normal tracking-wide uppercase transition-all duration-200 focus:outline-none ${
                          isActive
                            ? 'text-[#C5A059] border-b-2 border-[#C5A059] pb-0.5'
                            : 'text-white hover:text-[#C5A059]'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>

                {/* Submenu Links */}
                <div className="md:col-span-7 pt-2 md:pt-1">
                  <ul className="space-y-3 sm:space-y-4 font-montserrat text-[16px] font-normal text-white/90">
                    {(subMenuItems[activeTab] || []).map((subItem, index) => (
                      <li key={index}>
                        <a
                          href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={onClose}
                          className="hover:text-[#C5A059] transition-colors inline-block text-white/80 hover:translate-x-1 transform duration-150"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
