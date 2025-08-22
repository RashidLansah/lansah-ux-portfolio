import React from 'react';
import styled from 'styled-components';
import { ArrowLeft, Mail, BookOpen, Linkedin } from 'lucide-react';

// Styled Components
const AboutContainer = styled.div<{ $isDarkMode: boolean }>`
  min-height: 100vh;
  background: ${props => props.$isDarkMode ? '#000' : '#fafafa'};
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding-bottom: 120px; /* Ensure floating menu doesn't cover content */
`;

const HeaderSection = styled.div<{ $isDarkMode: boolean }>`
  padding: 2rem;
  border-bottom: 1px solid ${props => props.$isDarkMode ? '#333' : '#e5e5e5'};
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const BackButton = styled.button<{ $isDarkMode: boolean }>`
  background: none;
  border: 1px solid ${props => props.$isDarkMode ? '#555' : '#e5e5e5'};
  color: ${props => props.$isDarkMode ? '#ccc' : '#666'};
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: ${props => props.$isDarkMode ? '#fff' : '#000'};
    border-color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  }
`;



const AboutBody = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const IntroSection = styled.div<{ $isDarkMode: boolean }>`
  margin-bottom: 4rem;
`;

const IntroHeadline = styled.h2<{ $isDarkMode: boolean }>`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IntroDescription = styled.p<{ $isDarkMode: boolean }>`
  font-size: 1.2rem;
  color: ${props => props.$isDarkMode ? '#ccc' : '#666'};
  margin: 0 0 2rem 0;
  line-height: 1.6;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.button<{ $isDarkMode: boolean; $variant: 'availability' | 'contact' }>`
  background: ${props => props.$isDarkMode ? '#333' : '#f0f0f0'};
  border: 1px solid ${props => props.$isDarkMode ? '#555' : '#e5e5e5'};
  color: ${props => props.$isDarkMode ? '#ccc' : '#666'};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  
  &:hover {
    background: ${props => props.$isDarkMode ? '#444' : '#e0e0e0'};
  }
`;

const AvailabilityDot = styled.div`
  width: 8px;
  height: 8px;
  background: #ef4444;
  border-radius: 50%;
`;

const SelectedWorkSection = styled.div<{ $isDarkMode: boolean }>`
  margin-bottom: 4rem;
  text-align: center;
`;

const WorkExample = styled.div<{ $isDarkMode: boolean }>`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 16px;
  padding: 3rem 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const WorkLogo = styled.div`
  background: white;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
`;

const WorkTitle = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

const WorkDescription = styled.div`
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;
  }
`;

const OverviewSection = styled.div<{ $isDarkMode: boolean }>`
  margin-bottom: 4rem;
`;

const OverviewHeadline = styled.h3<{ $isDarkMode: boolean }>`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  margin: 0 0 1.5rem 0;
  line-height: 1.4;
`;

const OverviewDescription = styled.p<{ $isDarkMode: boolean }>`
  font-size: 1.1rem;
  color: ${props => props.$isDarkMode ? '#ccc' : '#666'};
  margin: 0;
  line-height: 1.6;
`;

const ExperienceSection = styled.div<{ $isDarkMode: boolean }>`
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const ExperienceItem = styled.div<{ $isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: ${props => props.$isDarkMode ? '#1a1a1a' : '#f8f8f8'};
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: ${props => props.$isDarkMode ? '#2a2a2a' : '#f0f0f0'};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const Year = styled.div<{ $isDarkMode: boolean }>`
  font-size: 1rem;
  color: ${props => props.$isDarkMode ? '#ccc' : '#666'};
  min-width: 60px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    min-width: 50px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    min-width: auto;
    font-weight: 600;
    color: ${props => props.$isDarkMode ? '#aaa' : '#888'};
  }
`;

const Company = styled.div<{ $isDarkMode: boolean }>`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  flex: 1;
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 0.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin: 0;
    flex: none;
    color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  }
`;

const Role = styled.div<{ $isDarkMode: boolean }>`
  font-size: 1rem;
  color: ${props => props.$isDarkMode ? '#ccc' : '#666'};
  margin-right: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-right: 0.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-right: 0;
    color: ${props => props.$isDarkMode ? '#aaa' : '#888'};
  }
`;



const ContactSection = styled.div<{ $isDarkMode: boolean }>`
  text-align: center;
  padding: 3rem 2rem;
  background: ${props => props.$isDarkMode ? '#1a1a1a' : '#f8f8f8'};
  border-radius: 16px;
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#e5e5e5'};
`;

const ContactHeadline = styled.h3<{ $isDarkMode: boolean }>`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  margin: 0 0 1rem 0;
  line-height: 1.4;
`;



const ContactButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactButton = styled.button<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? '#333' : '#f0f0f0'};
  border: 1px solid ${props => props.$isDarkMode ? '#555' : '#e5e5e5'};
  color: ${props => props.$isDarkMode ? '#ccc' : '#666'};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  
  &:hover {
    background: ${props => props.$isDarkMode ? '#444' : '#e0e0e0'};
  }
`;

const SocialButton = styled.button<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? '#333' : '#f0f0f0'};
  border: 1px solid ${props => props.$isDarkMode ? '#555' : '#e5e5e5'};
  color: ${props => props.$isDarkMode ? '#ccc' : '#666'};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${props => props.$isDarkMode ? '#444' : '#e0e0e0'};
  }
