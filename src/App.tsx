import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FolderOpen, User, FlaskConical, Sun, Moon, Mail, Linkedin, ExternalLink } from 'lucide-react';
import './App.css';
import JenesysAICaseStudy from './components/CaseStudy';
import BorlaPayCaseStudy from './components/BorlaPayCaseStudy';
import About from './components/About';

// Styled Components
const AppContainer = styled.div<{ $isDarkMode: boolean }>`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: ${props => props.$isDarkMode ? '#000' : '#fff'};
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  min-height: 100vh;
  overflow-x: hidden;
  transition: all 0.3s ease;
`;

const HeaderWrapper = styled.div<{ $isDarkMode: boolean }>`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${props => props.$isDarkMode ? '#000' : '#fff'};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;
`;

const Header = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const ThemeToggle = styled.button<{ $isDarkMode: boolean }>`
  background: transparent;
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#ddd'};
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    border-color: ${props => props.$isDarkMode ? '#555' : '#bbb'};
    transform: scale(1.05);
  }
`;

const Logo = styled.div<{ $isDarkMode: boolean }>`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  letter-spacing: 0.1em;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const Hero = styled.section<{ $isDarkMode: boolean }>`
  padding: 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$isDarkMode ? '#000' : '#fff'};
  transition: all 0.3s ease;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  max-width: 1000px;
  margin-top: 1rem;
  min-height: 250px;
  justify-content: center;
  
  @media (max-width: 768px) {
    min-height: 200px;
    margin-top: 0.5rem;
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    min-height: 180px;
    margin-top: 0.25rem;
    gap: 0.75rem;
  }
`;



const HeroText = styled.div<{ $isDarkMode: boolean }>`
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  h1 {
    margin: 0;
    color: ${props => props.$isDarkMode ? '#fff' : '#000'};
    display: block;
    text-align: center;
    
    .line1 {
      font-size: 3rem;
      font-weight: 600;
      line-height: 1.4;
      text-align: center;
      max-width: 900px;
      white-space: normal;
      margin: 0 auto;
    }
    
    @media (max-width: 768px) {
      .line1 {
        font-size: 2rem;
        max-width: 600px;
        line-height: 1.3;
      }
    }
    
    @media (max-width: 480px) {
      .line1 {
        font-size: 1.6rem;
        max-width: 100%;
        line-height: 1.2;
      }
    }
  }
  
  @media (max-width: 768px) {
    min-height: 120px;
  }
  
  @media (max-width: 480px) {
    min-height: 100px;
  }
