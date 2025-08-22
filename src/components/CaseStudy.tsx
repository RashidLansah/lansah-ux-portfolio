import React from 'react';
import styled from 'styled-components';
import { ArrowLeft, Users, TrendingUp, Clock, Target } from 'lucide-react';

// Styled Components
const CaseStudyContainer = styled.div<{ $isDarkMode: boolean }>`
  min-height: 100vh;
  background: ${props => props.$isDarkMode ? '#000' : '#fff'};
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  transition: all 0.3s ease;
`;

const CaseStudyHeader = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode 
    ? 'linear-gradient(135deg, #1a1a1a, #2a2a2a)' 
    : 'linear-gradient(135deg, #f8fafc, #f1f5f9)'
  };
  padding: 4rem 2rem;
  border-bottom: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BackButton = styled.button<{ $isDarkMode: boolean }>`
  background: none;
  border: 1px solid ${props => props.$isDarkMode ? '#555' : '#cbd5e1'};
  color: ${props => props.$isDarkMode ? '#ccc' : '#64748b'};
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  &:hover {
    color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
    border-color: ${props => props.$isDarkMode ? '#fff' : '#475569'};
    background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

const ProjectTitle = styled.h1<{ $isDarkMode: boolean }>`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
  margin: 0 0 1rem 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectSubtitle = styled.p<{ $isDarkMode: boolean }>`
  font-size: 1.3rem;
  color: ${props => props.$isDarkMode ? '#ccc' : '#64748b'};
  margin: 0 0 2rem 0;
  line-height: 1.6;
  max-width: 800px;
`;

const ProjectMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const MetaItem = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(0, 0, 0, 0.03)'
  };
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`;

const MetaIcon = styled.div<{ $isDarkMode: boolean }>`
  width: 40px;
  height: 40px;
  background: ${props => props.$isDarkMode 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.08)'
  };
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
`;

const MetaLabel = styled.div<{ $isDarkMode: boolean }>`
  font-size: 0.9rem;
  color: ${props => props.$isDarkMode ? '#888' : '#64748b'};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const MetaValue = styled.div<{ $isDarkMode: boolean }>`
  font-size: 1.1rem;
  color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
  font-weight: 600;
`;

const CaseStudyBody = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Section = styled.section<{ $isDarkMode: boolean }>`
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2<{ $isDarkMode: boolean }>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
  margin: 0 0 2rem 0;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionContent = styled.div<{ $isDarkMode: boolean }>`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.$isDarkMode ? '#ccc' : '#64748b'};
  
  p {
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ul {
    margin: 1.5rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.75rem;
    }
  }
`;

const HighlightBox = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(0, 0, 0, 0.03)'
  };
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #3b82f6;
`;

const HighlightTitle = styled.h3<{ $isDarkMode: boolean }>`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
  margin: 0 0 1rem 0;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const MetricCard = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode 
    ? 'linear-gradient(135deg, #1a1a1a, #2a2a2a)' 
    : 'linear-gradient(135deg, #f8fafc, #f1f5f9)'
  };
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`;

const MetricValue = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
  display: block;
`;

const MetricLabel = styled.span`
  font-size: 0.9rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  display: block;
`;

const ImageContainer = styled.div<{ $isDarkMode: boolean }>`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div<{ $isDarkMode: boolean }>`
  max-width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${props => props.$isDarkMode 
    ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
    : '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
  };
  background: ${props => props.$isDarkMode ? '#1a1a1a' : '#fff'};
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
  
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 16px;
  }
`;

const ImageCaption = styled.div<{ $isDarkMode: boolean }>`
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: ${props => props.$isDarkMode ? '#888' : '#64748b'};
  font-style: italic;
  border-top: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
  background: ${props => props.$isDarkMode 
    ? 'rgba(255, 255, 255, 0.02)' 
    : 'rgba(0, 0, 0, 0.02)'
  };
`;

