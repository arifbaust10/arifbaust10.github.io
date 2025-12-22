import React from 'react';
import styled from 'styled-components';
import {Youtube,Network,Cpu,Sigma, Code, Brain, Calendar, ExternalLink, Award, GraduationCap, Users, BookOpen, Trophy } from 'lucide-react';

const NewsContainer = styled.div`
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

const YearSection = styled.div`
  margin-bottom: 4rem;
  position: relative;
`;

const YearTitle = styled.h2`
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

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`;

const NewsItem = styled.div`
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  line-height: 1.6;
  position: relative;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 2rem;
    width: 16px;
    height: 16px;
    background: #7AB2D3;
    border-radius: 50%;
    border: 4px solid #ffffff;
    box-shadow: 0 0 0 4px #7AB2D3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateX(8px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    background: #4A628A;
    box-shadow: 0 0 0 4px #4A628A, 0 0 20px rgba(74, 98, 138, 0.4);
  }
`;

const NewsDate = styled.span`
  color: #4A628A;
  font-weight: 700;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.5rem;
`;

const NewsContent = styled.div`
  color: #475569;
  font-size: 1rem;
  line-height: 1.7;
`;

const NewsLink = styled.a`
  color: #7AB2D3;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #4A628A;
    text-decoration: none;
    transform: translateY(-1px);
  }
