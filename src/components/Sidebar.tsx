import React from 'react';
import styled from 'styled-components';
import { Youtube } from 'lucide-react'; // Ensure this is in your imports

const SidebarContainer = styled.aside`
  width: 400px;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border-right: 1px solid #B9E5E8;
  position: fixed;
  top: 70px;
  left: 0;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

type GithubProps = {
  size: string;
};
    
const Github = ({ size }: GithubProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 432 416"><path fill="currentColor" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"/></svg>
);


type ScopusProps = {
  size: string;
};
    
const Scopus = ({ size }: ScopusProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" fill="#8b5cf6"><path fill="#8b5cf6" d="M64 64v384h384V64Zm116.815 99.926c22.222 0 32.04 2.586 45.736 8.27l-1.292 20.411c-14.729-8.785-26.356-11.367-43.152-11.367c-19.379 0-29.2 14.727-29.2 28.163c0 18.088 17.313 24.807 33.592 34.626c20.93 12.403 42.636 23.514 42.636 48.062c0 32.299-27.65 48.577-54.006 48.577c-18.863 0-32.557-2.843-45.993-9.044l3.102-20.414c13.178 8.01 24.547 11.889 41.86 11.889c17.57 0 32.297-11.887 32.297-28.424c0-17.054-16.535-23.516-32.297-33.076c-21.189-12.92-44.444-24.29-44.444-50.646s19.379-47.027 51.161-47.027zm161.705 0c26.097 0 37.725 3.102 51.937 9.82l-1.55 19.38c-15.504-8.527-31.783-11.886-52.971-11.886c-33.592 0-62.274 26.613-62.274 69.765c0 40.826 29.2 71.575 65.892 71.575c16.795 0 33.591-3.359 49.353-11.886l1.55 19.638c-13.953 6.977-31.523 9.82-52.71 9.82c-42.12 0-87.338-31.01-87.338-87.597c0-49.612 37.982-88.63 88.11-88.63z" opacity=".999"/></svg>
);


    

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem; // Reduced margin for mobile
  }
`;

const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #eaecef;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 120px; // Reduced size for mobile
    height: 120px; // Reduced size for mobile
    margin: 0 auto 0.75rem; // Reduced margin for mobile
  }
`;

const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg,rgb(0, 0, 0), #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.3rem; // Reduced font size for mobile
    margin: 0 0 0.4rem 0; // Reduced margin for mobile
  }
`;

const Title = styled.p`
  font-size: 1.1rem;
  color: #4A628A;
  margin: 0 0 2rem 0;
  text-align: center;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem; // Reduced font size for mobile
    margin: 0 0 1.5rem 0; // Reduced margin for mobile
  }
`;
type LinkedinProps = {
  size: string;
};
    
const Linkedin = ({ size }: LinkedinProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0A66C2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"/></g></svg>
);


    
const ContactInfo = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem; // Reduced margin for mobile
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #4A628A;
  
  span {
    margin-left: 0.5rem;
  }
  
  a {
    color: #4A628A;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem; // Reduced font size for mobile
    margin-bottom: 0.4rem; // Reduced margin for mobile
  }
`;

const AcademicLinks = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.75rem; // Reduced margin for mobile
  }
`;

const LinkItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
  color: #4A628A;
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 1px solid #B9E5E8;
  
  &:hover {
    color: #7AB2D3;
    background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
    border-radius: 8px;
    /* Prevent layout shift on hover by not changing margin or padding */
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 0; // Reduced padding for mobile
    font-size: 0.9rem; // Reduced font size for mobile
    
    &:hover {
      /* Prevent layout shift on hover on mobile as well */
    }
  }
`;

const LinkIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    width: 18px; // Reduced size for mobile
    height: 18px; // Reduced size for mobile
    margin-right: 0.6rem; // Reduced margin for mobile
    font-size: 1.1rem; // Reduced font size for mobile
  }
`;

const SidebarContent = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 1.5rem; // Reduced padding for mobile
  }