`;

const HeroSubtitle = styled.div<{ $isDarkMode: boolean }>`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  
  p {
    font-size: 1.2rem;
    color: ${props => props.$isDarkMode ? '#ccc' : '#666'};
    line-height: 1.6;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    p {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    p {
      font-size: 1rem;
    }
  }
`;





const TabNavigation = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TabItem = styled.span<{ $isActive?: boolean; $isDarkMode: boolean }>`
  font-size: 1rem;
  color: ${props => {
    if (props.$isDarkMode) {
      return props.$isActive ? '#fff' : '#666';
    } else {
      return props.$isActive ? '#1e293b' : '#64748b';
    }
  }};
  font-weight: ${props => props.$isActive ? '700' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${props => {
    if (props.$isActive) {
      if (props.$isDarkMode) {
        return 'rgba(255, 255, 255, 0.15)';
      } else {
        return 'rgba(0, 0, 0, 0.08)';
      }
    }
    return 'transparent';
  }};
  border: ${props => {
    if (props.$isActive) {
      if (props.$isDarkMode) {
        return '1px solid rgba(255, 255, 255, 0.2)';
      } else {
        return '1px solid rgba(0, 0, 0, 0.1)';
      }
    }
    return '1px solid transparent';
  }};
  box-shadow: ${props => {
    if (props.$isActive) {
      if (props.$isDarkMode) {
        return '0 2px 8px rgba(255, 255, 255, 0.1)';
      } else {
        return '0 2px 8px rgba(0, 0, 0, 0.08)';
      }
    }
    return 'none';
  }};
  
  &:hover {
    color: ${props => {
      if (props.$isDarkMode) {
        return props.$isActive ? '#fff' : '#888';
      } else {
        return props.$isActive ? '#1e293b' : '#475569';
      }
    }};
    background: ${props => {
      if (props.$isActive) {
        if (props.$isDarkMode) {
          return 'rgba(255, 255, 255, 0.2)';
        } else {
          return 'rgba(0, 0, 0, 0.1)';
        }
      } else {
        if (props.$isDarkMode) {
          return 'rgba(255, 255, 255, 0.05)';
        } else {
          return 'rgba(0, 0, 0, 0.03)';
        }
      }
    }};
  }
`;

const Highlight = styled.span`
  background: linear-gradient(120deg, #22c55e, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(120deg, #22c55e, #3b82f6);
    border-radius: 2px;
  }
`;





















/* const CertificationsMarquee = styled.div<{ $isDarkMode: boolean }>`
  padding: 2rem 0;
  background: ${props => props.$isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)'};
  border-radius: 12px;
  margin: 2rem 0;
  overflow: hidden;
  backdrop-filter: blur(10px);
`;

const CertificationsTrack = styled.div`
  display: flex;
  animation: scrollRight 25s linear infinite;
  width: max-content;
  
  @keyframes scrollRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  
  &:hover {
    animation-play-state: paused;
  }
`;

const CertificationItem = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.95)'};
  border: 1px solid ${props => props.$isDarkMode ? 'rgba(148, 163, 184, 0.3)' : 'rgba(203, 213, 225, 0.4)'};
  border-radius: 12px;
  padding: 1.5rem;
  margin-right: 2rem;
  min-width: 200px;
  flex-shrink: 0;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.$isDarkMode ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)'};
  }
`; */





const ProjectsSection = styled.section`
  padding: 2rem 0;
  margin-top: 2rem;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`;

const ProjectsTitle = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? '#000' : '#1e293b'};
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  width: fit-content;
  margin: 0 auto 3rem;
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#334155'};
  box-shadow: ${props => props.$isDarkMode ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.15)'};
`;



const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 100%;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
    margin-bottom: 1rem;
  }
`;

const SideBySideGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 100%;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
`;

const ProjectCard = styled(motion.div)<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? '#1a1a1a' : '#fff'};
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    height: 60vh;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    height: 50vh;
    border-radius: 6px;
  }
`;





const ProjectImage = styled.div<{ $bgColor?: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const ProjectOverlay = styled.div<{ $isDarkMode: boolean }>`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  pointer-events: none;
  
  @media (max-width: 768px) {
    top: 1.5rem;
    gap: 1.25rem;
  }
  
  @media (max-width: 480px) {
    top: 1rem;
    gap: 1rem;
  }
`;

const ProjectTitle = styled.h3<{ $isDarkMode: boolean }>`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const CaseStudyButton = styled.button<{ $isDarkMode: boolean }>`
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  pointer-events: auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;







// Other Works Section Components
const OtherWorksSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
  
  @media (max-width: 968px) {
    padding: 3rem 0;
    width: 95vw;
  }
`;

const OtherWorksTitle = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? '#1a1a1a' : '#1e293b'};
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  margin: 0 auto 3rem;
  width: fit-content;
  box-shadow: ${props => props.$isDarkMode ? '0 4px 16px rgba(0, 0, 0, 0.3)' : '0 4px 16px rgba(0, 0, 0, 0.15)'};
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ArticleCard = styled(motion.div)<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? '#111' : '#fff'};
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.$isDarkMode ? '0 12px 32px rgba(0, 0, 0, 0.3)' : '0 12px 32px rgba(0, 0, 0, 0.1)'};
    border-color: ${props => props.$isDarkMode ? '#444' : '#cbd5e1'};
  }
`;



const ArticleContent = styled.div`
  padding: 1.5rem;
`;

const ArticleTitle = styled.h3<{ $isDarkMode: boolean }>`
  font-size: 1.3rem;
  color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
  margin-bottom: 0.75rem;
  line-height: 1.4;
  font-weight: 600;
`;

const ArticleDescription = styled.p<{ $isDarkMode: boolean }>`
  color: ${props => props.$isDarkMode ? '#aaa' : '#64748b'};
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const ArticleCategory = styled.span`
  background: rgba(99, 102, 241, 0.1);
  color: #818cf8;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
`;

const Footer = styled.footer<{ $isDarkMode: boolean }>`
  text-align: center;
  padding: 4rem 2rem 8rem 2rem;
  background: ${props => props.$isDarkMode ? '#000' : '#fff'};
  border-top: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem 6rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0.75rem 5rem 0.75rem;
  }
`;

const FooterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const CollaborationButton = styled.button<{ $isDarkMode: boolean }>`
  background: transparent;
  border: 1px solid #8b5cf6;
  color: ${props => props.$isDarkMode ? '#fff' : '#8b5cf6'};
  padding: 0.75rem 2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  
  &:hover {
    background: #8b5cf6;
    color: #fff;
    transform: translateY(-2px);
  }
`;

const FooterHeadline = styled.h3<{ $isDarkMode: boolean }>`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  margin: 0 0 2rem 0;
  line-height: 1.3;
  text-shadow: ${props => props.$isDarkMode ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.1)'};
`;

const ContactButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroCTA = styled.div<{ $isDarkMode: boolean }>`
  text-align: center;
  margin: 2rem 0;
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    margin: 1rem 0;
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const PrimaryCTA = styled.button<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
  color: #fff;
  border: none;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$isDarkMode 
    ? '0 4px 20px rgba(34, 197, 94, 0.3), 0 0 0 1px rgba(34, 197, 94, 0.1)' 
    : '0 4px 20px rgba(22, 163, 74, 0.3), 0 0 0 1px rgba(22, 163, 74, 0.1)'
  };
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.$isDarkMode 
      ? '0 8px 30px rgba(34, 197, 94, 0.4), 0 0 0 1px rgba(34, 197, 94, 0.2)' 
      : '0 8px 30px rgba(22, 163, 74, 0.4), 0 0 0 1px rgba(22, 163, 74, 0.2)'
    };
    background: ${props => props.$isDarkMode ? '#16a34a' : '#15803d'};
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const SecondaryCTA = styled.button<{ $isDarkMode: boolean }>`
  background: transparent;
  color: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
  border: 2px solid ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
    transition: left 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: #fff;
    transform: translateY(-3px);
    box-shadow: ${props => props.$isDarkMode 
      ? '0 8px 30px rgba(34, 197, 94, 0.3)' 
      : '0 8px 30px rgba(22, 163, 74, 0.3)'
    };
    
    &:before {
      left: 0;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const ContactButton = styled.button<{ $isDarkMode: boolean }>`
  background: transparent;
  border: 2px solid ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
  color: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
  padding: 0.875rem 1.75rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
    color: #fff;
    transform: translateY(-2px);
    box-shadow: ${props => props.$isDarkMode 
      ? '0 4px 20px rgba(34, 197, 94, 0.3)' 
      : '0 4px 20px rgba(22, 163, 74, 0.3)'
    };
  }
