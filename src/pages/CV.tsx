import React from 'react';
import styled from 'styled-components';
import { Download, Mail, Linkedin, FileText, ExternalLink } from 'lucide-react';

const CVContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem; // Further reduced padding for very small screens
  }
`;

const DownloadSection = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(122, 178, 211, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2rem; // Reduced margin for mobile
    padding: 1.5rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem; // Further reduced margin for very small screens
    padding: 1rem; // Further reduced padding for very small screens
  }
`;

const DownloadText = styled.p`
  color:rgb(0, 49, 133);
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem; // Reduced font size for mobile
    margin-bottom: 1rem; // Reduced margin for mobile
    line-height: 1.5; // Reduced line height for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem; // Further reduced font size for very small screens
    margin-bottom: 0.75rem; // Further reduced margin for very small screens
    line-height: 1.4; // Further reduced line height for very small screens
  }
`;

const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color:rgb(0, 114, 180);
  text-decoration: none;
  font-weight: 600;
  padding: 12px 20px;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  border: 1px solid #7AB2D3;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(122, 178, 211, 0.3);
    border-color: #4A628A;
    color: #4A628A;
    text-decoration: none;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px; // Reduced padding for mobile
    font-size: 0.9rem; // Reduced font size for mobile
  }
  
  @media (max-width: 480px) {
    padding: 8px 14px; // Further reduced padding for very small screens
    font-size: 0.85rem; // Further reduced font size for very small screens
  }
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 800px;
  border: none;
  margin-bottom: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(122, 178, 211, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(122, 178, 211, 0.25);
  }
  
  @media (max-width: 768px) {
    height: 600px; // Reduced height for mobile
    margin-bottom: 2rem; // Reduced margin for mobile
    border-radius: 12px; // Reduced border radius for mobile
  }
  
  @media (max-width: 480px) {
    height: 500px; // Further reduced height for very small screens
    margin-bottom: 1.5rem; // Further reduced margin for very small screens
    border-radius: 10px; // Further reduced border radius for very small screens
  }
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem; // Reduced gap for mobile
    margin-bottom: 1.5rem; // Reduced margin for mobile
  }
  
  @media (max-width: 480px) {
    gap: 1rem; // Further reduced gap for very small screens
    margin-bottom: 1rem; // Further reduced margin for very small screens
  }
`;

const EmailSection = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::after {
    content: '📧';
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
    opacity: 0.3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::after {
    opacity: 1;
    transform: scale(1.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem; // Reduced padding for mobile
    
    &::after {
      top: 1rem; // Adjusted position for mobile
      right: 1rem; // Adjusted position for mobile
      font-size: 1.5rem; // Reduced size for mobile
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem; // Further reduced padding for very small screens
    
    &::after {
      top: 0.75rem; // Further adjusted position for very small screens
      right: 0.75rem; // Further adjusted position for very small screens
      font-size: 1.25rem; // Further reduced size for very small screens
    }
  }
`;

const SocialSection = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::after {
    content: '🔗';
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
    opacity: 0.3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::after {
    opacity: 1;
    transform: scale(1.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem; // Reduced padding for mobile
    
    &::after {
      top: 1rem; // Adjusted position for mobile
      right: 1rem; // Adjusted position for mobile
      font-size: 1.5rem; // Reduced size for mobile
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem; // Further reduced padding for very small screens
    
    &::after {
      top: 0.75rem; // Further adjusted position for very small screens
      right: 0.75rem; // Further adjusted position for very small screens
      font-size: 1.25rem; // Further reduced size for very small screens
    }
  }
`;

const SectionTitle = styled.h2`
  color: #4A628A;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem; // Reduced font size for mobile
    margin-bottom: 1rem; // Reduced margin for mobile
    gap: 8px; // Reduced gap for mobile
    
    &::before {
      height: 20px; // Reduced height for mobile
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem; // Further reduced font size for very small screens
    margin-bottom: 0.75rem; // Further reduced margin for very small screens
    gap: 6px; // Further reduced gap for very small screens
    
    &::before {
      height: 18px; // Further reduced height for very small screens
    }
  }
`;

const EmailItem = styled.p`
  color: #4A628A;
  font-family: 'Inter', sans-serif;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  align-items: flex-start;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  a {
    color: #4A628A;
    text-decoration: none;
    font-weight: 600;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem; // Slightly larger for readability on mobile
    margin-bottom: 0.6rem; // Reduced margin for mobile
    gap: 6px; // Reduced gap for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem; // Maintain readability on very small screens
    margin-bottom: 0.5rem; // Further reduced margin for very small screens
    gap: 5px; // Further reduced gap for very small screens
  }
`;

const SocialText = styled.p`
  color: #4A628A;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem; // Reduced font size for mobile
    margin-bottom: 0.75rem; // Reduced margin for mobile
    line-height: 1.5; // Reduced line height for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem; // Further reduced font size for very small screens
    margin-bottom: 0.5rem; // Further reduced margin for very small screens
    line-height: 1.4; // Further reduced line height for very small screens
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color:rgb(11, 103, 156);
  text-decoration: none;
  font-weight: 600;
  padding: 10px 16px;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  border: 1px solidrgb(0, 80, 126);
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(122, 178, 211, 0.3);
    border-color: #4A628A;
    color: #4A628A;
    text-decoration: none;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 8px 14px; // Reduced padding for mobile
    font-size: 0.9rem; // Reduced font size for mobile
    gap: 6px; // Reduced gap for mobile
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px; // Further reduced padding for very small screens
    font-size: 0.85rem; // Further reduced font size for very small screens
    gap: 5px; // Further reduced gap for very small screens
  }
`;

const CV: React.FC = () => {
  return (
    <CVContainer>
      <DownloadSection>
        <DownloadText>
          You can download a PDF copy of my CV here. The document contains my complete professional background, including education, work experience, and technical skills.
        </DownloadText>
        <DownloadLink href="/files/CV/Md_Ariful_Islam_Data_Analyst_Resume.pdf" download target="_blank" rel="noopener noreferrer">
          <Download size={18} />
          Download CV
        </DownloadLink>
      </DownloadSection>

      
      <object
        data="https://drive.google.com/file/d/1XtHEQZku-rBRhd693b1q5_HYfq9DHudu/preview"
        type="application/pdf"
        width="100%"
        height="800px"
        style={{
          border: 'none',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(122, 178, 211, 0.15)',
          margin: '0 0 3rem 0'
        }}
      >
      </object>

      

      <ContactSection>
        <EmailSection>
          <SectionTitle>
            <Mail size={24} />
            Contact Information
          </SectionTitle>
          <EmailItem>
            <Mail size={16} />
            <a href="mailto:arifbaust10@gmail.com">arifbaust10@gmail.com</a>
          </EmailItem>
          <EmailItem>
            <Mail size={16} />
            <a href="mailto:220201010@baust.edu.bd">220201010@baust.edu.bd</a>
          </EmailItem>
        </EmailSection>

        <SocialSection>
          <SectionTitle>
            <Linkedin size={24} />
            Social Media
          </SectionTitle>
          <SocialText>
            Connect with me on professional networks to stay updated with my latest work and research.
          </SocialText>
          <SocialLink href="https://www.linkedin.com/in/md-ariful-islam-387876253/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
            LinkedIn Profile
          </SocialLink>
        </SocialSection>
      </ContactSection>
    </CVContainer>
  );
};

export default CV; 