const ImageScrollContainer = styled.div<{ $isDarkMode: boolean }>`
  margin: 2rem 0;
  overflow: hidden;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60px;
    z-index: 10;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(90deg, 
      ${props => props.$isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'}, 
      transparent
    );
  }
  
  &::after {
    right: 0;
    background: linear-gradient(90deg, 
      transparent, 
      ${props => props.$isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'}
    );
  }
`;

const ImageScrollTrack = styled.div<{ $isDarkMode: boolean }>`
  display: flex;
  gap: 1.5rem;
  padding: 1rem 0;
  overflow: hidden;
  position: relative;
  
  /* Create infinite loop by duplicating content */
  &::before,
  &::after {
    content: '';
    display: flex;
    gap: 1.5rem;
    animation: scroll 30s linear infinite;
  }
  
  &::before {
    animation-delay: -15s;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  &:hover::before,
  &:hover::after {
    animation-play-state: paused;
  }
`;

const ImageScrollContent = styled.div`
  display: flex;
  gap: 1.5rem;
  animation: scroll 30s linear infinite;
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  &:hover {
    animation-play-state: paused;
  }
`;

const ImageScrollItem = styled.div<{ $isDarkMode: boolean }>`
  flex: 0 0 auto;
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${props => props.$isDarkMode 
    ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
    : '0 4px 20px rgba(0, 0, 0, 0.1)'
  };
  background: ${props => props.$isDarkMode ? '#1a1a1a' : '#fff'};
  border: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${props => props.$isDarkMode 
      ? '0 8px 30px rgba(0, 0, 0, 0.4)' 
      : '0 8px 30px rgba(0, 0, 0, 0.15)'
    };
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }
`;

const ImageScrollCaption = styled.div<{ $isDarkMode: boolean }>`
  padding: 0.75rem;
  text-align: center;
  font-size: 0.85rem;
  color: ${props => props.$isDarkMode ? '#ccc' : '#475569'};
  font-weight: 500;
  background: ${props => props.$isDarkMode 
    ? 'rgba(255, 255, 255, 0.03)' 
    : 'rgba(0, 0, 0, 0.03)'
  };
  border-top: 1px solid ${props => props.$isDarkMode ? '#333' : '#e2e8f0'};
`;

// Case Study Interface
interface CaseStudyProps {
  isDarkMode: boolean;
  onBack: () => void;
}