`;

// About Interface
interface AboutProps {
  isDarkMode: boolean;
  onBack: () => void;
}

// About Component
export const About: React.FC<AboutProps> = ({ isDarkMode, onBack }) => {

  return (
    <AboutContainer $isDarkMode={isDarkMode}>
      {/* Header with back button only */}
      <HeaderSection $isDarkMode={isDarkMode}>
        <HeaderContent>
          <BackButton $isDarkMode={isDarkMode} onClick={onBack}>
            <ArrowLeft size={16} />
            Back to Projects
          </BackButton>
        </HeaderContent>
      </HeaderSection>

      <AboutBody>
        {/* Introduction Section */}
        <IntroSection $isDarkMode={isDarkMode}>
          <IntroHeadline $isDarkMode={isDarkMode}>
            I'm Lansah, a hands-on Product Designer with over seven years of experience turning complex problems into simple, impactful user experiences.
          </IntroHeadline>
          <IntroDescription $isDarkMode={isDarkMode}>
            In my most recent role at a VC-backed AI company, I was the first Product Designer, taking its flagship AI bookkeeping product from MVP to scale, contributing to $1M ARR, helping secure $2.2M in funding, and building the UX foundation, workflows, and design system that powered its growth. On Upwork, I've partnered with clients across industries to deliver user-focused, visually consistent digital products that drive measurable business results.
          </IntroDescription>
          
          <ActionButtons>
            <ActionButton $isDarkMode={isDarkMode} $variant="availability">
              <AvailabilityDot />
              Available for Projects
            </ActionButton>
            <ActionButton $isDarkMode={isDarkMode} $variant="contact">
              Get in touch
            </ActionButton>
          </ActionButtons>
        </IntroSection>

        {/* Selected Work Example */}
        <SelectedWorkSection $isDarkMode={isDarkMode}>
          <WorkExample $isDarkMode={isDarkMode}>
            <WorkLogo>AI</WorkLogo>
            <WorkTitle>Jenesys AI</WorkTitle>
          </WorkExample>
          <WorkDescription>
            <span>AI Bookkeeping Platform</span>
            <span>From MVP to $1M ARR</span>
          </WorkDescription>
        </SelectedWorkSection>

        {/* About/Experience Overview */}
        <OverviewSection $isDarkMode={isDarkMode}>
          <OverviewHeadline $isDarkMode={isDarkMode}>
            I believe great design is a balance of creativity, research, and evidence.
          </OverviewHeadline>
          <OverviewDescription $isDarkMode={isDarkMode}>
            My process blends data-driven insights, user research, iterative design, and hands-on execution to ensure solutions meet evolving user needs while supporting business goals. Whether taking a product from 0→1 or optimizing from 1→10, I thrive in environments where design delivers measurable impact.
          </OverviewDescription>
        </OverviewSection>

        {/* Experience Timeline */}
        <ExperienceSection $isDarkMode={isDarkMode}>
          <ExperienceItem $isDarkMode={isDarkMode}>
            <Year $isDarkMode={isDarkMode}>2024</Year>
            <Company $isDarkMode={isDarkMode}>adplist.org</Company>
            <Role $isDarkMode={isDarkMode}>Design Mentor</Role>
          </ExperienceItem>
          
          <ExperienceItem $isDarkMode={isDarkMode}>
            <Year $isDarkMode={isDarkMode}>2020</Year>
            <Company $isDarkMode={isDarkMode}>Upwork</Company>
            <Role $isDarkMode={isDarkMode}>Top Rated Product Designer</Role>
          </ExperienceItem>
          
          <ExperienceItem $isDarkMode={isDarkMode}>
            <Year $isDarkMode={isDarkMode}>2023</Year>
            <Company $isDarkMode={isDarkMode}>Jenesys AI</Company>
            <Role $isDarkMode={isDarkMode}>Founding Product Designer</Role>
          </ExperienceItem>
          
          <ExperienceItem $isDarkMode={isDarkMode}>
            <Year $isDarkMode={isDarkMode}>2022</Year>
            <Company $isDarkMode={isDarkMode}>EventIgnite</Company>
            <Role $isDarkMode={isDarkMode}>Visual Designer</Role>
          </ExperienceItem>
          
          <ExperienceItem $isDarkMode={isDarkMode}>
            <Year $isDarkMode={isDarkMode}>2022</Year>
            <Company $isDarkMode={isDarkMode}>dbaza health</Company>
            <Role $isDarkMode={isDarkMode}>Product Designer</Role>
          </ExperienceItem>
          
          <ExperienceItem $isDarkMode={isDarkMode}>
            <Year $isDarkMode={isDarkMode}>2017</Year>
            <Company $isDarkMode={isDarkMode}>GuildBytes Tech Solutions</Company>
            <Role $isDarkMode={isDarkMode}>Lead Product Designer</Role>
          </ExperienceItem>
        </ExperienceSection>

        {/* Availability and Contact */}
        <ContactSection $isDarkMode={isDarkMode}>
          <ContactHeadline $isDarkMode={isDarkMode}>
            I'm currently available for new projects and would love to hear about what you're working on. Whether it's product design, UX strategy, or helping build something from the ground up, I'm excited to explore opportunities.
          </ContactHeadline>

          
          <ContactButtons>
            <ContactButton 
              $isDarkMode={isDarkMode}
              onClick={() => window.location.href = 'mailto:rashidlansahadam@gmail.com'}
            >
              <Mail size={16} />
              Get in touch
            </ContactButton>
            <SocialButton 
              $isDarkMode={isDarkMode}
              onClick={() => window.open('https://medium.com/@rashidlansah', '_blank')}
              title="Medium"
            >
              <BookOpen size={16} />
            </SocialButton>
            <SocialButton 
              $isDarkMode={isDarkMode}
              onClick={() => window.open('https://linkedin.com/in/rashid-lansah', '_blank')}
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </SocialButton>
          </ContactButtons>
        </ContactSection>
      </AboutBody>
    </AboutContainer>
  );
};

export default About; 