`;

const CopyrightText = styled.div<{ $isDarkMode: boolean }>`
  color: ${props => props.$isDarkMode ? '#ccc' : '#666'};
  font-size: 0.9rem;
  line-height: 1.6;
  
  p {
    margin: 0.5rem 0;
  }
`;



// Data
const projects = [
  {
    id: 1,
    title: "AI Bookkeeping Platform",
    description: "Designed the complete UX foundation for an AI-powered bookkeeping platform. Created intuitive onboarding flows, streamlined invoice processing, and automated reconciliation workflows that transformed complex financial tasks into simple, user-friendly experiences.",
    type: "Product Design",
    impact: "End-to-end platform design",
    bgColor: "linear-gradient(135deg, #134e4a, #115e59)",
    page: 'jenesys-ai',
    image: "/images/jenesys-full-image.svg"
  },
  {
    id: 2,
    title: "BorlaPay",
    description: "Designed a mobile-first recycling incentive platform for Ghanaian communities. Built gamified user flows that transformed waste behavior, achieving 80% user retention and 3x waste collection through 'Wastepreneur' network.",
    type: "Mobile Product Design",
    impact: "80% retention, 3x waste collection, 1M+ tons addressable market",
    bgColor: "linear-gradient(135deg, #166534, #15803d)",
    page: 'borlapay',
    image: "/images/borlapay-full-image.svg"
  },
  {
    id: 3,
    title: "BusyBuddy",
    description: "Redesigned a comprehensive e-commerce platform focusing on user experience and conversion optimization. Implemented modern design patterns and streamlined checkout flows.",
    type: "Product Design",
    impact: "Improved user experience and conversion rates",
    bgColor: "linear-gradient(135deg, #7c3aed, #a855f7)",
    page: 'ecommerce',
    image: "/images/busybody-full-image.svg"
  },
  {
    id: 4,
    title: "Novum website",
    description: "Designed a comprehensive mobile banking application with focus on security, usability, and financial inclusion. Created intuitive user flows for account management, transfers, and bill payments.",
    type: "Mobile Product Design",
    impact: "Enhanced user experience and security",
    bgColor: "linear-gradient(135deg, #1e40af, #3b82f6)",
    page: 'banking',
    image: "/images/novum-full-image.svg"
  }
];

const otherWorks = [
  {
    id: 1,
    title: "Designing a Confidence-Based Feedback UI",
    description: "A personal design project exploring how interfaces can communicate AI uncertainty—and keep users in control.",
    category: "Design Research",
    url: "https://medium.com/design-bootcamp/designing-a-confidence-based-feedback-ui-f5eba0420c8c"
  },
  {
    id: 2,
    title: "Design x Sales: Why I Joined Demo Calls as a Product Designer",
    description: "Exploring how design and sales collaboration can drive better product outcomes. This article shares insights on bridging the gap between design thinking and business goals.",
    category: "Product Strategy",
    url: "https://medium.com/design-bootcamp/design-x-sales-why-i-joined-demo-calls-as-a-product-designer-9db4a702937b"
  },
  {
    id: 3,
    title: "How I Use AI to Supercharge My Design Process",
    description: "Designer + AI = Supercharged Workflow. There's no denying it. AI is moving fast. Every day, new tools emerge, headlines forecast job losses, and creatives everywhere wonder what the future holds.",
    category: "AI & Design",
    url: "https://medium.com/design-bootcamp/how-i-use-ai-to-supercharge-my-design-process-2ae95b0a7f91"
  }
];

// Lab Experiments Data
const experiments = [
  {
    id: 1,
    title: "AI Suggestion with Confidence Reasoning",
    description: "AI suggestions with confidence levels and reasoning for better user trust.",
    gif: "/images/experiments/ai-confidence-reasoning.gif",
    gifOptimized: "/images/experiments/optimized/ai-confidence-reasoning-optimized.gif",
    gifMobile: "/images/experiments/optimized/ai-confidence-reasoning-optimized.gif"
  },
  {
    id: 2,
    title: "Human in the Loop Feedback",
    description: "Human feedback loops that help AI systems learn and improve accuracy.",
    gif: "/images/experiments/human-feedback-loop.gif",
    gifOptimized: "/images/experiments/optimized/human-feedback-loop-optimized.gif",
    gifMobile: "/images/experiments/optimized/human-feedback-loop-optimized.gif"
  },
  {
    id: 3,
    title: "UI Design",
    description: "",
    gif: "/images/experiments/optimized/App 01-optimized.gif",
    gifOptimized: "/images/experiments/optimized/App 01-optimized.gif",
    gifMobile: "/images/experiments/optimized/App 01-optimized.gif"
  },
  {
    id: 4,
    title: "UI Design",
    description: "",
    gif: "/images/experiments/optimized/App 02-optimized.gif",
    gifOptimized: "/images/experiments/optimized/App 02-optimized.gif",
    gifMobile: "/images/experiments/optimized/App 02-optimized.gif"
  },
  {
    id: 5,
    title: "UI Design",
    description: "",
    gif: "/images/experiments/optimized/App 03-optimized.gif",
    gifOptimized: "/images/experiments/optimized/App 03-optimized.gif",
    gifMobile: "/images/experiments/optimized/App 03-optimized.gif"
  },
  {
    id: 6,
    title: "UI Design",
    description: "",
    gif: "/images/experiments/optimized/App 04-optimized.gif",
    gifOptimized: "/images/experiments/optimized/App 04-optimized.gif",
    gifMobile: "/images/experiments/optimized/App 04-optimized.gif"
  },
  {
    id: 7,
    title: "UI Design",
    description: "",
    gif: "/images/experiments/optimized/App 05-optimized.gif",
    gifOptimized: "/images/experiments/optimized/App 05-optimized.gif",
    gifMobile: "/images/experiments/optimized/App 05-optimized.gif"
  },
  {
    id: 8,
    title: "UI Design",
    description: "",
    gif: "/images/experiments/optimized/App 07-optimized.gif",
    gifOptimized: "/images/experiments/optimized/App 07-optimized.gif",
    gifMobile: "/images/experiments/optimized/App 07-optimized.gif"
  },
  {
    id: 9,
    title: "UI Design",
    description: "",
    gif: "/images/experiments/optimized/App 08-optimized.gif",
    gifOptimized: "/images/experiments/optimized/App 08-optimized.gif",
    gifMobile: "/images/experiments/optimized/App 08-optimized.gif"
  }
];

// Page Components
const PageContainer = styled.div<{ $isDarkMode: boolean }>`
  min-height: 100vh;
  background: ${props => props.$isDarkMode ? '#000' : '#fff'};
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;