// Jenesys AI Case Study Component
export const JenesysAICaseStudy: React.FC<CaseStudyProps> = ({ isDarkMode, onBack }) => {
  return (
    <CaseStudyContainer $isDarkMode={isDarkMode}>
      <CaseStudyHeader $isDarkMode={isDarkMode}>
        <HeaderContent>
          <BackButton $isDarkMode={isDarkMode} onClick={onBack}>
            <ArrowLeft size={16} />
            Back to Projects
          </BackButton>
          
          <ProjectTitle $isDarkMode={isDarkMode}>
            Jenesys AI: From MVP to $1M ARR
          </ProjectTitle>
          <ProjectSubtitle $isDarkMode={isDarkMode}>
            As founding Product Designer, I built the complete UX foundation for an AI-powered bookkeeping platform that achieved 80% adoption rate, 3x daily active users, and contributed to $1M ARR
          </ProjectSubtitle>
          
          <ProjectMeta>
            <MetaItem $isDarkMode={isDarkMode}>
              <MetaIcon $isDarkMode={isDarkMode}>
                <Users size={20} />
              </MetaIcon>
              <MetaLabel $isDarkMode={isDarkMode}>Role</MetaLabel>
              <MetaValue $isDarkMode={isDarkMode}>Founding Product Designer</MetaValue>
            </MetaItem>
            
            <MetaItem $isDarkMode={isDarkMode}>
              <MetaIcon $isDarkMode={isDarkMode}>
                <Clock size={20} />
              </MetaIcon>
              <MetaLabel $isDarkMode={isDarkMode}>Timeline</MetaLabel>
              <MetaValue $isDarkMode={isDarkMode}>12 months (0→1)</MetaValue>
            </MetaItem>
            
            <MetaItem $isDarkMode={isDarkMode}>
              <MetaIcon $isDarkMode={isDarkMode}>
                <TrendingUp size={20} />
              </MetaIcon>
              <MetaLabel $isDarkMode={isDarkMode}>Revenue Impact</MetaLabel>
              <MetaValue $isDarkMode={isDarkMode}>$1M ARR</MetaValue>
            </MetaItem>
            
            <MetaItem $isDarkMode={isDarkMode}>
              <MetaIcon $isDarkMode={isDarkMode}>
                <Target size={20} />
              </MetaIcon>
              <MetaLabel $isDarkMode={isDarkMode}>User Adoption</MetaLabel>
              <MetaValue $isDarkMode={isDarkMode}>80% adoption rate</MetaValue>
            </MetaItem>
            
            <MetaItem $isDarkMode={isDarkMode}>
              <MetaIcon $isDarkMode={isDarkMode}>
                <Users size={20} />
              </MetaIcon>
              <MetaLabel $isDarkMode={isDarkMode}>User Growth</MetaLabel>
              <MetaValue $isDarkMode={isDarkMode}>3x daily active users</MetaValue>
            </MetaItem>
            
            <MetaItem $isDarkMode={isDarkMode}>
              <MetaIcon $isDarkMode={isDarkMode}>
                <Target size={20} />
              </MetaIcon>
              <MetaLabel $isDarkMode={isDarkMode}>Support Efficiency</MetaLabel>
              <MetaValue $isDarkMode={isDarkMode}>45% fewer tickets</MetaValue>
            </MetaItem>
          </ProjectMeta>
        </HeaderContent>
      </CaseStudyHeader>

      <CaseStudyBody>
        <Section $isDarkMode={isDarkMode}>
          <SectionTitle $isDarkMode={isDarkMode}>The Challenge</SectionTitle>
          <SectionContent $isDarkMode={isDarkMode}>
            <p>
              <strong>Problem:</strong> SMEs were spending 15+ hours weekly on manual bookkeeping, with 40% of invoices requiring manual correction. The existing market solutions were either too expensive ($500+/month) or too complex for non-accountants to use effectively.
            </p>
            <p>
              <strong>Business Goal:</strong> Build an AI-powered bookkeeping platform that could reduce manual work by 80% while maintaining 95%+ accuracy, targeting $1M ARR within 12 months.
            </p>
            <p>
              <strong>Design Challenge:</strong> Create intuitive workflows for complex financial processes that would make AI feel transparent and trustworthy to users who were skeptical of automated financial management.
            </p>
          </SectionContent>
        </Section>

        <Section $isDarkMode={isDarkMode}>
          <SectionTitle $isDarkMode={isDarkMode}>My Role & Leadership</SectionTitle>
          <SectionContent $isDarkMode={isDarkMode}>
            <p>
              <strong>Founding Product Designer:</strong> As the first and only designer, I built the complete UX foundation from scratch while helping shape product strategy. I advocated for AI transparency in UX, designing patterns where AI explained its reasoning to build user trust.
            </p>
            <p>
              <strong>Cross-functional Collaboration:</strong> Worked directly with founders, engineers, and sales teams to align design decisions with business goals and technical constraints. Prepared investor-ready product demos that contributed to securing $2.2M in funding.
            </p>
            <p>
              <strong>Design Leadership:</strong> Established design processes, built scalable design systems, and mentored junior teammates. Created 40+ reusable components and 8 core workflow designs that became the foundation for future product development.
            </p>
          </SectionContent>
        </Section>

        <Section $isDarkMode={isDarkMode}>
          <SectionTitle $isDarkMode={isDarkMode}>Key User Flows Redesigned</SectionTitle>
          <SectionContent $isDarkMode={isDarkMode}>
            <HighlightBox $isDarkMode={isDarkMode}>
              <HighlightTitle $isDarkMode={isDarkMode}>Core Workflows Transformed</HighlightTitle>
              <ul>
                <li><strong>Onboarding:</strong> Ensured users could quickly connect their accounting system (Xero, QuickBooks, FreeAgent) with minimal friction</li>
                <li><strong>Invoice/Email Ingestion:</strong> Redesigned how invoices uploaded via email were categorized across companies when one user belonged to multiple accounts</li>
                <li><strong>Bank Reconciliation:</strong> Simplified the reconciliation flow with AI suggestions, bulk actions, and contextual learning</li>
                <li><strong>Transaction Creation:</strong> Built new flows for creating bills, spend money, or bank transactions directly from reconciliation</li>
                <li><strong>Audit Trail:</strong> Designed flows to track document history from upload to modification for compliance</li>
              </ul>
            </HighlightBox>
          </SectionContent>
        </Section>

        <Section $isDarkMode={isDarkMode}>
          <SectionTitle $isDarkMode={isDarkMode}>Process & Methodology</SectionTitle>
          <SectionContent $isDarkMode={isDarkMode}>
            <p>
              <strong>Research Phase (Weeks 1-4):</strong> Conducted 25+ user interviews with SME owners, accountants, and bookkeepers. Analyzed 3 competitor products and identified 12 key pain points in existing workflows. Key insight: Users needed to understand AI decisions to trust automation.
            </p>
            <p>
              <strong>Design Phase (Weeks 5-12):</strong> Created 50+ wireframes, 15 high-fidelity prototypes, and conducted 3 rounds of usability testing with 20 users. Iterated based on feedback to achieve 90%+ task completion rate. Focused on edge cases like multi-company management.
            </p>
            <p>
              <strong>Implementation Phase (Weeks 13-24):</strong> Built design system with 40+ reusable components, collaborated with engineering team on 8 core workflows, and conducted 2 rounds of A/B testing to optimize conversion rates. Aligned design decisions with API constraints.
            </p>
          </SectionContent>
        </Section>

        <Section $isDarkMode={isDarkMode}>
          <SectionTitle $isDarkMode={isDarkMode}>Results & Impact</SectionTitle>
          <SectionContent $isDarkMode={isDarkMode}>
            <HighlightBox $isDarkMode={isDarkMode}>
              <HighlightTitle $isDarkMode={isDarkMode}>Business Outcomes</HighlightTitle>
              <ul>
                <li><strong>Revenue:</strong> Achieved $1M ARR within 12 months, exceeding initial target by 25%</li>
                <li><strong>User Growth:</strong> 3x increase in daily active users, from 150 to 450+ active users</li>
                <li><strong>Adoption Rate:</strong> 80% feature adoption rate across all core workflows</li>
                <li><strong>Efficiency Gains:</strong> Reduced manual bookkeeping time from 15+ hours to 3 hours weekly</li>
                <li><strong>Support Efficiency:</strong> 45% reduction in support tickets due to improved UX</li>
                <li><strong>Funding:</strong> Contributed to securing $2.2M in funding through investor-ready product demos</li>
              </ul>
            </HighlightBox>
            
            <HighlightBox $isDarkMode={isDarkMode}>
              <HighlightTitle $isDarkMode={isDarkMode}>User Experience Metrics</HighlightTitle>
              <ul>
                <li><strong>Task Completion:</strong> 90%+ success rate in usability testing across all workflows</li>
                <li><strong>Time Savings:</strong> Invoice processing reduced from 5 minutes to 30 seconds per invoice</li>
                <li><strong>User Satisfaction:</strong> 4.8/5 rating in post-launch user feedback surveys</li>
                <li><strong>Onboarding Success:</strong> 85% of users completed setup without requiring support</li>
              </ul>
            </HighlightBox>
          </SectionContent>
        </Section>

        <Section $isDarkMode={isDarkMode}>
          <SectionTitle $isDarkMode={isDarkMode}>AI Transparency in UX</SectionTitle>
          <SectionContent $isDarkMode={isDarkMode}>
            <p>
              A key focus was making AI decisions transparent and understandable. I designed patterns that showed AI reasoning, built trust through clear communication, and ensured users could review and override AI suggestions when needed.
            </p>
            <p>
              This approach was crucial for a financial product where users need to understand and trust the automation that's handling their sensitive financial data.
            </p>
          </SectionContent>
        </Section>

        <Section $isDarkMode={isDarkMode}>
          <SectionTitle $isDarkMode={isDarkMode}>Visual Design & Interface</SectionTitle>
          <SectionContent $isDarkMode={isDarkMode}>
            <p>
              The interface design focused on clarity and trust, with careful attention to how AI decisions were presented to users. I created visual patterns that made complex financial data accessible while maintaining professional aesthetics.
            </p>
            
            <ImageContainer $isDarkMode={isDarkMode}>
              <ImageWrapper $isDarkMode={isDarkMode}>
                <img src="/images/jenesys-interface.png" alt="Jenesys AI Interface Design" />
                <ImageCaption $isDarkMode={isDarkMode}>
                  Interface showing AI-powered invoice processing with transparent decision-making
                </ImageCaption>
              </ImageWrapper>
            </ImageContainer>
            
            <p>
              The design system prioritized readability and user confidence, ensuring that even complex AI operations felt intuitive and trustworthy to financial professionals.
            </p>
          </SectionContent>
        </Section>

        <Section $isDarkMode={isDarkMode}>
          <SectionTitle $isDarkMode={isDarkMode}>Key Learnings & Takeaways</SectionTitle>
          <SectionContent $isDarkMode={isDarkMode}>
            <HighlightBox $isDarkMode={isDarkMode}>
              <HighlightTitle $isDarkMode={isDarkMode}>Design Insights</HighlightTitle>
              <ul>
                <li><strong>AI Transparency is Critical:</strong> Users need to understand AI decisions to trust automation, especially in financial products</li>
                <li><strong>Edge Cases Matter:</strong> Multi-company management was a key differentiator that solved real user pain points</li>
                <li><strong>Design Systems Scale:</strong> Building reusable components from day one enabled rapid iteration and consistency</li>
                <li><strong>User Research Drives Strategy:</strong> Understanding user workflows led to better product decisions than competitor analysis alone</li>
              </ul>
            </HighlightBox>
            
            <HighlightBox $isDarkMode={isDarkMode}>
              <HighlightTitle $isDarkMode={isDarkMode}>Business Impact</HighlightTitle>
              <ul>
                <li><strong>Design Drives Revenue:</strong> UX improvements directly contributed to $1M ARR achievement</li>
                <li><strong>Investor Confidence:</strong> Professional product demos helped secure $2.2M in funding</li>
                <li><strong>Operational Efficiency:</strong> Better UX reduced support costs and improved user satisfaction</li>
                <li><strong>Market Differentiation:</strong> AI transparency became a key competitive advantage</li>
              </ul>
            </HighlightBox>
          </SectionContent>
        </Section>

        <Section $isDarkMode={isDarkMode}>
          <SectionTitle $isDarkMode={isDarkMode}>Interface Screenshots</SectionTitle>
          <SectionContent $isDarkMode={isDarkMode}>
            <p>
              Here are some screenshots of the key interfaces I designed for Jenesys AI, showcasing the clean, professional aesthetic and user-friendly design patterns that made complex financial operations accessible to SMEs.
            </p>
            
            <ImageScrollContainer $isDarkMode={isDarkMode}>
              <ImageScrollTrack $isDarkMode={isDarkMode}>
                <ImageScrollContent>
                  <ImageScrollItem $isDarkMode={isDarkMode}>
                    <img src="/images/case-studies/jenesys-dashboard.png" alt="Main Dashboard" />
                    <ImageScrollCaption $isDarkMode={isDarkMode}>Main Dashboard</ImageScrollCaption>
                  </ImageScrollItem>
                  
                  <ImageScrollItem $isDarkMode={isDarkMode}>
                    <img src="/images/case-studies/jenesys-invoices.png" alt="Invoice Management" />
                    <ImageScrollCaption $isDarkMode={isDarkMode}>Invoice Management</ImageScrollCaption>
                  </ImageScrollItem>
                  
                  <ImageScrollItem $isDarkMode={isDarkMode}>
                    <img src="/images/case-studies/jenesys-reconciliation.png" alt="Bank Reconciliation" />
                    <ImageScrollCaption $isDarkMode={isDarkMode}>Bank Reconciliation</ImageScrollCaption>
                  </ImageScrollItem>
                  
                  <ImageScrollItem $isDarkMode={isDarkMode}>
                    <img src="/images/case-studies/jenesys-settings.png" alt="User Settings" />
                    <ImageScrollCaption $isDarkMode={isDarkMode}>User Settings</ImageScrollCaption>
                  </ImageScrollItem>
                  
                  {/* Duplicate images for seamless loop */}
                  <ImageScrollItem $isDarkMode={isDarkMode}>
                    <img src="/images/case-studies/jenesys-dashboard.png" alt="Main Dashboard" />
                    <ImageScrollCaption $isDarkMode={isDarkMode}>Main Dashboard</ImageScrollCaption>
                  </ImageScrollItem>
                  
                  <ImageScrollItem $isDarkMode={isDarkMode}>
                    <img src="/images/case-studies/jenesys-invoices.png" alt="Invoice Management" />
                    <ImageScrollCaption $isDarkMode={isDarkMode}>Invoice Management</ImageScrollCaption>
                  </ImageScrollItem>
                  
                  <ImageScrollItem $isDarkMode={isDarkMode}>
                    <img src="/images/case-studies/jenesys-reconciliation.png" alt="Bank Reconciliation" />
                    <ImageScrollCaption $isDarkMode={isDarkMode}>Bank Reconciliation</ImageScrollCaption>
                  </ImageScrollItem>
                  
                  <ImageScrollItem $isDarkMode={isDarkMode}>
                    <img src="/images/case-studies/jenesys-settings.png" alt="User Settings" />
                    <ImageScrollCaption $isDarkMode={isDarkMode}>User Settings</ImageScrollCaption>
                  </ImageScrollItem>
                </ImageScrollContent>
              </ImageScrollTrack>
            </ImageScrollContainer>
            
            <p>
              These interfaces demonstrate the focus on clarity, trust, and ease of use that was central to the Jenesys AI user experience design.
            </p>
          </SectionContent>
        </Section>

        <Section $isDarkMode={isDarkMode}>
          <SectionTitle $isDarkMode={isDarkMode}>Results & Impact</SectionTitle>
          <SectionContent $isDarkMode={isDarkMode}>
            <MetricsGrid>
              <MetricCard $isDarkMode={isDarkMode}>
                <MetricValue>3x</MetricValue>
                <MetricLabel>Daily Active Users</MetricLabel>
              </MetricCard>
              
              <MetricCard $isDarkMode={isDarkMode}>
                <MetricValue>45%</MetricValue>
                <MetricLabel>Support Ticket Reduction</MetricLabel>
              </MetricCard>
              
              <MetricCard $isDarkMode={isDarkMode}>
                <MetricValue>↑</MetricValue>
                <MetricLabel>Invoice Processing</MetricLabel>
              </MetricCard>
              
              <MetricCard $isDarkMode={isDarkMode}>
                <MetricValue>↓</MetricValue>
                <MetricLabel>User Churn</MetricLabel>
              </MetricCard>
            </MetricsGrid>
            
            <p>
              The redesigned workflows led to significant improvements in user engagement and operational efficiency. Users reported faster reconciliation tasks, and there was high adoption of new features like "bulk reconcile" and "AI operator review."
            </p>
          </SectionContent>
        </Section>

        <Section $isDarkMode={isDarkMode}>
          <SectionTitle $isDarkMode={isDarkMode}>Key Learnings & Future Vision</SectionTitle>
          <SectionContent $isDarkMode={isDarkMode}>
            <p>
              This project taught me valuable lessons about AI UX patterns, designing for multi-account complexity, and building design foundations that scale. The experience of working at a startup during the 0→1 phase provided insights into cross-functional collaboration and rapid iteration.
            </p>
            <p>
              The design patterns and user flows created here became the foundation for Jenesys AI's UK expansion and continued growth, demonstrating the importance of building scalable design systems from the start.
            </p>
          </SectionContent>
        </Section>
      </CaseStudyBody>
    </CaseStudyContainer>
  );
};

export default JenesysAICaseStudy; 