`;

const VisitorMapContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

type OrcidProps = {
  size: string;
};
    
const Orcid = ({ size }: OrcidProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="#10b981"><path fill="#10b981" d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12s12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025c0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722c0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg>
);

type ResearchgateSquareProps = {
  size: string;
};
    
const ResearchgateSquare = ({ size }: ResearchgateSquareProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 448 512" fill="#10b981"><path fill="#10b981" d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm277.201 64c5.627 0 10.731.651 15.258 1.98c4.476 1.318 8.49 3.135 12.031 5.461c3.491 2.302 6.511 5.013 9.004 8.082a44.056 44.056 0 0 1 6.227 9.899c.626 1.125.449 2.02-.55 2.646l-13.9 5.715c-1.177.628-2.006.308-2.66-.933c-3.119-5.78-5.78-9.577-10.152-12.338c-4.425-2.75-8.518-4.055-15.258-4.055c-7.327 0-10.601 1.457-15.191 4.744c-4.553 3.223-7.89 7.276-9.86 13.451c-.395 1.114-.754 2.496-1.175 4.12c-.346 1.65-.627 3.67-.805 6.035c-.18 2.366-.347 5.295-.5 8.748c-.102 3.453-.152 7.646-.152 12.506c0 4.884.05 9.078.152 12.53c.153 3.44.32 6.37.5 8.735c.178 2.391.46 4.4.805 6.063c.421 1.598.78 2.977 1.175 4.103c1.97 6.15 4.783 9.514 8.926 12.213c4.092 2.737 8.798 4.707 16.125 4.707c6.51 0 12.469-1.855 16.356-4.682c3.85-2.825 7.046-6.559 8.478-11.662c.627-2.148 1.433-4.822 1.983-8.095c.498-3.274.5-6.738.5-11.52c0-.755-.424-1.14-1.127-1.14h-22.264c-1.253 0-1.867-.613-1.867-1.866v-12.761c0-1.267.614-1.881 1.867-1.881h40.857c1.28 0 1.881.614 1.881 1.88v10.907c0 5.78 0 11.14-.601 16.101c-.576 4.962-1.355 9.257-2.34 12.389c-3.12 9.81-8.07 16.793-15.653 21.996c-7.609 5.243-17.417 8.068-28.07 8.068c-10.946 0-20.165-2.516-27.683-7.517c-7.532-5.064-12.918-12.496-16.204-22.432a42.571 42.571 0 0 1-1.482-5.83c-.384-2.007-.73-4.348-1.037-7.047c-.32-2.723-.524-5.919-.65-9.691c-.129-3.746-.18-8.325-.18-13.568c0-5.27.052-9.782.18-13.541c.127-3.773.33-7.01.65-9.708c.306-2.685.653-5.037 1.037-7.044c.37-2.02.857-3.94 1.484-5.819c3.286-9.936 8.67-17.404 16.202-22.418C305.036 98.518 314.255 96 325.2 96zm-151.674 77.813c43.569 0 76.803 19.858 76.803 62.646c0 29.028-22.916 58.083-53.861 65.32c18.733 33.249 41.252 62.662 58.08 80.973c9.898 10.703 23.646 20.268 37.392 20.268v9.912c-4.192 1.93-11.06 3.068-17.545 3.068c-22.16 0-39.718-8.773-51.2-22.545c-12.585-14.502-34.746-45.845-58.046-87.469c-12.25 0-20.268 0-29.437-.767v63.785c0 23.696 5.372 28.671 15.678 30.168l19.873 2.709v11.05c-9.553-.37-31.714-1.126-48.9-1.126c-17.968 0-35.923.756-46.23 1.127V401.88l14.503-2.71c9.974-1.891 15.652-6.47 15.652-30.167V218.506c0-23.708-5.678-28.261-15.652-30.18l-14.502-2.66V174.58c9.526.37 24.821.37 40.129.37c16.776 0 34.744-1.137 57.263-1.137zm-6.867 17.185c-10.32 0-22.136 0-30.947.768v95.845c8.811.83 14.515 1.176 27.508 1.176c34.015 0 54.629-20.243 54.629-50.422c0-30.536-19.08-47.367-51.19-47.367z"/></svg>
);

type GooglescholarProps = {
  size: string;
};
    
const Googlescholar = ({ size }: GooglescholarProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="#3b82f6"><path fill="#3b82f6" d="M5.242 13.769L0 9.5L12 0l12 9.5l-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14a7 7 0 0 0 0-14z"/></svg>
);


    
        

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <ProfileSection>
          <ProfilePicture>
            <img src="/images/profile.png" alt="Md. Ariful Islam" />
          </ProfilePicture>
          <Name>Md. Ariful Islam</Name>
          <Title>Researcher || Biomedical Engineering || Multimodal</Title>
        </ProfileSection>
        
        <ContactInfo>
          <ContactItem>
            📍 <span>Naogaon, Rajshahi, Bangladesh</span>
          </ContactItem>
          <ContactItem>
            ✉️ <span><a href="mailto:mukaffi28@gmail.com">arifbaust10@gmail.com</a></span>
          </ContactItem>
        </ContactInfo>
        
        <AcademicLinks>
          
          
          <LinkItem href="https://www.youtube.com/@Math-Code-Lab" target="_blank" rel="noopener noreferrer">
            <LinkIcon><Youtube size='20'/></LinkIcon>
            YouTube
          </LinkItem>

          
          <LinkItem href="https://www.researchgate.net/profile/Md-Ariful-Islam-79" target="_blank" rel="noopener noreferrer">
            <LinkIcon><ResearchgateSquare size='20'/></LinkIcon>
            ResearchGate
          </LinkItem>
          
          <LinkItem href="https://www.linkedin.com/in/md-ariful-islam-387876253/" target="_blank" rel="noopener noreferrer">
            <LinkIcon><Linkedin size='24'/></LinkIcon>
            LinkedIn
          </LinkItem>
          <LinkItem href="https://github.com/arifbaust10" target="_blank" rel="noopener noreferrer">
            <LinkIcon><Github size='24'/></LinkIcon>
            GitHub
          </LinkItem>




         
        </AcademicLinks>
        
        <VisitorMapContainer>
          <a href="https://clustrmaps.com/site/1c38a" title="ClustrMaps" target="_blank" rel="noopener noreferrer">
            <img src="https://www.clustrmaps.com/map_v2.png?d=hmIfEwbtPyT4fAgf0EIp_Xo1LUscuzQCoj1FtxsKDcI&cl=ffffff" width="200px" height="100px" alt="Visitor Map" />
          </a>
        </VisitorMapContainer>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar; 

