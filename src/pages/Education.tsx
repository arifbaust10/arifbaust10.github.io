import React from 'react';
import styled from 'styled-components';
import { GraduationCap, Award, ExternalLink, Calendar, Star, BookOpen } from 'lucide-react';

const EducationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  font-family: 'Inter', sans-serif;
`;

const EducationItem = styled.div`
  margin-bottom: 2.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::after {
    content: '🎓';
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
`;

const InstitutionName = styled.div`
  color: #1e293b;
  font-size: 1.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InstitutionLink = styled.a`
  color: #7AB2D3;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    color: #4A628A;
    text-decoration: none;
    transform: translateY(-1px);
  }
`;

const DegreeInfo = styled.div`
  margin-bottom: 0.75rem;
  color: #475569;
  font-size: 1.1rem;
  font-weight: 600;
`;

const Duration = styled.div`
  margin-bottom: 0.75rem;
  color: #64748b;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CGPA = styled.div`
  margin-bottom: 1rem;
  font-weight: 700;
  color: #059669;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  padding: 8px 16px;
  border-radius: 12px;
  display: inline-flex;
`;

const Supervisor = styled.div`
  margin-bottom: 1rem;
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
`;

const SupervisorLink = styled.a`
  color: #dc2626;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #b91c1c;
    text-decoration: none;
    transform: translateY(-1px);
  }
`;

const AwardsSection = styled.div`
  margin-top: 4rem;
`;

const AwardsTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f59e0b, #d97706);
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
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #f59e0b, #d97706);
    border-radius: 2px;
  }
`;

const AwardItem = styled.div`
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  line-height: 1.7;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #fef3c7 100%);
  border: 1px solid #fde68a;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '🏆';
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    opacity: 0.7;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(245, 158, 11, 0.15);
    border-color: #f59e0b;
  }
`;

const AwardTitle = styled.span`
  color: #dc2626;
  font-weight: 700;
  font-size: 1.1rem;
`;

const AwardLink = styled.a`
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #1d4ed8;
    text-decoration: none;
    transform: translateY(-1px);
  }
`;

const PosterLink = styled.a`
  color: #dc2626;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, #fef2f2, #fee2e2);
  padding: 4px 12px;
  border-radius: 8px;
  
  &:hover {
    color: #b91c1c;
    text-decoration: none;
    transform: translateY(-1px);
  }
`;

const Education: React.FC = () => {
  return (
    <EducationContainer>
      <EducationItem>
        <InstitutionName>
          <GraduationCap size={28} />
          <InstitutionLink href="https://baust.edu.bd/" target="_blank" rel="noopener noreferrer">
            Bangladesh Army University of Science and Technology (BAUST), Saidpur 
            <ExternalLink size={16} />
          </InstitutionLink>
        </InstitutionName>
        <DegreeInfo>Bachelor of Science (B.Sc.)</DegreeInfo>
        <DegreeInfo>Computer Science and Engineering</DegreeInfo>
        <Duration>
          <Calendar size={18} />
          Duration: 2022 - 2026
        </Duration>
        <CGPA>
          <Star size={18} />
          CGPA: <b>3.87/4.00</b> scale (AVG <b>6<sup>th </sup></b>Semester) 
        </CGPA>
        <Supervisor>
          <strong>Supervisor:</strong>{' '}
          <SupervisorLink href="https://www.linkedin.com/in/md-nakib-hayat-chowdhury-phd-b23a8874/" target="_blank" rel="noopener noreferrer">
            Dr. Md Nakib Hayat Chowdhury
            <ExternalLink size={14} />
          </SupervisorLink>
          , Associate Professor and Head, Department of CSE, BAUST
        </Supervisor>
      </EducationItem>

      <EducationItem>
        <InstitutionName>
          <BookOpen size={28} />
          <InstitutionLink href="https://www.naogc.edu.bd/" target="_blank" rel="noopener noreferrer">
          Naogaon Govt. College, Naogaon
            <ExternalLink size={16} />
          </InstitutionLink>
        </InstitutionName>
        <DegreeInfo>Higher Secondary Certificate (HSC)</DegreeInfo>
        <Duration>
          <Calendar size={18} />
          Duration: 2019 - 2020
        </Duration>
        <CGPA>
          <Star size={18} />
          GPA: <b>5.00/5.00</b> scale
        </CGPA>
      </EducationItem>

      
       
    </EducationContainer>
  );
};

export default Education; 
