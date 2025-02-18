import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'About Us', type: 'scroll' },
    { name: 'Latest Works', type: 'scroll', to: 'latest-works' },
    { name: 'Gallery', type: 'route', to: '/gallery' },
    { name: 'Our Team', type: 'scroll' },
    { name: 'Contact Us', type: 'scroll' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-black/90 backdrop-blur-sm z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <RouterLink to="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-white text-2xl font-bold flex items-center gap-2"
          >
            <Briefcase className="w-8 h-8" />
            E&S Website
          </motion.div>
        </RouterLink>
        
        <div className="flex gap-8">
          {isHomePage ? (
            <>
              {navItems.map((item) => (
                item.type === 'scroll' ? (
                  <ScrollLink
                    key={item.name}
                    to={item.to || item.name.toLowerCase().replace(' ', '-')}
                    smooth={true}
                    duration={500}
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      className="relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                    >
                      {item.name}
                    </motion.span>
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={item.name}
                    to={item.to}
                    className="text-white hover:text-gray-300"
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      className="relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                    >
                      {item.name}
                    </motion.span>
                  </RouterLink>
                )
              ))}
            </>
          ) : (
            <RouterLink to="/" className="text-white hover:text-gray-300">
              <motion.span
                whileHover={{ y: -2 }}
                className="relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
              >
                Home
              </motion.span>
            </RouterLink>
          )}
          <RouterLink to="/careers" className="text-white hover:text-gray-300">
            <motion.span
              whileHover={{ y: -2 }}
              className="relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
            >
              Careers
            </motion.span>
          </RouterLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;