`;



// New Styled Component for the Thumbnail
const VideoThumbnail = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const YouTubeChannel: React.FC = () => {
  return (
    <NewsContainer>
      <PageHeader>
        <PageTitle>Welcome to Math & Code Lab</PageTitle>
        <PageSubtitle style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Learn math, programming, and academic subjects in one place.
          <br /><br />
          Simple lessons to help students and professionals succeed in today’s digital world.
        </PageSubtitle>


       

        <div style={{ marginTop: '24px' }}>
          <NewsLink 
            href="mailto:arifbaust10@gmail.com" 
            style={{ fontSize: '0.9rem', opacity: 0.8 }}
          >
            For inquiries or collaborations, please reach out to: arifbaust10@gmail.com
          </NewsLink>
        </div>
      </PageHeader>

      <YearSection>
        <YearTitle>Featured Playlists</YearTitle>
        <TimelineContainer>
          
          {/* C Programming Playlist */}
          <NewsItem>
            <NewsDate>
              <Code size={18} />
            </NewsDate>
            <NewsContent>
              <h3 style={{ margin: '0 0 8px 0', color: 'inherit' }}>C Programming Bangla Tutorial Playlist</h3>
              
              <a href="https://www.youtube.com/watch?v=9bRg65kMbJ8&list=PLZfT_nKsoToka_igFtwqCVoqi4sbCseBp" target="_blank" rel="noopener noreferrer">
                <VideoThumbnail 
                  src="https://img.youtube.com/vi/9bRg65kMbJ8/mqdefault.jpg" 
                  alt="C Programming Thumbnail" 
                />
              </a>

              <p style={{ fontSize: '0.95rem', marginBottom: '12px', lineHeight: '1.5' }}>
                A comprehensive guide for beginners. <strong>Not only learn C programming, but also learn how to start at a beginner level 
                and how to solve problems on platforms like Beecrowd, Codeforces, and HackerRank.</strong> Master the fundamentals and 
                build a strong foundation for competitive programming.
              </p>
              <NewsLink 
                href="https://www.youtube.com/watch?v=9bRg65kMbJ8&list=PLZfT_nKsoToka_igFtwqCVoqi4sbCseBp" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Watch Full Playlist <Youtube size={16} style={{ marginLeft: '4px' }} />
              </NewsLink>
            </NewsContent>
          </NewsItem>

          {/* Machine Learning Playlist */}
          <NewsItem>
            <NewsDate>
              <Brain size={18} />
            </NewsDate>
            <NewsContent>
              <h3 style={{ margin: '0 0 8px 0', color: 'inherit' }}>Machine Learning Playlist</h3>
              
              <a href="https://www.youtube.com/watch?v=nltezF2691I&list=PLZfT_nKsoTol-rsdg_k0AybK_pPBNzsEJ" target="_blank" rel="noopener noreferrer">
                <VideoThumbnail 
                  src="https://img.youtube.com/vi/nltezF2691I/mqdefault.jpg" 
                  alt="Machine Learning Thumbnail" 
                />
              </a>

              <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}>
              Start your journey into Machine Learning with this easy-to-follow playlist that breaks down complex concepts into simple steps. You will learn exactly how computers learn and gain the practical skills to build your own smart models from scratch.
              </p>
              <NewsLink 
                href="https://www.youtube.com/watch?v=nltezF2691I&list=PLZfT_nKsoTol-rsdg_k0AybK_pPBNzsEJ" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Watch Full Playlist <Youtube size={16} style={{ marginLeft: '4px' }} />
              </NewsLink>
            </NewsContent>
          </NewsItem>

          {/* Computer Network Lab */}
          <NewsItem>
            <NewsDate>
              <Network size={18} />
              [Lab]
            </NewsDate>
            <NewsContent>
              <h3 style={{ margin: '0 0 8px 0', color: 'inherit' }}>Computer Network Lab</h3>
              
              <a href="https://www.youtube.com/watch?v=nIVJBlAHgm0&list=PLZfT_nKsoTokfbLqOdAhHrSPWUIrGHkKA&pp=0gcJCbEEOCosWNin" target="_blank" rel="noopener noreferrer">
                <VideoThumbnail 
                  src="https://img.youtube.com/vi/nIVJBlAHgm0/mqdefault.jpg" 
                  alt="Computer Network Lab Thumbnail" 
                />
              </a>

              <p style={{ fontSize: '0.95rem', marginBottom: '12px', lineHeight: '1.5' }}>
                Hands-on practical tutorials for Computer Networking. <strong>Learn to configure Static and Dynamic (RIP) routing, 
                master IP addressing and subnetting, and handle real-world router configuration tasks</strong> using simulation tools.
              </p>

              <NewsLink 
                href="https://www.youtube.com/watch?v=nIVJBlAHgm0&list=PLZfT_nKsoTokfbLqOdAhHrSPWUIrGHkKA&pp=0gcJCbEEOCosWNin" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Watch Full Playlist <Youtube size={16} style={{ marginLeft: '4px' }} />
              </NewsLink>
            </NewsContent>
          </NewsItem>


          {/* Operating System Playlist */}
          <NewsItem>
            <NewsDate>
              <Cpu size={18} />
            </NewsDate>
            <NewsContent>
              <h3 style={{ margin: '0 0 8px 0', color: 'inherit' }}>Operating System</h3>
              
              <a href="https://www.youtube.com/watch?v=Y244h74Urwc&list=PLZfT_nKsoTokCkFUmUdhYt4A9fPO4NeCj" target="_blank" rel="noopener noreferrer">
                <VideoThumbnail 
                  src="https://img.youtube.com/vi/Y244h74Urwc/mqdefault.jpg" 
                  alt="Operating System Thumbnail" 
                />
              </a>

              <p style={{ fontSize: '0.95rem', marginBottom: '12px', lineHeight: '1.5' }}>
                Dive into core OS concepts. Learn about <strong>CPU Scheduling algorithms like First Come First Serve (FCFS)</strong>, 
                how to draw Gantt charts, and calculate Completion, Turnaround, and Waiting times step-by-step.
              </p>

              <NewsLink 
                href="https://www.youtube.com/watch?v=Y244h74Urwc&list=PLZfT_nKsoTokCkFUmUdhYt4A9fPO4NeCj" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Watch Full Playlist <Youtube size={16} style={{ marginLeft: '4px' }} />
              </NewsLink>
            </NewsContent>
          </NewsItem>


          {/* Mathematical Analysis For Computer Science Playlist */}
          <NewsItem>
            <NewsDate>
              <Sigma size={18} />
              [Math]
            </NewsDate>
            <NewsContent>
              <h3 style={{ margin: '0 0 8px 0', color: 'inherit' }}>Mathematical Analysis For Computer Science</h3>
              
              <a href="https://www.youtube.com/watch?v=d4FBNlijq2g&list=PLZfT_nKsoTol4mVRflxSf3-FwDpn0JAA5" target="_blank" rel="noopener noreferrer">
                <VideoThumbnail 
                  src="https://img.youtube.com/vi/d4FBNlijq2g/mqdefault.jpg" 
                  alt="Mathematical Analysis Thumbnail" 
                />
              </a>

              <p style={{ fontSize: '0.95rem', marginBottom: '12px', lineHeight: '1.5' }}>
                Master mathematical concepts for CS. Learn how to solve recurrence relations and derive formulas for problems like 
                <strong>"Lines in the Plane"</strong> to calculate the maximum number of regions created by <em>n</em> straight lines.
              </p>

              <NewsLink 
                href="https://www.youtube.com/watch?v=d4FBNlijq2g&list=PLZfT_nKsoTol4mVRflxSf3-FwDpn0JAA5" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Watch Full Playlist <Youtube size={16} style={{ marginLeft: '4px' }} />
              </NewsLink>
            </NewsContent>
          </NewsItem>
            


        </TimelineContainer>
      </YearSection>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <NewsLink 
          href="https://www.youtube.com/@Math-Code-Lab" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
        >
          Visit Math & Code Lab Channel <ExternalLink size={18} />
        </NewsLink>
      </div>
    </NewsContainer>
  );
};

export default YouTubeChannel;