import React from 'react';
import styled from 'styled-components';
import { ArrowLeft, Users, TrendingUp, Target, Smartphone, Recycle, Award, MapPin, Zap, DollarSign } from 'lucide-react';

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
  margin-bottom: 1rem;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectSubtitle = styled.p<{ $isDarkMode: boolean }>`
  font-size: 1.3rem;
  color: ${props => props.$isDarkMode ? '#94a3b8' : '#64748b'};
  margin-bottom: 2rem;
  line-height: 1.5;
  max-width: 800px;
`;

const ProjectMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const MetaItem = styled.div<{ $isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  .label {
    font-size: 0.9rem;
    color: ${props => props.$isDarkMode ? '#94a3b8' : '#64748b'};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .value {
    font-size: 1.1rem;
    color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
    font-weight: 600;
  }
`;

const CaseStudyBody = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2<{ $isDarkMode: boolean }>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.h3<{ $isDarkMode: boolean }>`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${props => props.$isDarkMode ? '#e2e8f0' : '#334155'};
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Paragraph = styled.p<{ $isDarkMode: boolean }>`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${props => props.$isDarkMode ? '#cbd5e1' : '#475569'};
  margin-bottom: 1.5rem;
`;

const HighlightBox = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode 
    ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.1))' 
    : 'linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(22, 163, 74, 0.05))'
  };
  border: 1px solid ${props => props.$isDarkMode ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 197, 94, 0.2)'};
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  
  h4 {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${props => props.$isDarkMode ? '#cbd5e1' : '#475569'};
    margin-bottom: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const StatCard = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  border: 1px solid ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  
  .icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 1rem;
    color: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
  }
  
  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
    margin-bottom: 0.5rem;
  }
  
  .label {
    font-size: 1rem;
    color: ${props => props.$isDarkMode ? '#94a3b8' : '#64748b'};
    font-weight: 500;
  }
`;



const PersonaCard = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  border: 1px solid ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  
  .persona-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: ${props => props.$isDarkMode ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.1)'};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
    }
    
    .info {
      h4 {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
        margin-bottom: 0.25rem;
      }
      
      p {
        color: ${props => props.$isDarkMode ? '#94a3b8' : '#64748b'};
        margin: 0;
      }
    }
  }
  
  .frustrations {
    margin-bottom: 1.5rem;
    
    h5 {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${props => props.$isDarkMode ? '#ef4444' : '#dc2626'};
      margin-bottom: 0.75rem;
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        padding: 0.5rem 0;
        color: ${props => props.$isDarkMode ? '#cbd5e1' : '#475569'};
        position: relative;
        padding-left: 1.5rem;
        
        &:before {
          content: '•';
          color: ${props => props.$isDarkMode ? '#ef4444' : '#dc2626'};
          position: absolute;
          left: 0;
        }
      }
    }
  }
  
  .needs {
    font-style: italic;
    color: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
    font-size: 1.1rem;
    font-weight: 500;
    padding: 1rem;
    background: ${props => props.$isDarkMode ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.05)'};
    border-radius: 8px;
    border-left: 4px solid ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
  }
`;

const FlowSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const FlowStep = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  border: 1px solid ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  position: relative;
  
  .step-number {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
  }
  
  .step-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 1rem;
    color: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
  }
  
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => props.$isDarkMode ? '#fff' : '#1e293b'};
    margin-bottom: 0.75rem;
  }
  
  p {
    color: ${props => props.$isDarkMode ? '#cbd5e1' : '#475569'};
    line-height: 1.5;
    margin: 0;
  }
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// Impact Chart Styled Components
const ImpactChartContainer = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  border: 1px solid ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1.5rem 0;
  }
`;

const ImpactChartTitle = styled.h4<{ $isDarkMode: boolean }>`
  color: ${props => props.$isDarkMode ? '#e2e8f0' : '#334155'};
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.25rem;
  }
`;

const ImpactChartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BarChartSection = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 250px;
  justify-content: space-between;
  padding: 1rem 0;
  
  @media (max-width: 768px) {
    height: auto;
    gap: 0.75rem;
    padding: 0.5rem 0;
  }
`;

const BarChartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const BarChartLabel = styled.div<{ $isDarkMode: boolean }>`
  width: 120px;
  font-size: 0.9rem;
  color: ${props => props.$isDarkMode ? '#e2e8f0' : '#334155'};
  font-weight: 500;
  
  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
  }
`;

const BarChartBarContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BarChartBar = styled.div<{ $color: string; $width: string }>`
  width: ${props => props.$width};
  height: 24px;
  background-color: ${props => props.$color};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;
  color: white;
  padding-right: 0.5rem;
  min-width: fit-content;
  
  @media (max-width: 768px) {
    height: 20px;
    font-size: 0.75rem;
    padding-right: 0.4rem;
  }
`;

const PieChartSection = styled.div`
  @media (max-width: 768px) {
    order: 1;
  }
`;

const PieChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    height: 150px;
    margin-bottom: 1.5rem;
  }
`;

const PieChart = styled.div<{ $isDarkMode: boolean }>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(#22c55e 0deg 120deg, #16a34a 120deg 200deg, #15803d 200deg 360deg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const PieChartCenter = styled.div<{ $isDarkMode: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.$isDarkMode ? '#1a1a1a' : '#fff'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.$isDarkMode ? '#e2e8f0' : '#334155'};
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 1rem;
  }
`;

const PieChartLegend = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-top: 0.75rem;
  }
