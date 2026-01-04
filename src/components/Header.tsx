import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border-bottom: 1px solid #B9E5E8;
  display: flex;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(122, 178, 211, 0.1);
  
  @media (max-width: 768px) {
    height: 60px; // Reduced height for mobile
    justify-content: space-between; // Spread logo and controls
    padding: 0 0.5rem; // Side padding
    align-items: center;
  }
`;

const NavContainer = styled.nav`
  max-width: 1200px;
  width: auto;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  gap: 17rem;
  align-items: center;
  height: 70px; /* ensures all items are same height */
  
  @media (max-width: 768px) {
    height: 60px; // Reduced height for mobile
    justify-content: space-between; // Spread logo and hamburger
    gap: 0; // Remove large gap on mobile
    padding: 0 0; // No padding to push hamburger to the very edge
  }
  
  @media (max-width: 480px) {
    padding: 0 0; // No padding on very small screens either
  }
`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: clamp(1rem, 1.8vw + 0.5rem, 1.6rem);
  background: linear-gradient(135deg, rgb(17, 115, 172), #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0 0 0 5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px; /* ensures all items are same height */
  
  @media (max-width: 768px) {
    height: 60px; // Reduced height for mobile
    font-size: clamp(1.3rem, 2.0vw + 0.8rem, 1.6rem); // Larger font size for mobile
    padding: 0 0 0 1rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.3rem, 2.0vw + 0.8rem, 1.6rem); // Further adjusted font size for very small screens
    padding: 0 0 0 0.5rem; // Further reduced padding for very small screens
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  align-items: center; /* fix dropdown button vertical alignment */
  
  @media (max-width: 768px) {
    gap: 0.25rem; // Reduced gap for mobile
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${props => props.isActive ? '#fff' : '#4A628A'};
  font-weight: ${props => props.isActive ? '600' : '500'};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none; /* removes underline */
  background: ${props => props.isActive ? 'linear-gradient(135deg, #3A4A6A, #3A4A6A)' : 'transparent'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1rem;

  &:hover {
    background: ${props => props.isActive ? 'linear-gradient(135deg, #3A4A6A, #3A4A6A)' : 'linear-gradient(135deg, #7AB2D3, #B9E5E8)'};
    color: ${props => props.isActive ? 'white' : '#3F65A7'};
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.6rem; // Reduced padding for mobile
    font-size: 0.85rem; // Reduced font size for mobile
  }
  
  @media (max-width: 480px) {
    padding: 0.3rem 0.4rem; // Further reduced padding for very small screens
    font-size: 0.8rem; // Further reduced font size for very small screens
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

const DropdownButton = styled.button`
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  border: none;
  color: white;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem; /* smaller padding for better vertical alignment */
  border-radius: 8px;
  cursor: pointer;
  height: 38px; /* consistent height with nav links */
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 32px; // Reduced height for mobile
    font-size: 1rem; // Reduced font size for mobile
    padding: 0.3rem 0.6rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    height: 28px; // Further reduced height for very small screens
    font-size: 0.9rem; // Further reduced font size for very small screens
    padding: 0.25rem 0.5rem; // Further reduced padding for very small screens
  }
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 110%;
  right: 0;
  background: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  min-width: 150px;
  overflow: hidden;

  a {
    display: block;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: #4A628A;
    &:hover {
      background: #DFF2EB;
    }
  }
  
  @media (max-width: 768px) {
    min-width: 120px; // Reduced width for mobile
    
    a {
      padding: 0.6rem 0.8rem; // Reduced padding for mobile
      font-size: 0.85rem; // Reduced font size for mobile
    }
  }
  
  @media (max-width: 480px) {
    min-width: 100px; // Further reduced width for very small screens
    
    a {
      padding: 0.5rem 0.6rem; // Further reduced padding for very small screens
      font-size: 0.8rem; // Further reduced font size for very small screens
    }
  }
`;

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { title: 'Home', url: '/' },
    { title: 'Video Tutorials', url: '/Video_Playlist' },
    { title: 'Research', url: '/research' },
    { title: 'Project', url: '/Project' },
    { title: 'Work Experience', url: '/work' },
    // { title: 'Datasets', url: '/datasets' },
    { title: 'Education', url: '/education' },
    { title: 'CV', url: '/cv' }
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  let visibleLinks = navigation;
  let dropdownLinks: typeof navigation = [];

  if (windowWidth <= 1200 && windowWidth >= 900) {
    visibleLinks = navigation.slice(0, 4);
    dropdownLinks = navigation.slice(5);
  } else if (windowWidth <= 900 && windowWidth >= 768) {
    visibleLinks = navigation.slice(0, 3);
    dropdownLinks = navigation.slice(5);}
  else if (windowWidth < 768) {
    const activeItem = navigation.find(item => item.url === location.pathname);
    visibleLinks = activeItem ? [activeItem] : [];
    dropdownLinks = navigation.filter(item => item.url !== location.pathname);
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo to="/">Md. Ariful Islam</Logo>
      <NavContainer>
        {/* Mobile Menu Toggle */}
        {windowWidth < 768 && (
          <button
            onClick={toggleMobileMenu}
            style={{
              background: 'linear-gradient(135deg, #7AB2D3, #4A628A)',
              border: 'none',
              color: 'white',
              fontSize: '1.2rem',
              padding: '0.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '44px',
              minWidth: '44px',
              position: 'absolute',
              right: '1.0rem',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        )}

        {/* Desktop Navigation */}
        {windowWidth >= 768 && (
          <NavList>
            {visibleLinks.map(item => (
              <NavItem key={item.url}>
                <NavLink
                  to={item.url}
                  isActive={location.pathname === item.url}
                >
                  {item.title}
                </NavLink>
              </NavItem>
            ))}

            {dropdownLinks.length > 0 && (
              <DropdownWrapper>
                <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  ☰
                </DropdownButton>
                <DropdownMenu isOpen={isDropdownOpen}>
                  {dropdownLinks.map(item => (
                    <Link key={item.url} to={item.url} onClick={() => setIsDropdownOpen(false)}>
                      {item.title}
                    </Link>
                  ))}
                </DropdownMenu>
              </DropdownWrapper>
            )}
          </NavList>
        )}

        {/* Mobile Navigation Menu */}
        {windowWidth < 768 && isMobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              borderTop: '1px solid #B9E5E8',
              zIndex: 1001
            }}
          >
            {navigation.map(item => (
              <Link
                key={item.url}
                to={item.url}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '1rem',
                  textDecoration: 'none',
                  color: location.pathname === item.url ? '#7AB2D3' : '#4A628A',
                  borderBottom: '1px solid #f0f0f0',
                  fontSize: '1rem',
                  fontWeight: location.pathname === item.url ? '600' : '400'
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
