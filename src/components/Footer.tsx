import React from 'react';
import styled from 'styled-components';

interface FooterProps {
  variant?: 'sidebar' | 'main';
}

const FooterContainer = styled.footer<FooterProps>`
  background-color: ${props => props.variant === 'sidebar' ? 'transparent' : '#f8f9fa'};
  border-top: ${props => props.variant === 'sidebar' ? 'none' : '1px solid #eaecef'};
  padding: ${props => props.variant === 'sidebar' ? '0' : '2rem 0'};
  margin-top: ${props => props.variant === 'sidebar' ? '0' : 'auto'};
  
  @media (max-width: 768px) {
    padding: ${props => props.variant === 'sidebar' ? '0' : '1rem 0'}; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    padding: ${props => props.variant === 'sidebar' ? '0' : '0.75rem 0'}; // Further reduced padding for very small screens
  }
`;

const FooterContent = styled.div<FooterProps>`
  max-width: ${props => props.variant === 'sidebar' ? '100%' : '1200px'};
  margin: 0 auto;
  padding: ${props => props.variant === 'sidebar' ? '0' : '0 2rem'};
  text-align: ${props => props.variant === 'sidebar' ? 'left' : 'center'};
  
  @media (max-width: 768px) {
    padding: ${props => props.variant === 'sidebar' ? '0' : '0 1rem'}; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    padding: ${props => props.variant === 'sidebar' ? '0' : '0 0.5rem'}; // Further reduced padding for very small screens
  }
`;

const Copyright = styled.p<FooterProps>`
  color: #666;
  font-size: ${props => props.variant === 'sidebar' ? '0.8rem' : '0.9rem'};
  text-align: ${props => props.variant === 'sidebar' ? 'left' : 'right'};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: ${props => props.variant === 'sidebar' ? '0.75rem' : '0.85rem'}; // Reduced font size for mobile
  }
  
  @media (max-width: 480px) {
    font-size: ${props => props.variant === 'sidebar' ? '0.7rem' : '0.8rem'}; // Further reduced font size for very small screens
  }
`;

const Footer: React.FC<FooterProps> = ({ variant = 'main' }) => {
  return (
    <FooterContainer variant={variant}>
      <FooterContent variant={variant}>
        <Copyright variant={variant}>
          © {new Date().getFullYear()} Md. Ariful Islam. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 