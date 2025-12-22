import React from 'react';
import styled from 'styled-components';
import { 
  Briefcase, 
  ExternalLink, 
  UserCog,
  Calendar, 
  Users, 
  Code, 
  Award, 
  Shield, 
  Zap, 
  Flag, 
  BookOpen 
} from 'lucide-react';

// --- Styled Components (Kept exactly the same as the original for consistency) ---

const WorkContainer = styled.div`
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

const Section = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
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
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`;

const JobItem = styled.div`
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
   
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #7AB2D3, #4A628A);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }
   
  &:hover {
    border-color: #7AB2D3;
  }
   
  &:hover::before {
    transform: none;
  }
`;

const JobTitle = styled.h3`
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CompanyName = styled.div`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #475569;
  font-weight: 600;
`;

const CompanyLink = styled.a`
  color:rgb(0, 63, 100);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
   
  &:hover {
    color: #4A628A;
    text-decoration: none;
  }
`;

const JobPeriod = styled.div`
  color:rgb(0, 67, 105);
  font-style: italic;
  margin-bottom: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  padding: 8px 16px;
  border-radius: 12px;
  display: inline-flex;
`;

const JobDescription = styled.ul`
  font-family: 'Inter', sans-serif;
  color: #475569;
  line-height: 1.8;
  list-style: none;
  padding: 0;