const PageHeader = styled.div<{ $isDarkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
  
  @media (max-width: 768px) {
    padding: 1rem 1rem 0.5rem;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.5rem 0.25rem;
  }
`;

const PageTitle = styled.h2<{ $isDarkMode: boolean }>`
  font-size: 2rem;
  color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const BackButton = styled.button<{ $isDarkMode: boolean }>`
  background: none;
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#cbd5e1'};
  color: ${props => props.$isDarkMode ? '#888' : '#64748b'};
  font-size: 1rem;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s;
  
  &:hover {
    color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
    border-color: ${props => props.$isDarkMode ? '#fff' : '#475569'};
    background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }
`;

const PageBody = styled.div<{ $isDarkMode: boolean }>`
  padding: 2rem;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.$isDarkMode ? '#ccc' : '#64748b'};
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  h3 {
    color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

// Lab Page Components


const LabDescription = styled.div<{ $isDarkMode: boolean }>`
  max-width: 800px;
  margin: 2rem auto 4rem auto;
  text-align: center;
  
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${props => props.$isDarkMode ? '#ccc' : '#64748b'};
    margin: 0 0 1.5rem 0;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (max-width: 768px) {
    margin: 1.5rem auto 3rem auto;
    
    p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    margin: 1rem auto 2rem auto;
    
    p {
      font-size: 0.95rem;
    }
  }
`;

const ExperimentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
`;

const ExperimentCard = styled(motion.div)<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? '#1a1a1a' : '#fff'};
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${props => props.$isDarkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.08)'};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${props => props.$isDarkMode ? '0 8px 32px rgba(0, 0, 0, 0.4)' : '0 8px 32px rgba(0, 0, 0, 0.12)'};
  }
  
  @media (max-width: 768px) {
    border-radius: 12px;
    width: 100%;
    margin: 0;
  }
  
  @media (max-width: 480px) {
    border-radius: 8px;
    width: 100%;
    margin: 0;
  }
`;

const ExperimentVisual = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;
  height: 400px;
  background: ${props => props.$isDarkMode ? '#000' : '#f8fafc'};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    transition: transform 0.3s ease;
    display: block;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  /* Loading state */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border: 3px solid ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
    border-top: 3px solid ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
    border-radius: 50%;
    animation: spin 1s linear infinite;
    z-index: 1;
  }
  
  /* Hide loading spinner when image is loaded */
  &.loaded::before {
    display: none;
  }
  
  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
  }
`;

const ExperimentContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ExperimentTitle = styled.h3<{ $isDarkMode: boolean }>`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ExperimentDescription = styled.p<{ $isDarkMode: boolean }>`
  font-size: 0.9rem;
  color: ${props => props.$isDarkMode ? '#ccc' : '#64748b'};
  margin: 0 0 1rem 0;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

// Enhanced Lab Components
















// Floating Bottom Menu with Glass Morphism
const FloatingMenu = styled(motion.div)<{ $isDarkMode: boolean }>`
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  display: flex;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: ${props => props.$isDarkMode 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(255, 255, 255, 0.8)'
  };
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid ${props => props.$isDarkMode 
    ? 'rgba(255, 255, 255, 0.2)' 
    : 'rgba(255, 255, 255, 0.4)'
  };
  border-radius: 50px;
  box-shadow: ${props => props.$isDarkMode 
    ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 30px rgba(255, 255, 255, 0.05)'
    : '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.95), 0 0 30px rgba(255, 255, 255, 0.4)'
  };
  z-index: 1000;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    bottom: 1rem;
    padding: 0.75rem 1rem;
    gap: 0.5rem;
    width: 90vw;
  }
  
  @media (max-width: 480px) {
    bottom: 0.75rem;
    padding: 0.5rem 0.75rem;
    gap: 0.25rem;
    width: 95vw;
  }
`;

