import React, { useState } from 'react';
import styled from 'styled-components';
import { ExternalLink, FileText, Github, Layers, Eye, X, Terminal, Database, Layout } from 'lucide-react';

// --- STYLED COMPONENTS ---

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const HeaderText = styled.p`
  color: #333;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`;

const ProjectItem = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A, #B9E5E8);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const ProjectTitle = styled.h3`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  line-height: 1.4;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const ProjectContext = styled.p`
  color: #475569;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #7AB2D3;
  color: #4A628A;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Inter', monospace;
`;

const ProjectActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &:hover::before {
    left: 100%;
  }

  /* Specific Button Styles */
  &.features {
    background: linear-gradient(135deg, #E195AB, #E14434);
    color: white;
  }

  &.github {
    background: linear-gradient(135deg, #2b3137, #24292e);
    color: white;
  }

  &.live {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  vertical-align: middle;
  
  &.academic {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: white;
  }
  
  &.personal {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
  }
`;

// --- MODAL STYLES ---
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
`;

const ModalTitle = styled.h3`
  color: #1e293b;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
  padding: 0.2rem;
  transition: color 0.2s;
  
  &:hover {
    color: #ef4444;
  }
`;

const ModalBody = styled.div`
  color: #475569;
  line-height: 1.7;
  font-size: 1rem;
  
  ul {
    padding-left: 1.2rem;
    margin-top: 0.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

// --- DATA ---

const projectData = [
  {
    id: 4,
    title: "Pizza Sales Data Analysis",
    category: "Personal",
    context: "Self Development Project",
    tools: ["Python", "Matplotlib", "Seaborn", "Tableau Public"],
    github: "https://github.com/arifbaust10/Data-Analyst-Final-Project/",
    description: "An analytical project visualizing sales trends and performance metrics.",
    features: [
      "Data cleaning and preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Visualization of sales trends using Matplotlib/Seaborn",
      "Interactive dashboard creation in Tableau",
      "Insight generation for business strategy"
    ]
  },
  {
    id: 3,
    title: "E-commerce Website",
    category: "Academic",
    context: "University 3rd Year Project",
    tools: ["Python", "Django", "ORM", "Bootstrap", "HTML/CSS", "JavaScript"],
    github: "https://github.com/arifbaust10/rasaecommerce",
    description: "A fully functional e-commerce platform built with Django.",
    features: [
      "Product browsing and categorization",
      "User authentication and profile management",
      "Shopping cart functionality",
      "Database management using Django ORM",
      "Responsive design with Bootstrap"
    ]
  },
  {
    id: 1,
    title: "University Attendance Management System",
    category: "Academic",
    context: "University 2nd Year Project",
    tools: ["PHP", "MySQL", "Bootstrap", "HTML/CSS", "JavaScript"],
    github: "https://github.com/arifbaust10/university-attendance-management-system",
    description: "A comprehensive web-based system to manage university operations.",
    features: [
      "Automated Attendance Tracking",
      "Dynamic Report Generation",
      "Student Admission Module",
      "Secure User Login System",
      "Dedicated Dashboards for Students and Teachers"
    ]
  },
  {
    id: 2,
    title: "Attendance App",
    category: "Academic",
    context: "University 3rd Year Project",
    tools: ["Java", "XML", "Android SDK"],
    github: "https://github.com/arifbaust10/Attandance-App",
    description: "A mobile application focused on streamlining attendance processes.",
    features: [
      "Mobile-based attendance marking",
      "User-friendly XML interface",
      "Data storage and retrieval",
      "optimized for Android devices"
    ]
  }
];

const Projects: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string, features: string[] } | null>(null);

  const openModal = (title: string, features: string[]) => {
    setModalContent({ title, features });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ProjectsContainer>
      {/* <Header>
        <HeaderText>
           Explore my academic and personal project.
        </HeaderText>
      </Header>

      <SectionTitle>Project Portfolio</SectionTitle> */}

      {projectData.map((project) => (
        <ProjectItem key={project.id}>
          <ProjectTitle>
            {project.title}
            <StatusBadge className={project.category === 'Academic' ? 'academic' : 'personal'}>
              {project.category}
            </StatusBadge>
          </ProjectTitle>
          
          <ProjectContext>
            {project.context}
          </ProjectContext>

          <TechStackContainer>
            {project.tools.map((tool, index) => (
              <TechBadge key={index}>
                {index === 0 && <Terminal size={12} style={{marginRight: '4px', display:'inline'}}/>}
                {tool}
              </TechBadge>
            ))}
          </TechStackContainer>

          <p style={{ color: '#64748b', marginBottom: '1rem', fontStyle: 'italic' }}>
            {project.description}
          </p>

          <ProjectActions>
            {/* Features Button (Opens Modal) */}
            <ActionButton 
              as="button" 
              className="features"
              onClick={() => openModal(project.title, project.features)}
            >
              <Eye size={16} />
              View Features
            </ActionButton>

            {/* GitHub Button */}
            <ActionButton 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github"
            >
              <Github size={16} />
              GitHub Repository
            </ActionButton>
          </ProjectActions>
        </ProjectItem>
      ))}

      {modalContent && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Project Features</ModalTitle>
              <CloseButton onClick={closeModal}>
                <X size={24} />
              </CloseButton>
            </ModalHeader>
            <div style={{ marginBottom: '1rem', color: '#1e293b', fontWeight: '600' }}>
              {modalContent.title}
            </div>
            <ModalBody>
              <ul>
                {modalContent.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </ProjectsContainer>
  );
};

export default Projects;