`;

const JobDescriptionItem = styled.li`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
   
  &:hover {
    border-color: #7AB2D3;
  }
   
  &::before {
    content: '▸';
    position: absolute;
    left: -8px;
    top: 1.5rem;
    background: #7AB2D3;
    color: white;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

const ContentCard = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
   
  &:hover {
    border-color: #7AB2D3;
  }
   
  strong {
    color: #4A628A;
    font-weight: 600;
  }
`;

const BulletList = styled.ul`
  margin: 0.6rem 0 0 1.2rem;
  padding: 0;
  list-style-type: disc;
`;

const BulletItem = styled.li`
  margin-bottom: 0.6rem;
`;

const TechnologyCard = styled.div`
  background: linear-gradient(135deg, #DFF2EB 0%, #B9E5E8 100%);
  border: 1px solid #7AB2D3;
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
   
  &:hover {
    border-color: #4A628A;
  }
   
  strong {
    color: #4A628A;
    font-weight: 600;
  }
`;

// --- Main Component ---

const Portfolio: React.FC = () => {
  return (
    <WorkContainer>
      <PageHeader>
        <PageTitle>Leadership & Achievements</PageTitle>
        <PageSubtitle>My journey in Leadership, Sports, and Academics</PageSubtitle>
      </PageHeader>

      <Section>
        
        {/* --- LEADERSHIP SECTION --- */}
        <SectionTitle>Leadership & Management</SectionTitle>

        <JobItem>
          <JobTitle>
            <Users size={28} />
            General Secretary
          </JobTitle>
          <CompanyName>
            <CompanyLink href="https://www.facebook.com/share/1LZBmWDqCY/" target="_blank" rel="noopener noreferrer">
              BAUST Computer Club & CSE Society
              <ExternalLink size={16} />
            </CompanyLink>
          </CompanyName>
          <JobPeriod>
            <Calendar size={18} />
            Core Committee
          </JobPeriod>
          <JobDescription>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Club Administration & Event Management</strong>
                <BulletList>
                  <BulletItem>Served as the General Secretary for both the Computer Club and the CSE Society at BAUST.</BulletItem>
                  <BulletItem>Lead the executive committee in organizing major departmental events, tech fests, and programming contests.</BulletItem>
                  <BulletItem>Acted as the primary liaison between students and the faculty, ensuring smooth communication and conflict resolution.</BulletItem>
                  <BulletItem>Managed club resources, budgets, and oversaw the successful execution of annual cultural and technical programs.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Key Skills:</strong> Leadership, Event Management, Team Coordination, Public Speaking, Conflict Resolution
              </TechnologyCard>
            </JobDescriptionItem>
          </JobDescription>
        </JobItem>

        <JobItem>
          <JobTitle>
            <UserCog size={28} /> {/* Icon for DR/Management */}
            Department Representative (DR)
          </JobTitle>
          <CompanyName>
            <CompanyLink href="#" onClick={(e) => e.preventDefault()}>
              Department of CSE, BAUST
            </CompanyLink>
          </CompanyName>
          <JobPeriod>
            <Calendar size={18} />
            Student Administration
          </JobPeriod>
          <JobDescription>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Coordination of Class Representatives (CRs)</strong>
                <BulletList>
                  <BulletItem>Appointed as the Department Representative (DR), serving as the bridge between the student body and the Department Head.</BulletItem>
                  <BulletItem>Supervised and coordinated the activities of all Class Representatives (CRs) across various batches.</BulletItem>
                  <BulletItem>Resolved academic and administrative issues by representing student concerns in academic meetings.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Key Responsibilities:</strong> Team Leadership, CR Management, Strategic Communication, Administration
              </TechnologyCard>
            </JobDescriptionItem>
          </JobDescription>
        </JobItem>

        <JobItem>
          <JobTitle>
            <Flag size={28} />
            Vice President (VP)
          </JobTitle>
          <CompanyName>
            <CompanyLink href="#" onClick={(e) => e.preventDefault()}>
              Student Cabinet Election
            </CompanyLink>
          </CompanyName>
          <JobPeriod>
            <Calendar size={18} />
            2017
          </JobPeriod>
          <JobDescription>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Student Representation</strong>
                <BulletList>
                  <BulletItem>Elected as Vice President in the 2017 Student Cabinet Election.</BulletItem>
                  <BulletItem>Represented the student body in administrative meetings and decision-making processes.</BulletItem>
                  <BulletItem>Implemented initiatives to improve student school life.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Focus Area:</strong> Student Welfare, Policy Making, School Management
              </TechnologyCard>
            </JobDescriptionItem>
          </JobDescription>
        </JobItem>

        {/* --- ACADEMIC SECTION --- */}
        <SectionTitle>Academic Experience</SectionTitle>

        <JobItem>
          <JobTitle>
            <Code size={28} />
            Teaching Experience
          </JobTitle>
          <CompanyName>
            <CompanyLink href="#" onClick={(e) => e.preventDefault()}>
             (17th, 18th, 19th)Batch, Department of CSE, BAUST
            </CompanyLink>
          </CompanyName>
          <JobPeriod>
            <Calendar size={18} />
            Undergraduate Period 
          </JobPeriod>
          <JobDescription>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Structured Programming (C) Mentorship</strong>
                <BulletList>
                  <BulletItem>Conducted programming classes and lab sessions for junior students at BAUST.</BulletItem>
                  <BulletItem>Specialized in teaching Structured Programming using C language.</BulletItem>
                  <BulletItem>Clarified complex concepts including Pointers, Arrays, Function, with problem solving.</BulletItem>
                  <BulletItem>Assisted students in debugging code and understanding algorithmic logic.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Subjects Taught:</strong> C Programming, Algorithms, Data Structures, Problem Solving
              </TechnologyCard>
            </JobDescriptionItem>
          </JobDescription>
        </JobItem>

        {/* --- SPORTS & CO-CURRICULAR SECTION --- */}
        <SectionTitle>Sports & Athletics</SectionTitle>

        <JobItem>
          <JobTitle>
            <Shield size={28} />
            Goalkeeper
          </JobTitle>
          <CompanyName>
            <CompanyLink href="#" onClick={(e) => e.preventDefault()}>
              CSE Department Football Team, BAUST
            </CompanyLink>
          </CompanyName>
          <JobDescription>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Inter-Departmental Sports</strong>
                <BulletList>
                  <BulletItem>Served as the primary Goalkeeper for the CSE Department football team.</BulletItem>
                  <BulletItem>Participated in various inter-departmental tournaments and friendly matches.</BulletItem>
                  <BulletItem>Demonstrated quick reflexes, team communication skills, and defensive strategy management on the field.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Skills:</strong> Teamwork, Resilience, Strategy, Physical Endurance
              </TechnologyCard>
            </JobDescriptionItem>
          </JobDescription>
        </JobItem>

        <JobItem>
          <JobTitle>
            <Zap size={28} />
            Martial Arts
          </JobTitle>
          <CompanyName>
            <CompanyLink href="#" onClick={(e) => e.preventDefault()}>
              Bangladesh Young King Karate Centre, Naogaon
            </CompanyLink>
          </CompanyName>
          <JobPeriod>
            <Award size={18} />
            Orange Belt
          </JobPeriod>
          <JobDescription>
            <JobDescriptionItem>
              <ContentCard>
                <strong>Karate Training</strong>
                <BulletList>
                  <BulletItem>Achieved Orange Belt certification from Bangladesh Young King Karate Centre.</BulletItem>
                  <BulletItem>Trained in self-defense techniques, discipline, and physical conditioning.</BulletItem>
                  <BulletItem>Developed mental focus and perseverance through rigorous martial arts practice.</BulletItem>
                </BulletList>
              </ContentCard>
              <TechnologyCard>
                <strong>Discipline:</strong> Karate, Self-Defense, Physical Fitness
              </TechnologyCard>
            </JobDescriptionItem>
          </JobDescription>
        </JobItem>

      </Section>
    </WorkContainer>
  );
};

export default Portfolio;