const MenuButton = styled(motion.button)<{ $isActive?: boolean; $isDarkMode: boolean }>`
  background: ${props => {
    if (props.$isDarkMode) {
      return props.$isActive ? 'rgba(255, 255, 255, 0.2)' : 'none';
    } else {
      return props.$isActive ? 'rgba(0, 0, 0, 0.12)' : 'none';
    }
  }};
  border: ${props => {
    if (props.$isDarkMode) {
      return props.$isActive ? '1px solid rgba(255, 255, 255, 0.3)' : 'none';
    } else {
      return props.$isActive ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid rgba(0, 0, 0, 0.05)';
    }
  }};
  color: ${props => {
    if (props.$isDarkMode) {
      return props.$isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.7)';
    } else {
      return props.$isActive ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)';
    }
  }};
  padding: 0.75rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  backdrop-filter: ${props => props.$isDarkMode ? 'none' : 'blur(10px)'};
  -webkit-backdrop-filter: ${props => props.$isDarkMode ? 'none' : 'blur(10px)'};
  font-weight: ${props => props.$isActive ? '600' : '500'};
  box-shadow: ${props => {
    if (props.$isActive) {
      if (props.$isDarkMode) {
        return '0 4px 20px rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
      } else {
        return '0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
      }
    }
    return 'none';
  }};
  
  &:hover {
    background: ${props => {
      if (props.$isDarkMode) {
        return props.$isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)';
      } else {
        return props.$isActive ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.06)';
      }
    }};
    color: ${props => {
      if (props.$isDarkMode) {
        return 'rgba(255, 255, 255, 1)';
      } else {
        return 'rgba(0, 0, 0, 1)';
      }
    }};
    transform: translateY(-2px);
    box-shadow: ${props => {
      if (props.$isActive) {
        if (props.$isDarkMode) {
          return '0 6px 25px rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.25)';
        } else {
          return '0 6px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.95)';
        }
      } else {
      if (props.$isDarkMode) {
        return 'none';
      } else {
        return '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
        }
      }
    }};
  }
  
  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    opacity: ${props => props.$isActive ? '1' : '0.8'};
  }
  
  span {
    font-size: 0.9rem;
    font-weight: ${props => props.$isActive ? '600' : '500'};
    white-space: nowrap;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    min-width: 40px;
    min-height: 40px;
    
    svg {
      width: 18px;
      height: 18px;
    }
    
    span {
      font-size: 0.8rem;
    }
  }
`;