`;

const LegendItem = styled.div``;

const LegendNumber = styled.div<{ $color: string }>`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.$color};
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LegendLabel = styled.div<{ $isDarkMode: boolean }>`
  font-size: 0.8rem;
  color: ${props => props.$isDarkMode ? '#64748b' : '#94a3b8'};
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const BulletList = styled.ul<{ $isDarkMode: boolean }>`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  
  li {
    padding: 0.5rem 0;
    color: ${props => props.$isDarkMode ? '#cbd5e1' : '#475569'};
    position: relative;
    padding-left: 1.5rem;
    line-height: 1.6;
    
    &:before {
      content: '✓';
      color: ${props => props.$isDarkMode ? '#22c55e' : '#16a34a'};
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
`;

interface BorlaPayCaseStudyProps {
  isDarkMode: boolean;
  onBack: () => void;
}

const BorlaPayCaseStudy: React.FC<BorlaPayCaseStudyProps> = ({ isDarkMode, onBack }) => {
  // Chart data
  // const wastepreneurData = [
  //   { month: 'Jan', individual: 45, wastepreneur: 120 },
  //   { month: 'Feb', individual: 52, wastepreneur: 135 },
  //   { month: 'Mar', individual: 48, wastepreneur: 150 },
  //   { month: 'Apr', individual: 55, wastepreneur: 180 },
  //   { month: 'May', individual: 60, wastepreneur: 200 },
  //   { month: 'Jun', individual: 65, wastepreneur: 225 },
  // ];

  const beforeAfterData = [
    { metric: 'Onboarding Time', before: 85, after: 45 },
    { metric: 'User Confusion', before: 70, after: 25 },
    { metric: 'Feature Discovery', before: 60, after: 85 },
    { metric: 'User Satisfaction', before: 45, after: 80 },
  ];

  const impactData = [
    { category: 'Individual Users', waste: 45, users: 120 },
    { category: 'Wastepreneurs', waste: 180, users: 25 },
    { category: 'Community Leaders', waste: 300, users: 8 },
  ];

  const COLORS = ['#22c55e', '#16a34a', '#15803d', '#166534'];

  return (
    <CaseStudyContainer $isDarkMode={isDarkMode}>
      <CaseStudyHeader $isDarkMode={isDarkMode}>
        <HeaderContent>
          <BackButton $isDarkMode={isDarkMode} onClick={onBack}>
            <ArrowLeft size={16} />
            Back to Projects
          </BackButton>
          
          <ProjectTitle $isDarkMode={isDarkMode}>
            BorlaPay: Reward-Based Recycling Platform
          </ProjectTitle>
          
          <ProjectSubtitle $isDarkMode={isDarkMode}>
            Transforming waste management in Ghana through gamified mobile experiences and community-driven incentives. 
            Built a platform that turns recycling into rewards, achieving 80% user retention and 3x waste collection rates.
          </ProjectSubtitle>
          
          <ProjectMeta>
            <MetaItem $isDarkMode={isDarkMode}>
              <span className="label">Role</span>
              <span className="value">Lead Product Designer</span>
            </MetaItem>
            <MetaItem $isDarkMode={isDarkMode}>
              <span className="label">Timeline</span>
              <span className="value">6 months (2023)</span>
            </MetaItem>
            <MetaItem $isDarkMode={isDarkMode}>
              <span className="label">Platform</span>
              <span className="value">Mobile-First (iOS/Android)</span>
            </MetaItem>
            <MetaItem $isDarkMode={isDarkMode}>
              <span className="label">Team</span>
              <span className="value">1 Designer, 2 Engineers, 1 PM</span>
            </MetaItem>
          </ProjectMeta>
        </HeaderContent>
      </CaseStudyHeader>

      <CaseStudyBody>
        {/* Impact Overview */}
        <Section>
          <HighlightBox $isDarkMode={isDarkMode}>
            <h4>Impact & Results</h4>
            <p>
              Designed a mobile-first recycling incentive platform that achieved 80% user retention, 
              3x waste collection through Wastepreneur network, and addresses Ghana's 1M+ ton annual plastic waste crisis. 
              The platform successfully transformed waste behavior through gamified mobile money-style rewards.
            </p>
          </HighlightBox>
          
          <StatsGrid>
            <StatCard $isDarkMode={isDarkMode}>
              <Users className="icon" />
              <div className="number">80%</div>
              <div className="label">User Retention Rate</div>
            </StatCard>
            <StatCard $isDarkMode={isDarkMode}>
              <TrendingUp className="icon" />
              <div className="number">3x</div>
              <div className="label">Waste Collection Increase</div>
            </StatCard>
            <StatCard $isDarkMode={isDarkMode}>
              <Recycle className="icon" />
              <div className="number">1M+</div>
              <div className="label">Tons Addressable Market</div>
            </StatCard>
            <StatCard $isDarkMode={isDarkMode}>
              <Smartphone className="icon" />
              <div className="number">70%</div>
              <div className="label">Mobile Money Penetration</div>
            </StatCard>
          </StatsGrid>
        </Section>

        {/* The Problem */}
        <Section>
          <SectionTitle $isDarkMode={isDarkMode}>The Problem</SectionTitle>
          <Paragraph $isDarkMode={isDarkMode}>
            Ghana is facing a waste management crisis. Every day, cities like Accra and Kumasi generate tons of plastic waste 
            with little incentive for individuals to separate and recycle. While some informal collectors exist, the system is 
            fragmented and lacks transparency.
          </Paragraph>
          
          <img 
            src="/images/case-studies/borlapay-problem-context.png" 
            alt="Ghana waste management crisis statistics and street scenes"
            style={{ 
              width: '100%', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              margin: '2rem 0'
            }} 
          />

          <Paragraph $isDarkMode={isDarkMode}>
            Most people don't recycle because:
          </Paragraph>
          
          <BulletList $isDarkMode={isDarkMode}>
            <li>There's no direct reward or value in it</li>
            <li>No community structure supports recycling at scale</li>
            <li>There's no way to track your impact or see progress</li>
          </BulletList>

          <HighlightBox $isDarkMode={isDarkMode}>
            <h4>Market Opportunity</h4>
            <p>
              Research revealed a massive opportunity: 1M+ tons of plastic waste annually with only 5% currently recycled, 
              but 70% mobile money penetration showing readiness for digital reward systems.
            </p>
          </HighlightBox>
        </Section>

        {/* Research & Discovery */}
        <Section>
          <SectionTitle $isDarkMode={isDarkMode}>Research & Discovery</SectionTitle>
          
          <SectionSubtitle $isDarkMode={isDarkMode}>Primary Research</SectionSubtitle>
          <Paragraph $isDarkMode={isDarkMode}>
            I conducted 8 interviews with individuals from Accra, Kumasi, and Tamale, asking key questions about 
            recycling motivation, consistency barriers, and familiarity with digital rewards.
          </Paragraph>

          <TwoColumnLayout>
            <div>
              <h4 style={{ color: isDarkMode ? '#e2e8f0' : '#334155', marginBottom: '1rem' }}>Research Questions</h4>
              <BulletList $isDarkMode={isDarkMode}>
                <li>What motivates you to recycle (or not)?</li>
                <li>What would make you more consistent?</li>
                <li>How familiar are you with mobile money and digital rewards?</li>
              </BulletList>
            </div>
            <div>
              <h4 style={{ color: isDarkMode ? '#e2e8f0' : '#334155', marginBottom: '1rem' }}>Key Insights</h4>
              <BulletList $isDarkMode={isDarkMode}>
                <li><strong>Tangibility:</strong> People wanted immediate, visible rewards</li>
                <li><strong>Community Influence:</strong> Users trust neighbors more than officials</li>
                <li><strong>Familiarity:</strong> Preferred simple flows mirroring MoMo apps</li>
              </BulletList>
            </div>
          </TwoColumnLayout>

          <img 
            src="/images/case-studies/borlapay-research-insights.png" 
            alt="User interview synthesis board and key insights visualization"
            style={{ 
              width: '100%', 
              height: '350px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              margin: '2rem 0'
            }} 
          />
        </Section>

        {/* User Persona */}
        <Section>
          <SectionTitle $isDarkMode={isDarkMode}>Primary User Persona</SectionTitle>
          
          <PersonaCard $isDarkMode={isDarkMode}>
            <div className="persona-header">
              <div className="avatar">
                <Users size={24} />
              </div>
              <div className="info">
                <h4>Amina</h4>
                <p>24 • Market Seller in Accra</p>
              </div>
            </div>
            
            <div className="frustrations">
              <h5>Frustrations:</h5>
              <ul>
                <li>Doesn't trust government-run programs</li>
                <li>Always busy—needs fast, familiar experiences</li>
                <li>Wants to earn extra without extra effort</li>
              </ul>
            </div>
            
            <div className="needs">
              "Amina needs an easy way to earn while recycling after market hours."
            </div>
          </PersonaCard>

          <img 
             src="/images/case-studies/borlapay-persona-amina.svg" 
            alt="Amina persona journey map and motivation patterns"
            style={{ 
              width: '100%', 
              height: '250px', 
               objectFit: 'contain', 
              borderRadius: '12px',
               margin: '2rem 0',
               backgroundColor: 'transparent'
            }} 
          />
        </Section>

        {/* Design Opportunity */}
        <Section>
          <SectionTitle $isDarkMode={isDarkMode}>The Opportunity</SectionTitle>
          <Paragraph $isDarkMode={isDarkMode}>
            I realized I could tap into mobile money familiarity and gamification to:
          </Paragraph>
          
          <BulletList $isDarkMode={isDarkMode}>
            <li>Incentivize recycling by rewarding users instantly</li>
            <li>Build community leaders (Wastepreneurs) who help collect recyclables</li>
            <li>Create visibility of users' personal and social impact</li>
          </BulletList>

          <HighlightBox $isDarkMode={isDarkMode}>
            <h4>Sweet Spot Discovery</h4>
            <p>
              Gamified recycling with instant MoMo rewards via trusted mobile flows. This approach would drive 
              behavioral change while integrating seamlessly with how Ghanaians already use mobile and financial tools.
            </p>
          </HighlightBox>

          <Paragraph $isDarkMode={isDarkMode}>
            <strong>How Might We:</strong> Make recycling in Ghana feel rewarding, trusted, and as easy as sending mobile money?
          </Paragraph>

          <img 
            src="/images/case-studies/borlapay-opportunity-mapping.png" 
            alt="Opportunity mapping and mobile money flow comparison"
            style={{ 
              width: '100%', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              margin: '2rem 0'
            }} 
          />
        </Section>

        {/* Design Process */}
        <Section>
          <SectionTitle $isDarkMode={isDarkMode}>Design Process & Iterations</SectionTitle>
          
          <SectionSubtitle $isDarkMode={isDarkMode}>Testing Early Concepts</SectionSubtitle>
          <Paragraph $isDarkMode={isDarkMode}>
            I spent 2 weeks exploring different directions to encourage consistent recycling:
          </Paragraph>

          <TwoColumnLayout>
            <div>
              <h4 style={{ color: isDarkMode ? '#ef4444' : '#dc2626', marginBottom: '1rem' }}>What Didn't Work</h4>
              <BulletList $isDarkMode={isDarkMode}>
                <li><strong>Loyalty Cards:</strong> Hard to manage and verify, users found them inconvenient</li>
                <li><strong>Community Boards:</strong> Lacked personal incentive, people wanted individual rewards</li>
              </BulletList>
            </div>
            <div>
              <h4 style={{ color: isDarkMode ? '#22c55e' : '#16a34a', marginBottom: '1rem' }}>What Worked</h4>
              <BulletList $isDarkMode={isDarkMode}>
                <li><strong>App-Based System:</strong> Simple, familiar, and trackable</li>
                <li><strong>MoMo Integration:</strong> Aligned with user familiarity and desire for immediate feedback</li>
              </BulletList>
            </div>
          </TwoColumnLayout>

          <img 
            src="/images/case-studies/borlapay-design-process.png" 
            alt="Early concept sketches and testing results comparison"
            style={{ 
              width: '100%', 
              height: '400px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              margin: '2rem 0'
            }} 
          />
        </Section>

        {/* Key User Flows */}
        <Section>
          <SectionTitle $isDarkMode={isDarkMode}>3 Essential User Flows</SectionTitle>
          
          <FlowSteps>
            <FlowStep $isDarkMode={isDarkMode}>
              <div className="step-number">1</div>
              <Target className="step-icon" />
              <h4>Setting the Goal</h4>
              <p>Users set weekly/monthly recycling targets like "Earn 100 points from 5 bottle drops this week."</p>
            </FlowStep>
            
            <FlowStep $isDarkMode={isDarkMode}>
              <div className="step-number">2</div>
              <MapPin className="step-icon" />
              <h4>Proof of Recycling</h4>
              <p>Visual QR scan or location-based check-in at verified drop-off points to confirm recycling activity.</p>
            </FlowStep>
            
            <FlowStep $isDarkMode={isDarkMode}>
              <div className="step-number">3</div>
              <DollarSign className="step-icon" />
              <h4>Reward Feedback</h4>
              <p>Instant reward notification with points earned, redeemable for airtime, cash, or essential items.</p>
            </FlowStep>
          </FlowSteps>

          <img 
            src="/images/case-studies/borlapay-user-flows.png" 
            alt="Detailed user flow diagrams for all three core flows"
            style={{ 
              width: '100%', 
              height: '500px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              margin: '2rem 0'
            }} 
          />
        </Section>

                 {/* Design Solutions */}
         <Section>
           <SectionTitle $isDarkMode={isDarkMode}>Design Solutions</SectionTitle>
           
           {/* Onboarding Section */}
           <div style={{ 
             marginBottom: '4rem',
             padding: '2rem 0',
             borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
           }}>
             <h3 style={{
               fontSize: 'clamp(1.5rem, 4vw, 2rem)',
               fontWeight: '600',
               color: isDarkMode ? '#e2e8f0' : '#334155',
               marginBottom: '1.5rem',
               textAlign: 'center'
             }}>
               Onboarding that Feels Familiar
             </h3>
             
             {/* Mobile: Full-width image with text below */}
             <div className="mobile-layout" style={{ 
               display: 'block',
               marginBottom: '2rem'
             }}>
               <img 
                 src="/images/case-studies/borlapay-onboarding.png" 
                 alt="Onboarding flow screens showing MoMo-style design patterns"
                 style={{ 
                   width: '100%',
                   maxWidth: '400px',
                   height: 'auto',
                   objectFit: 'contain', 
                   borderRadius: '16px',
                   boxShadow: isDarkMode ? '0 15px 35px rgba(0, 0, 0, 0.3)' : '0 15px 35px rgba(0, 0, 0, 0.1)',
                   margin: '0 auto',
                   display: 'block'
                 }} 
               />
               <Paragraph $isDarkMode={isDarkMode} style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                 I simplified sign-up with MoMo-style flows and added a motivational onboarding walkthrough that 
                 immediately communicated value and built trust. The familiar mobile money patterns made users 
                 feel comfortable from the first interaction.
               </Paragraph>
             </div>
             
             {/* Desktop: Side-by-side layout */}
             <div className="desktop-layout" style={{ 
               display: 'none'
             }}>
               <div style={{ 
                 display: 'grid', 
                 gridTemplateColumns: '1fr 1fr', 
                 gap: '4rem', 
                 alignItems: 'center'
               }}>
                 <div style={{ paddingRight: '1rem' }}>
                   <Paragraph $isDarkMode={isDarkMode}>
                     I simplified sign-up with MoMo-style flows and added a motivational onboarding walkthrough that 
                     immediately communicated value and built trust. The familiar mobile money patterns made users 
                     feel comfortable from the first interaction.
                   </Paragraph>
                 </div>
                 <div style={{ 
                   display: 'flex', 
                   justifyContent: 'center', 
                   alignItems: 'center',
                   padding: '1rem'
                 }}>
                   <img 
                     src="/images/case-studies/borlapay-onboarding.png" 
                     alt="Onboarding flow screens showing MoMo-style design patterns"
                     style={{ 
                       width: '100%', 
                       maxWidth: '550px',
                       height: 'auto',
                       objectFit: 'contain', 
                       borderRadius: '20px',
                       boxShadow: isDarkMode ? '0 25px 50px rgba(0, 0, 0, 0.4)' : '0 25px 50px rgba(0, 0, 0, 0.15)'
                     }} 
                   />
                 </div>
               </div>
             </div>
           </div>

           {/* QR Scanning Section */}
           <div style={{ 
             marginBottom: '4rem',
             padding: '2rem 0',
             borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
           }}>
             <h3 style={{
               fontSize: 'clamp(1.5rem, 4vw, 2rem)',
               fontWeight: '600',
               color: isDarkMode ? '#e2e8f0' : '#334155',
               marginBottom: '1.5rem',
               textAlign: 'center'
             }}>
               Instant Reward for Every Drop-Off
             </h3>
             
             {/* Mobile: Full-width image with text below */}
             <div className="mobile-layout" style={{ 
               display: 'block',
               marginBottom: '2rem'
             }}>
               <img 
                 src="/images/case-studies/borlapay-qr-scanning.png" 
                 alt="QR scanning interface and real-time reward feedback screens"
                 style={{ 
                   width: '100%',
                   maxWidth: '400px',
                   height: 'auto',
                   objectFit: 'contain', 
                   borderRadius: '16px',
                   boxShadow: isDarkMode ? '0 15px 35px rgba(0, 0, 0, 0.3)' : '0 15px 35px rgba(0, 0, 0, 0.1)',
                   margin: '0 auto',
                   display: 'block'
                 }} 
               />
               <Paragraph $isDarkMode={isDarkMode} style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                 Users scan a QR code and see points earned in real-time—just like receiving mobile money. 
                 I designed the interaction to feel satisfying and familiar, with immediate visual feedback 
                 that reinforces the value of their recycling effort.
               </Paragraph>
             </div>
             
             {/* Desktop: Side-by-side layout */}
             <div className="desktop-layout" style={{ 
               display: 'none'
             }}>
               <div style={{ 
                 display: 'grid', 
                 gridTemplateColumns: '1fr 1fr', 
                 gap: '4rem', 
                 alignItems: 'center'
               }}>
                 <div style={{ 
                   display: 'flex', 
                   justifyContent: 'center', 
                   alignItems: 'center',
                   padding: '1rem'
                 }}>
                   <img 
                     src="/images/case-studies/borlapay-qr-scanning.png" 
                     alt="QR scanning interface and real-time reward feedback screens"
                     style={{ 
                       width: '100%', 
                       maxWidth: '550px',
                       height: 'auto',
                       objectFit: 'contain', 
                       borderRadius: '20px',
                       boxShadow: isDarkMode ? '0 25px 50px rgba(0, 0, 0, 0.4)' : '0 25px 50px rgba(0, 0, 0, 0.15)'
                     }} 
                   />
                 </div>
                 <div style={{ paddingLeft: '1rem' }}>
                   <Paragraph $isDarkMode={isDarkMode}>
                     Users scan a QR code and see points earned in real-time—just like receiving mobile money. 
                     I designed the interaction to feel satisfying and familiar, with immediate visual feedback 
                     that reinforces the value of their recycling effort.
                   </Paragraph>
                 </div>
               </div>
             </div>
           </div>

           {/* Wallet Section */}
           <div style={{ 
             marginBottom: '4rem',
             padding: '2rem 0',
             borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
           }}>
             <h3 style={{
               fontSize: 'clamp(1.5rem, 4vw, 2rem)',
               fontWeight: '600',
               color: isDarkMode ? '#e2e8f0' : '#334155',
               marginBottom: '1.5rem',
               textAlign: 'center'
             }}>
               Turning Points Into Value
             </h3>
             
             {/* Mobile: Full-width image with text below */}
             <div className="mobile-layout" style={{ 
               display: 'block',
               marginBottom: '2rem'
             }}>
               <img 
                 src="/images/case-studies/borlapay-wallet-interface.png" 
                 alt="Wallet interface showing points, streaks and redemption options"
                 style={{ 
                   width: '100%',
                   maxWidth: '400px',
                   height: 'auto',
                   objectFit: 'contain', 
                   borderRadius: '16px',
                   boxShadow: isDarkMode ? '0 15px 35px rgba(0, 0, 0, 0.3)' : '0 15px 35px rgba(0, 0, 0, 0.1)',
                   margin: '0 auto',
                   display: 'block'
                 }} 
               />
               <Paragraph $isDarkMode={isDarkMode} style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                 I introduced a Wallet section where users see their points, streaks, and redemption history. 
                 They can redeem for MoMo, airtime, or supplies with clear conversion steps that make 
                 their recycling efforts feel immediately valuable.
               </Paragraph>
             </div>
             
             {/* Desktop: Side-by-side layout */}
             <div className="desktop-layout" style={{ 
               display: 'none'
             }}>
               <div style={{ 
                 display: 'grid', 
                 gridTemplateColumns: '1fr 1fr', 
                 gap: '4rem', 
                 alignItems: 'center'
               }}>
                 <div style={{ paddingRight: '1rem' }}>
                   <Paragraph $isDarkMode={isDarkMode}>
                     I introduced a Wallet section where users see their points, streaks, and redemption history. 
                     They can redeem for MoMo, airtime, or supplies with clear conversion steps that make 
                     their recycling efforts feel immediately valuable.
                   </Paragraph>
                 </div>
                 <div style={{ 
                   display: 'flex', 
                   justifyContent: 'center', 
                   alignItems: 'center',
                   padding: '1rem'
                 }}>
                   <img 
                     src="/images/case-studies/borlapay-wallet-interface.png" 
                     alt="Wallet interface showing points, streaks and redemption options"
                     style={{ 
                       width: '100%', 
                       maxWidth: '550px',
                       height: 'auto',
                       objectFit: 'contain', 
                       borderRadius: '20px',
                       boxShadow: isDarkMode ? '0 25px 50px rgba(0, 0, 0, 0.4)' : '0 25px 50px rgba(0, 0, 0, 0.15)'
                     }} 
                   />
                 </div>
               </div>
             </div>
           </div>

           {/* Wastepreneurs Section */}
           <div style={{ 
             marginBottom: '2rem',
             padding: '2rem 0'
           }}>
             <h3 style={{
               fontSize: 'clamp(1.5rem, 4vw, 2rem)',
               fontWeight: '600',
               color: isDarkMode ? '#e2e8f0' : '#334155',
               marginBottom: '1.5rem',
               textAlign: 'center'
             }}>
               Building for Wastepreneurs
             </h3>
             
             {/* Mobile: Full-width image with text below */}
             <div className="mobile-layout" style={{ 
               display: 'block',
               marginBottom: '2rem'
             }}>
               <img 
                 src="/images/case-studies/borlapay-wastepreneur-dashboard.png" 
                 alt="Wastepreneur dashboard showing bonus mechanics and KYC verification features"
                 style={{ 
                   width: '100%',
                   maxWidth: '400px',
                   height: 'auto',
                   objectFit: 'contain', 
                   borderRadius: '16px',
                   boxShadow: isDarkMode ? '0 15px 35px rgba(0, 0, 0, 0.3)' : '0 15px 35px rgba(0, 0, 0, 0.1)',
                   margin: '0 auto',
                   display: 'block'
                 }} 
               />
               <Paragraph $isDarkMode={isDarkMode} style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                 I included bonus mechanics and KYC verification to support trusted, higher-volume collectors. 
                 These features help users build credibility and maximize earnings while maintaining 
                 the platform's integrity and trust.
               </Paragraph>
             </div>
             
             {/* Desktop: Side-by-side layout */}
             <div className="desktop-layout" style={{ 
               display: 'none'
             }}>
               <div style={{ 
                 display: 'grid', 
                 gridTemplateColumns: '1fr 1fr', 
                 gap: '4rem', 
                 alignItems: 'center'
               }}>
                 <div style={{ 
                   display: 'flex', 
                   justifyContent: 'center', 
                   alignItems: 'center',
                   padding: '1rem'
                 }}>
                   <img 
                     src="/images/case-studies/borlapay-wastepreneur-dashboard.png" 
                     alt="Wastepreneur dashboard showing bonus mechanics and KYC verification features"
                     style={{ 
                       width: '100%', 
                       maxWidth: '550px',
                       height: 'auto',
                       objectFit: 'contain', 
                       borderRadius: '20px',
                       boxShadow: isDarkMode ? '0 25px 50px rgba(0, 0, 0, 0.4)' : '0 25px 50px rgba(0, 0, 0, 0.15)'
                     }} 
                   />
                 </div>
                 <div style={{ paddingLeft: '1rem' }}>
                   <Paragraph $isDarkMode={isDarkMode}>
                     I included bonus mechanics and KYC verification to support trusted, higher-volume collectors. 
                     These features help users build credibility and maximize earnings while maintaining 
                     the platform's integrity and trust.
                   </Paragraph>
                 </div>
               </div>
             </div>
           </div>
           
           {/* Responsive CSS */}
           <style>
             {`
               .mobile-layout {
                 display: block;
               }
               
               .desktop-layout {
                 display: none;
               }
               
               @media (min-width: 768px) {
                 .mobile-layout {
                   display: none;
                 }
                 
                 .desktop-layout {
                   display: block;
                 }
               }
             `}
           </style>
         </Section>

        {/* User Testing */}
        <Section>
          <SectionTitle $isDarkMode={isDarkMode}>User Testing & Iteration</SectionTitle>
          <Paragraph $isDarkMode={isDarkMode}>
            I ran informal usability tests with 7 participants and collected feedback through screen recordings 
            and follow-up interviews. One user said, "This feels like mobile money—now I actually want to keep my bottles."
          </Paragraph>

          <HighlightBox $isDarkMode={isDarkMode}>
            <h4>Key Improvements from Testing</h4>
            <p>
              Post-interview insights led to significant interface improvements: streamlined onboarding with 
              clearer visual design, benefit-focused messaging, and progress indicators that made the value 
              proposition crystal clear from the start.
            </p>
          </HighlightBox>

          <TwoColumnLayout>
            <div>
              <h4 style={{ color: isDarkMode ? '#e2e8f0' : '#334155', marginBottom: '1rem' }}>Before Testing</h4>
              <BulletList $isDarkMode={isDarkMode}>
                <li>Complex onboarding with multiple concepts per screen</li>
                <li>Unclear visual hierarchy and spacing</li>
                <li>Feature-focused messaging</li>
                <li>No progress indicators</li>
              </BulletList>
            </div>
            <div>
              <h4 style={{ color: isDarkMode ? '#e2e8f0' : '#334155', marginBottom: '1rem' }}>After Testing</h4>
              <BulletList $isDarkMode={isDarkMode}>
                <li>Streamlined onboarding with one concept per screen</li>
                <li>Professional design with better spacing and colors</li>
                <li>Benefit-focused messaging emphasizing immediate rewards</li>
                <li>Clear progress indicators throughout flows</li>
              </BulletList>
            </div>
          </TwoColumnLayout>

          <div style={{ 
            background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
            border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            borderRadius: '12px',
            padding: '2rem',
            margin: '2rem 0'
          }}>
            <h4 style={{ 
              color: isDarkMode ? '#e2e8f0' : '#334155', 
              marginBottom: '1.5rem',
              textAlign: 'center',
              fontSize: '1.3rem'
            }}>
              User Experience Improvements After Testing
            </h4>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              height: '300px',
              justifyContent: 'space-between',
              padding: '1rem 0'
            }}>
              {beforeAfterData.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    width: '140px', 
                    fontSize: '0.9rem', 
                    color: isDarkMode ? '#e2e8f0' : '#334155',
                    fontWeight: '500'
                  }}>
                    {item.metric}
            </div>
                  <div style={{ 
                    flex: 1, 
                    display: 'flex', 
                    gap: '0.5rem', 
                    alignItems: 'center'
                  }}>
                    <div style={{ 
                      width: `${(item.before / 100) * 100}%`,
                      height: '24px',
                      backgroundColor: '#ef4444',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      fontSize: '0.8rem',
                      color: 'white',
                      paddingRight: '0.5rem',
                      minWidth: 'fit-content'
                    }}>
                      {item.before}%
                    </div>
                    <div style={{ 
                      width: `${(item.after / 100) * 100}%`,
                      height: '24px',
                      backgroundColor: '#22c55e',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      fontSize: '0.8rem',
                      color: 'white',
                      paddingRight: '0.5rem',
                      minWidth: 'fit-content'
                    }}>
                      {item.after}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem', 
              marginTop: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '16px', height: '16px', backgroundColor: '#ef4444', borderRadius: '2px' }}></div>
                <span style={{ fontSize: '0.9rem', color: isDarkMode ? '#94a3b8' : '#64748b' }}>Before Testing</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '16px', height: '16px', backgroundColor: '#22c55e', borderRadius: '2px' }}></div>
                <span style={{ fontSize: '0.9rem', color: isDarkMode ? '#94a3b8' : '#64748b' }}>After Testing</span>
              </div>
            </div>
          </div>
          
                                                                              {/* Mobile App Interfaces Showcase */}
             <h3 style={{
               textAlign: 'center',
               fontSize: 'clamp(1.5rem, 4vw, 2rem)',
               fontWeight: '600',
               color: isDarkMode ? '#e2e8f0' : '#334155',
               marginBottom: '2rem'
             }}>
               Mobile App Interfaces
             </h3>
             
                           {/* Desktop: Animated Horizontal Scroll */}
              <div 
                className="desktop-showcase"
                style={{ 
                  marginTop: '2rem',
                  overflow: 'hidden',
                  padding: '1rem 0',
                  position: 'relative'
                }}
              >
                <div style={{
                  display: 'flex',
                  gap: '2rem',
                  animation: 'scroll 20s linear infinite',
                  width: 'max-content'
                }}>
                  {/* Desktop App Interfaces */}
                  {[1, 2, 3, 4].map((num, index) => (
                    <div key={index} style={{
                      width: '280px',
                      height: '500px',
                      background: '#fff',
                      borderRadius: '20px',
                      padding: '1rem',
                      boxShadow: isDarkMode ? '0 15px 35px rgba(0, 0, 0, 0.3)' : '0 15px 35px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      flexShrink: 0
                    }}>
                      <img 
                        src={`/images/case-studies/ui-grid/ui-0${num}.png`}
                        alt={`Mobile App Interface ${num}`}
                        style={{ 
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '12px',
                          display: 'block'
                        }} 
                      />
                    </div>
                  ))}
                  
                  {/* Duplicate Set for Seamless Loop */}
                  {[1, 2, 3, 4].map((num, index) => (
                    <div key={`dup-${index}`} style={{
                      width: '280px',
                      height: '500px',
                      background: '#fff',
                      borderRadius: '20px',
                      padding: '1rem',
                      boxShadow: isDarkMode ? '0 15px 35px rgba(0, 0, 0, 0.3)' : '0 15px 35px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      flexShrink: 0
                    }}>
                      <img 
                        src={`/images/case-studies/ui-grid/ui-0${num}.png`}
                        alt={`Mobile App Interface ${num}`}
                        style={{ 
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '12px',
                          display: 'block'
                        }} 
                      />
                    </div>
                  ))}
                </div>
                
                                 <style>
                   {`
                     @keyframes scroll {
                       0% { transform: translateX(0); }
                       100% { transform: translateX(-50%); }
                     }
                     
                     .desktop-showcase {
                       display: none;
                     }
                     
                     @media (min-width: 768px) {
                       .desktop-showcase {
                         display: block !important;
                       }
                     }
                   `}
                 </style>
               </div>
               
               {/* Mobile: Responsive Grid Layout */}
               <div 
                 className="mobile-showcase"
                 style={{ 
                   marginTop: '2rem',
                   display: 'grid',
                   gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                   gap: '1.5rem',
                   padding: '1rem 0'
                 }}
               >
                 {[1, 2, 3, 4].map((num, index) => (
                   <div key={index} style={{
                     background: '#fff',
                     borderRadius: '16px',
                     padding: '0.75rem',
                     boxShadow: isDarkMode ? '0 8px 25px rgba(0, 0, 0, 0.2)' : '0 8px 25px rgba(0, 0, 0, 0.08)',
                     border: '1px solid rgba(0, 0, 0, 0.05)',
                     aspectRatio: '9/16',
                     maxWidth: '320px',
                     margin: '0 auto',
                     width: '100%'
                   }}>
                     <img 
                       src={`/images/case-studies/ui-grid/ui-0${num}.png`}
                       alt={`Mobile App Interface ${num}`}
                       style={{ 
                         width: '100%',
                         height: '100%',
                         objectFit: 'cover',
                         borderRadius: '12px',
                         display: 'block'
                       }} 
                     />
                   </div>
                 ))}
                 
                 <style>
                   {`
                     .mobile-showcase {
                       display: block;
                     }
                     
                     @media (min-width: 768px) {
                       .mobile-showcase {
                         display: none !important;
                       }
                     }
                   `}
                 </style>
               </div>
        </Section>

        {/* Results & Impact */}
        <Section>
          <SectionTitle $isDarkMode={isDarkMode}>Results & Impact</SectionTitle>
          
          <HighlightBox $isDarkMode={isDarkMode}>
            <h4>Measurable Outcomes</h4>
            <p>
              After testing with 20+ early users: 80% said they'd recycle more frequently because of instant rewards. 
              Users requested more drop-off locations and higher reward tiers. My Wastepreneur pilot saw 3x more 
              waste collected vs individual users.
            </p>
          </HighlightBox>

          <StatsGrid>
            <StatCard $isDarkMode={isDarkMode}>
              <TrendingUp className="icon" />
              <div className="number">80%</div>
              <div className="label">Would Recycle More Frequently</div>
            </StatCard>
            <StatCard $isDarkMode={isDarkMode}>
              <Award className="icon" />
              <div className="number">3x</div>
              <div className="label">Wastepreneur Collection Rate</div>
            </StatCard>
            <StatCard $isDarkMode={isDarkMode}>
              <Users className="icon" />
              <div className="number">20+</div>
              <div className="label">Early User Testers</div>
            </StatCard>
            <StatCard $isDarkMode={isDarkMode}>
              <Zap className="icon" />
              <div className="number">5%→80%</div>
              <div className="label">Recycling Participation Potential</div>
            </StatCard>
          </StatsGrid>

          <ImpactChartContainer $isDarkMode={isDarkMode}>
            <ImpactChartTitle $isDarkMode={isDarkMode}>
              Impact by User Category
            </ImpactChartTitle>
            <ImpactChartGrid>
              <BarChartSection>
                <BarChartContainer>
                  {impactData.map((item, index) => (
                    <BarChartItem key={index}>
                      <BarChartLabel $isDarkMode={isDarkMode}>
                        {item.category}
                      </BarChartLabel>
                      <BarChartBarContainer>
                        <BarChartBar 
                          $color={COLORS[index % COLORS.length]}
                          $width={`${(item.waste / 300) * 100}%`}
                        >
                          {item.waste}kg
                        </BarChartBar>
                      </BarChartBarContainer>
                    </BarChartItem>
                  ))}
                </BarChartContainer>
              </BarChartSection>
              <PieChartSection>
                <PieChartContainer>
                  <PieChart $isDarkMode={isDarkMode}>
                    <PieChartCenter $isDarkMode={isDarkMode}>
                      Users
                    </PieChartCenter>
                  </PieChart>
                </PieChartContainer>
                <PieChartLegend>
                  {impactData.map((item, index) => (
                    <LegendItem key={index}>
                      <LegendNumber $color={COLORS[index % COLORS.length]}>
                        {item.users}
                      </LegendNumber>
                      <LegendLabel $isDarkMode={isDarkMode}>
                        {item.category.split(' ')[0]}
                      </LegendLabel>
                    </LegendItem>
                  ))}
                </PieChartLegend>
              </PieChartSection>
            </ImpactChartGrid>
          </ImpactChartContainer>
        </Section>

        {/* Key Learnings */}
        <Section>
          <SectionTitle $isDarkMode={isDarkMode}>Key Learnings & Takeaways</SectionTitle>
          
          <HighlightBox $isDarkMode={isDarkMode}>
            <h4>Design Strategy Insights</h4>
            <p>
              This project reinforced the power of leveraging familiar patterns and behaviors rather than 
              trying to create entirely new ones. By building on mobile money familiarity and community trust, 
              we created a solution that felt natural to users while solving a complex social problem.
            </p>
          </HighlightBox>

          <TwoColumnLayout>
            <div>
              <h4 style={{ color: isDarkMode ? '#e2e8f0' : '#334155', marginBottom: '1rem' }}>What Worked</h4>
              <BulletList $isDarkMode={isDarkMode}>
                <li>Leveraging existing mental models (MoMo flows)</li>
                <li>Immediate, tangible rewards over abstract benefits</li>
                <li>Community-driven approach with Wastepreneurs</li>
                <li>Simple, gamified progression systems</li>
              </BulletList>
            </div>
            <div>
              <h4 style={{ color: isDarkMode ? '#e2e8f0' : '#334155', marginBottom: '1rem' }}>Future Opportunities</h4>
              <BulletList $isDarkMode={isDarkMode}>
                <li>Expand to other West African markets</li>
                <li>Add social sharing and community challenges</li>
                <li>Partner with local businesses for reward redemption</li>
                <li>Integrate with existing waste management infrastructure</li>
              </BulletList>
            </div>
          </TwoColumnLayout>

          <Paragraph $isDarkMode={isDarkMode}>
            This project demonstrated how thoughtful UX design can address complex social and environmental 
            challenges by understanding cultural context, leveraging familiar behaviors, and creating 
            immediate value for users. The success metrics validate that good design can drive positive 
            behavioral change at scale.
          </Paragraph>
        </Section>
      </CaseStudyBody>
    </CaseStudyContainer>
  );
};

export default BorlaPayCaseStudy;