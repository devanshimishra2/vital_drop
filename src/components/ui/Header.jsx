import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'Home',
      path: '/homepage-blood-donation-community-hub',
      icon: 'Home'
    },
    {
      label: 'Find Banks',
      path: '/find-donation-centers-scheduling',
      icon: 'MapPin'
    },
    {
      label: 'Contact',
      path: '/contact',
      icon: 'Phone'
    },
    {
      label: 'Help',
      path: '/help',
      icon: 'HelpCircle'
    },
    {
      label: 'Login',
      path: '/login',
      icon: 'LogIn'
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleNavigation = (path) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-life-force to-cta-deep rounded-lg flex items-center justify-center shadow-brand-md">
          <Icon name="Heart" size={24} color="white" className="animate-pulse" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-success-green rounded-full flex items-center justify-center">
          <Icon name="Plus" size={10} color="white" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-life-force font-inter">Vital Drop</span>
        <span className="text-xs text-text-secondary font-medium">Save Lives Together</span>
      </div>
    </div>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-header transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-brand shadow-brand-md' 
          : 'bg-white'
      } ${className}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavigation('/homepage-blood-donation-community-hub')}
          >
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-life-force text-white shadow-brand'
                    : 'text-text-primary hover:bg-surface hover:text-life-force'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  color={isActivePath(item?.path) ? 'white' : 'currentColor'} 
                />
                <span>{item?.label}</span>
              </button>
            ))}
          </nav>

          {/* Emergency CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="default"
              size="sm"
              iconName="AlertTriangle"
              iconPosition="left"
              className="cta-magnetic emergency-pulse bg-life-force hover:bg-cta-deep"
              onClick={() => handleNavigation('/emergency-response-center')}
            >
              Emergency
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-text-primary hover:bg-surface transition-colors duration-200"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-t border-border shadow-brand-lg">
            <div className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-life-force text-white shadow-brand'
                      : 'text-text-primary hover:bg-surface hover:text-life-force'
                  }`}
                >
                  <Icon 
                    name={item?.icon} 
                    size={18} 
                    color={isActivePath(item?.path) ? 'white' : 'currentColor'} 
                  />
                  <span>{item?.label}</span>
                </button>
              ))}
              
              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  size="sm"
                  iconName="AlertTriangle"
                  iconPosition="left"
                  fullWidth
                  className="cta-magnetic emergency-pulse bg-life-force hover:bg-cta-deep"
                  onClick={() => handleNavigation('/emergency-response-center')}
                >
                  Emergency
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;