function App() {
  const [currentPage, setCurrentPage] = useState<'projects' | 'recruiters' | 'designers' | 'managers' | 'engineers' | 'about' | 'lab' | 'jenesys-ai' | 'borlapay'>('projects');
  const [isDarkMode, setIsDarkMode] = useState(true);


  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  console.log('Current page:', currentPage);
  
  return (
    <AppContainer $isDarkMode={isDarkMode}>
      <HeaderWrapper $isDarkMode={isDarkMode}>
      <Header>
        <Logo $isDarkMode={isDarkMode}>UXLANSAH</Logo>
        <ThemeToggle $isDarkMode={isDarkMode} onClick={toggleTheme}>
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </ThemeToggle>
      </Header>
      </HeaderWrapper>

      {(currentPage === 'projects' || currentPage === 'recruiters' || currentPage === 'designers' || currentPage === 'managers' || currentPage === 'engineers') && (
        <Main>
        <Hero $isDarkMode={isDarkMode}>
          <HeroContent>
            <TabNavigation>
              <TabItem 
                $isActive={currentPage === 'projects'} 
                $isDarkMode={isDarkMode}
                onClick={() => setCurrentPage('projects')}
              >
                For anyone
              </TabItem>
              <TabItem 
                $isActive={currentPage === 'recruiters'} 
                $isDarkMode={isDarkMode}
                onClick={() => setCurrentPage('recruiters')}
              >
                Recruiters
              </TabItem>
              <TabItem 
                $isActive={currentPage === 'designers'} 
                $isDarkMode={isDarkMode}
                onClick={() => setCurrentPage('designers')}
              >
                Design Directors
              </TabItem>
              <TabItem 
                $isActive={currentPage === 'managers'} 
                $isDarkMode={isDarkMode}
                onClick={() => setCurrentPage('managers')}
              >
                Product Managers
              </TabItem>
              <TabItem 
                $isActive={currentPage === 'engineers'} 
                $isDarkMode={isDarkMode}
                onClick={() => setCurrentPage('engineers')}
              >
                Engineers
              </TabItem>
            </TabNavigation>
            
            <HeroText $isDarkMode={isDarkMode}>
              <h1>
                {currentPage === 'projects' && (
                  <>
                    <div className="line1">Hello there, I'm a <Highlight>designer</Highlight> who cares about making <Highlight>beautiful things</Highlight> that help people.</div>
                  </>
                )}
                {currentPage === 'recruiters' && (
                  <>
                    <div className="line1">Looking for a <Highlight>designer</Highlight> who can deliver <Highlight>exceptional user experiences</Highlight> and drive <Highlight>business results</Highlight>?</div>
                  </>
                )}
                {currentPage === 'designers' && (
                  <>
                    <div className="line1">Ready to collaborate with a <Highlight>designer</Highlight> who understands the <Highlight>craft</Highlight> and pushes <Highlight>creative boundaries</Highlight>?</div>
                  </>
                )}
                {currentPage === 'managers' && (
                  <>
                    <div className="line1">Need a <Highlight>designer</Highlight> who speaks your <Highlight>language</Highlight> and translates <Highlight>business goals</Highlight> into intuitive user experiences?</div>
                  </>
                )}
                {currentPage === 'engineers' && (
                  <>
                    <div className="line1">Want to build with a <Highlight>designer</Highlight> who understands <Highlight>technical constraints</Highlight> and designs for <Highlight>scale</Highlight>?</div>
                  </>
                )}
              </h1>
            </HeroText>
            
            <HeroSubtitle $isDarkMode={isDarkMode}>
              <p>
                {currentPage === 'recruiters' && (
                  "Product Designer building AI/ML products, B2B SaaS platforms, and mobile applications. Expert in user-centered design, design systems, and delivering measurable business impact."
                )}
                {currentPage === 'projects' && (
                  "Product Designer focused on AI/ML products, B2B SaaS, and enterprise solutions. I turn complex problems into simple, impactful user experiences that drive measurable business results."
                )}
                {currentPage === 'designers' && (
                  "Product Designer passionate about AI/ML interfaces, design systems, and user research. Let's push creative boundaries and build something amazing together."
                )}
                {currentPage === 'managers' && (
                  "Product Designer who bridges business strategy and user needs. I've led design teams, built scalable processes, and delivered products that exceed business objectives."
                )}
                {currentPage === 'engineers' && (
                  "Product Designer who speaks your language. I understand technical constraints, design for scale, and collaborate seamlessly with engineering teams to ship quality products."
                )}
              </p>
            </HeroSubtitle>
            

            

            
            <HeroCTA $isDarkMode={isDarkMode}>
              <div className="cta-buttons">
                <PrimaryCTA $isDarkMode={isDarkMode} onClick={() => window.open('mailto:rashidlansahadam@gmail.com', '_self')}>
                  {currentPage === 'recruiters' ? 'Schedule Interview' : 'Get In Touch'}
                </PrimaryCTA>
                <SecondaryCTA $isDarkMode={isDarkMode} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  View Case Studies
                </SecondaryCTA>
              </div>
            </HeroCTA>
          </HeroContent>
        </Hero>



        {/* <CertificationsMarquee $isDarkMode={isDarkMode}>
          <CertificationsTrack>
            <CertificationItem $isDarkMode={isDarkMode}>Google UX Design</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>NN/g UX Certification</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Figma Advanced Design</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>AI/ML Product Design</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Stanford Design Thinking</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>IDEO Human-Centered Design</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Adobe Creative Suite Expert</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Sketch App Master</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>InVision Design Systems</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Principle Animation</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Framer Prototyping</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Miro Collaboration</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Notion Design Ops</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Zeplin Handoff</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Abstract Version Control</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Lucidchart Flowcharts</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Whimsical Wireframes</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Balsamiq Mockups</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Axure RP Pro</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Marvel App Design</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Interactions</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Origami Studio</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Flinto Transitions</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Master</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Sketch Cloud</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Figma Dev Mode</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>InVision DSM</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Abstract Design Ops</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Zeplin Design Systems</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Miro Design Sprints</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Notion Design Docs</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Figma Auto Layout</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Sketch Symbols</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Components</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>InVision Studio</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Framer Motion</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Principle Micro-interactions</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Flinto Prototyping</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Marvel User Testing</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Advanced</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Pro</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Figma Smart Animate</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Sketch Runner</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Prototyping</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>InVision Inspect</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Framer Code Export</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Principle Design Handoff</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Flinto User Flows</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Marvel Design Systems</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Variables</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Logic</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Figma Variants</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Sketch Libraries</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Design Specs</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>InVision Design Tokens</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Framer Design Components</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Principle Design Systems</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Flinto Design Ops</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Marvel Design Handoff</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Design Systems</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Design Ops</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Figma Design Systems</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Sketch Design Ops</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Design Systems</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>InVision Design Ops</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Framer Design Systems</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Principle Design Ops</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Flinto Design Systems</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Marvel Design Ops</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Design Ops</CertificationItem>
            <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Design Systems</CertificationItem>
          </CertificationsTrack>
        </CertificationsMarquee> */}

        <ProjectsSection id="projects">
          <ProjectsTitle $isDarkMode={isDarkMode}>Portfolio</ProjectsTitle>
          
          {/* Jenesys - Full Width */}
          <ProjectsGrid>
            {projects.slice(0, 1).map((project) => (
              <ProjectCard
                key={project.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                $isDarkMode={isDarkMode}
                data-project={project.page}
                onClick={() => setCurrentPage(project.page as any)}
                style={{ cursor: 'pointer' }}
              >
                <ProjectImage $bgColor={project.bgColor}>
                  <img 
                    src={project.image || "/images/project-preview.png"} 
                    alt={`${project.title} Preview`} 
                    onError={(e) => {
                      console.log('Image failed to load:', project.image);
                      e.currentTarget.src = "/images/project-preview.png";
                    }}
                  />
                  <ProjectOverlay $isDarkMode={isDarkMode}>
                    <ProjectTitle $isDarkMode={isDarkMode}>
                      {project.title}
                    </ProjectTitle>
                    <CaseStudyButton 
                      $isDarkMode={isDarkMode}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage(project.page as any);
                      }}
                    >
                      View Case Study
                    </CaseStudyButton>
                  </ProjectOverlay>
                </ProjectImage>
              </ProjectCard>
            ))}
          </ProjectsGrid>

          {/* BorlaPay & BusyBuddy - Side by Side */}
          <SideBySideGrid>
            {projects.slice(1, 3).map((project) => (
              <ProjectCard
                key={project.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                $isDarkMode={isDarkMode}
                data-project={project.page}
                onClick={() => setCurrentPage(project.page as any)}
                style={{ cursor: 'pointer' }}
              >
                <ProjectImage $bgColor={project.bgColor}>
                  <img 
                    src={project.image || "/images/project-preview.png"} 
                    alt={`${project.title} Preview`} 
                    onError={(e) => {
                      console.log('Image failed to load:', project.image);
                      e.currentTarget.src = "/images/project-preview.png";
                    }}
                  />
                  <ProjectOverlay $isDarkMode={isDarkMode}>
                    <ProjectTitle $isDarkMode={isDarkMode}>
                      {project.title}
                    </ProjectTitle>
                    <CaseStudyButton 
                      $isDarkMode={isDarkMode}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.page === 'ecommerce') {
                          window.open('https://www.figma.com/design/WVp6Cjenyxnw6qCxFE5eAb/BusyBuddy?node-id=0-1', '_blank');
                        } else {
                          setCurrentPage(project.page as any);
                        }
                      }}
                    >
                      View Case Study
                    </CaseStudyButton>
                  </ProjectOverlay>
                </ProjectImage>
              </ProjectCard>
            ))}
          </SideBySideGrid>

          {/* Mobile Banking App - Full Width */}
          <ProjectsGrid>
            {projects.slice(3, 4).map((project) => (
              <ProjectCard
                key={project.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                $isDarkMode={isDarkMode}
                data-project={project.page}
                onClick={() => setCurrentPage(project.page as any)}
                style={{ cursor: 'pointer' }}
              >
                <ProjectImage $bgColor={project.bgColor}>
                  <img 
                    src={project.image || "/images/project-preview.png"} 
                    alt={`${project.title} Preview`} 
                    onError={(e) => {
                      console.log('Image failed to load:', project.image);
                      e.currentTarget.src = "/images/project-preview.png";
                    }}
                  />
                  <ProjectOverlay $isDarkMode={isDarkMode}>
                    <ProjectTitle $isDarkMode={isDarkMode}>
                      {project.title}
                    </ProjectTitle>
                    <CaseStudyButton 
                      $isDarkMode={isDarkMode}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage(project.page as any);
                      }}
                    >
                      View Case Study
                    </CaseStudyButton>
                  </ProjectOverlay>
                </ProjectImage>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsSection>

        <OtherWorksSection>
          <OtherWorksTitle $isDarkMode={isDarkMode}>Other Works</OtherWorksTitle>
          <ArticlesGrid>
            {otherWorks.map((article) => (
              <ArticleCard
                key={article.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                $isDarkMode={isDarkMode}
                onClick={() => window.open(article.url, '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <ArticleContent>
                  <ArticleTitle $isDarkMode={isDarkMode}>{article.title}</ArticleTitle>
                  <ArticleDescription $isDarkMode={isDarkMode}>{article.description}</ArticleDescription>
                  <ArticleCategory>{article.category}</ArticleCategory>
                </ArticleContent>
              </ArticleCard>
            ))}
          </ArticlesGrid>
        </OtherWorksSection>



        <Footer $isDarkMode={isDarkMode}>
          <FooterContent>
            <CollaborationButton $isDarkMode={isDarkMode}>
              Want to collaborate?
            </CollaborationButton>
            
            <FooterHeadline $isDarkMode={isDarkMode}>
              Let's have a chat
            </FooterHeadline>
            
            <ContactButtons>
              <ContactButton 
                $isDarkMode={isDarkMode}
                onClick={() => window.open('mailto:rashidlansahadam@gmail.com', '_self')}
              >
                <Mail size={16} />
                Email
              </ContactButton>
              
              <ContactButton 
                $isDarkMode={isDarkMode}
                onClick={() => window.open('https://linkedin.com/in/rashid-lansah', '_blank')}
              >
                <Linkedin size={16} />
                LinkedIn
              </ContactButton>
              
              <ContactButton 
                $isDarkMode={isDarkMode}
                onClick={() => window.open('https://medium.com/@rashidlansah', '_blank')}
              >
                <ExternalLink size={16} />
                Medium
              </ContactButton>
            </ContactButtons>
            
            <CopyrightText $isDarkMode={isDarkMode}>
              <p>All Rights Reserved.</p>
              <p>This work showcases my personal projects and professional work. Content may not be used without permission.</p>
            </CopyrightText>
          </FooterContent>
        </Footer>
        </Main>
      )}



      {currentPage === 'about' && (
        <>
          <About 
            isDarkMode={isDarkMode} 
            onBack={() => setCurrentPage('projects')} 
          />
          {/* <CertificationsMarquee $isDarkMode={isDarkMode}>
            <CertificationsTrack>
              <CertificationItem $isDarkMode={isDarkMode}>Google UX Design</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>NN/g UX Certification</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Advanced Design</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>AI/ML Product Design</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Stanford Design Thinking</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>IDEO Human-Centered Design</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe Creative Suite Expert</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch App Master</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Principle Animation</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Framer Prototyping</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Miro Collaboration</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Notion Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Zeplin Handoff</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Abstract Version Control</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Lucidchart Flowcharts</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Whimsical Wireframes</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Balsamiq Mockups</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Axure RP Pro</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Marvel App Design</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Interactions</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Origami Studio</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Flinto Transitions</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Master</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch Cloud</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Dev Mode</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision DSM</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Abstract Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Zeplin Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Miro Design Sprints</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Notion Design Docs</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Auto Layout</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch Symbols</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Components</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision Studio</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Framer Motion</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Principle Micro-interactions</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Flinto Prototyping</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Marvel User Testing</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Advanced</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Pro</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Smart Animate</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch Runner</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Prototyping</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision Inspect</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Framer Code Export</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Principle Design Handoff</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Flinto User Flows</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Marvel Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Variables</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Logic</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Variants</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch Libraries</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Design Specs</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision Design Tokens</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Framer Design Components</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Principle Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Flinto Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Marvel Design Handoff</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Framer Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Principle Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Flinto Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Marvel Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Design Systems</CertificationItem>
            </CertificationsTrack>
          </CertificationsMarquee> */}
        </>
      )}

      {currentPage === 'lab' && (
        <>
        <PageContainer $isDarkMode={isDarkMode}>
          <PageHeader $isDarkMode={isDarkMode}>
            <PageTitle $isDarkMode={isDarkMode}>Lab</PageTitle>
            <BackButton $isDarkMode={isDarkMode} onClick={() => setCurrentPage('projects')}>← Back to Projects</BackButton>
          </PageHeader>
          <PageBody $isDarkMode={isDarkMode}>
              <LabDescription $isDarkMode={isDarkMode}>
                <p>
                  Welcome to my design playground! This is where I experiment with new ideas, 
                  push creative boundaries, and explore the intersection of design and technology. 
                  Each experiment represents a moment of curiosity, a problem I wanted to solve, 
                  or simply a "what if" that turned into something interesting.
                </p>
                <p>
                  From interactive prototypes to typography experiments, these are the projects 
                  that keep me excited about design. They're not always perfect, but they're 
                  always honest explorations of what's possible.
                </p>
              </LabDescription>
              
              <ExperimentsGrid>
                {experiments.map((experiment) => (
                  <ExperimentCard
                    key={experiment.id}
                    $isDarkMode={isDarkMode}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ExperimentContent>
                      <ExperimentTitle $isDarkMode={isDarkMode}>{experiment.title}</ExperimentTitle>
                      {experiment.description && (
                        <ExperimentDescription $isDarkMode={isDarkMode}>{experiment.description}</ExperimentDescription>
                      )}
                    </ExperimentContent>
                    <ExperimentVisual $isDarkMode={isDarkMode} key={experiment.id}>
                      <img 
                        src={experiment.gifOptimized} 
                        alt={experiment.title}
                        loading="lazy"
                        onLoad={(e) => {
                          const target = e.target as HTMLImageElement;
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.add('loaded');
                          }
                        }}
                      />
                    </ExperimentVisual>
                  </ExperimentCard>
                ))}
              </ExperimentsGrid>
          </PageBody>
        </PageContainer>
          
          {/* <CertificationsMarquee $isDarkMode={isDarkMode}>
            <CertificationsTrack>
              <CertificationItem $isDarkMode={isDarkMode}>Google UX Design</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>NN/g UX Certification</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Advanced Design</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>AI/ML Product Design</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Stanford Design Thinking</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>IDEO Human-Centered Design</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe Creative Suite Expert</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch App Master</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Principle Animation</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Framer Prototyping</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Miro Collaboration</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Notion Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Zeplin Handoff</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Abstract Version Control</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Lucidchart Flowcharts</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Whimsical Wireframes</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Balsamiq Mockups</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Axure RP Pro</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Marvel App Design</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Interactions</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Origami Studio</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Flinto Transitions</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Master</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch Cloud</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Dev Mode</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision DSM</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Abstract Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Zeplin Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Miro Design Sprints</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Notion Design Docs</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Auto Layout</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch Symbols</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Components</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision Studio</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Framer Motion</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Principle Micro-interactions</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Flinto Prototyping</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Marvel User Testing</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Advanced</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Pro</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Smart Animate</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch Runner</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Prototyping</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision Inspect</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Framer Code Export</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Principle Design Handoff</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Flinto User Flows</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Marvel Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Variables</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Logic</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Variants</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch Libraries</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Design Specs</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision Design Tokens</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Framer Design Components</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Principle Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Flinto Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Marvel Design Handoff</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Figma Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Sketch Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Adobe XD Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>InVision Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Framer Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Principle Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Flinto Design Systems</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Marvel Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>ProtoPie Design Ops</CertificationItem>
              <CertificationItem $isDarkMode={isDarkMode}>Origami Studio Design Systems</CertificationItem>
            </CertificationsTrack>
          </CertificationsMarquee> */}
        </>
      )}

      {currentPage === 'jenesys-ai' && (
        <JenesysAICaseStudy 
          isDarkMode={isDarkMode} 
          onBack={() => setCurrentPage('projects')} 
        />
      )}

      {currentPage === 'borlapay' && (
        <BorlaPayCaseStudy 
          isDarkMode={isDarkMode} 
          onBack={() => setCurrentPage('projects')} 
        />
      )}

      {/* Floating Bottom Menu */}
      <FloatingMenu
        $isDarkMode={isDarkMode}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20,
          delay: 0.5
        }}
      >
        <MenuButton
          onClick={() => {
            console.log('Setting page to projects');
            setCurrentPage('projects');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          $isActive={currentPage === 'projects' || currentPage === 'recruiters' || currentPage === 'designers' || currentPage === 'managers' || currentPage === 'engineers'}
          $isDarkMode={isDarkMode}
        >
          <FolderOpen />
          <span>Projects</span>
        </MenuButton>
        
        <MenuButton
          onClick={() => {
            console.log('Setting page to about');
            setCurrentPage('about');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          $isActive={currentPage === 'about'}
          $isDarkMode={isDarkMode}
        >
          <User />
          <span>About</span>
        </MenuButton>
        
        <MenuButton
          onClick={() => {
            console.log('Setting page to lab');
            setCurrentPage('lab');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          $isActive={currentPage === 'lab'}
          $isDarkMode={isDarkMode}
        >
          <FlaskConical />
          <span>Lab</span>
        </MenuButton>
      </FloatingMenu>
      

    </AppContainer>
  );
}

export default App;
