import React from 'react';
import styled from 'styled-components';
import { Activity, Brain, Microscope, ScanEye, Cpu, HeartPulse } from 'lucide-react';

// --- Styled Components (Same design) ---

const ResearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ResearchTitle = styled.h1`
  color: #1e293b;
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ResearchIntro = styled.p`
  text-align: center;
  color: #475569;
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CategoryTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #006098ff, #0048c5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ResearchArea = styled.div`
  margin-bottom: 4rem;
`;

const AreaTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #54a3d1ff, #7AB2D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, #7AB2D3, transparent);
    border-radius: 1px;
  }
`;

const InterestItem = styled.div`
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  line-height: 1.7;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  transition: all 0.4s;
  cursor: default;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
`;

const InterestText = styled.span`
  color: #1e293b;
  font-weight: 600;
  font-size: 1.1rem;
`;

const Research: React.FC = () => {
  return (
    <ResearchContainer>
      <ResearchTitle>Research Interests</ResearchTitle>
      <ResearchIntro>
        I am focused on the intersection of Engineering and Healthcare. 
        My goal is to apply modern AI and algorithms to solve complex problems in Biomedical Engineering for better patient care.
      </ResearchIntro>

      {/* Category 1: Core Biomedical Focus */}
      <CategoryTitle>1. Biomedical Engineering Core</CategoryTitle>

      <ResearchArea>
        <AreaTitle><HeartPulse size={24}/> Healthcare Technology</AreaTitle>
        <InterestItem>
          <InterestText>
            I study how engineering principles can be applied to biology to create life-saving medical systems.
          </InterestText>
        </InterestItem>
        <InterestItem>
          <InterestText>
            I am interested in designing systems that assist doctors in diagnosis and treatment planning.
          </InterestText>
        </InterestItem>
      </ResearchArea>

      

      {/* Category 2: AI for Medical Imaging */}
      <CategoryTitle>2. AI in Medical Imaging</CategoryTitle>

      <ResearchArea>
        <AreaTitle><ScanEye size={24}/> CNN & Computer Vision</AreaTitle>
        <InterestItem>
          <InterestText>
            I apply Convolutional Neural Networks (CNN) to automatically detect diseases in X-rays, MRI, and CT scans.
          </InterestText>
        </InterestItem>
        <InterestItem>
          <InterestText>
            I am working on techniques to make medical images clearer and easier for machines to understand.
          </InterestText>
        </InterestItem>
      </ResearchArea>

      {/* Category 3: Intelligent Medical Systems */}
      <CategoryTitle>3. Intelligent Health Systems</CategoryTitle>

      <ResearchArea>
        <AreaTitle><Brain size={24}/> Multimodal AI for Health</AreaTitle>
        <InterestItem>
          <InterestText>
            I aim to build systems that combine patient scans (images) and medical history (text) for accurate diagnosis.
          </InterestText>
        </InterestItem>
      </ResearchArea>

      <ResearchArea>
        <AreaTitle><Cpu size={24}/> NLP & Machine Learning</AreaTitle>
        <InterestItem>
          <InterestText>
             I explore Natural Language Processing (NLP) to extract useful information from clinical reports and doctor notes.
          </InterestText>
        </InterestItem>
        <InterestItem>
          <InterestText>
             I use Machine Learning algorithms to predict patient risk factors based on their medical data.
          </InterestText>
        </InterestItem>
      </ResearchArea>

    </ResearchContainer>
  );
};

export default Research;