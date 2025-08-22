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
  margin-top: 2rem;
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

const ImagePlaceholder = styled.div<{ $isDarkMode: boolean; height?: string }>`
  background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  border: 2px dashed ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
  border-radius: 12px;
  height: ${props => props.height || '400px'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  
  .placeholder-text {
    color: ${props => props.$isDarkMode ? '#64748b' : '#94a3b8'};
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
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
            src="/images/case-studies/borlapay-persona-amina.png" 
            alt="Amina persona journey map and motivation patterns"
            style={{ 
              width: '100%', 
              height: '250px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              margin: '2rem 0'
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
          
          <SectionSubtitle $isDarkMode={isDarkMode}>Onboarding that Feels Familiar</SectionSubtitle>
          <Paragraph $isDarkMode={isDarkMode}>
            I simplified sign-up with MoMo-style flows and added a motivational onboarding walkthrough that 
            immediately communicated value and built trust.
          </Paragraph>

          <img 
            src="/images/case-studies/borlapay-onboarding.png" 
            alt="Onboarding flow screens showing MoMo-style design patterns"
            style={{ 
              width: '100%', 
              height: '400px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              margin: '2rem 0'
            }} 
          />

          <SectionSubtitle $isDarkMode={isDarkMode}>Instant Reward for Every Drop-Off</SectionSubtitle>
          <Paragraph $isDarkMode={isDarkMode}>
            Users scan a QR code and see points earned in real-time—just like receiving mobile money. 
            I designed the interaction to feel satisfying and familiar.
          </Paragraph>

          <img 
            src="/images/case-studies/borlapay-qr-scanning.png" 
            alt="QR scanning interface and real-time reward feedback screens"
            style={{ 
              width: '100%', 
              height: '400px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              margin: '2rem 0'
            }} 
          />

          <SectionSubtitle $isDarkMode={isDarkMode}>Turning Points Into Value</SectionSubtitle>
          <Paragraph $isDarkMode={isDarkMode}>
            I introduced a Wallet section where users see their points, streaks, and redemption history. 
            They can redeem for MoMo, airtime, or supplies with clear conversion steps.
          </Paragraph>

          <ImagePlaceholder $isDarkMode={isDarkMode} height="400px">
            <div className="placeholder-text">
              [Image: Wallet interface showing points, streaks, and redemption options]
            </div>
          </ImagePlaceholder>

          <SectionSubtitle $isDarkMode={isDarkMode}>Building for Wastepreneurs</SectionSubtitle>
          <Paragraph $isDarkMode={isDarkMode}>
            I included bonus mechanics and KYC verification to support trusted, higher-volume collectors. 
            These features help users build credibility and maximize earnings.
          </Paragraph>

          <ImagePlaceholder $isDarkMode={isDarkMode} height="400px">
            <div className="placeholder-text">
              [Image: Wastepreneur dashboard and verification flow]
            </div>
          </ImagePlaceholder>
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

          <ImagePlaceholder $isDarkMode={isDarkMode} height="400px">
            <div className="placeholder-text">
              [Image: Before/after comparison of key screens based on user feedback]
            </div>
          </ImagePlaceholder>
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

          <ImagePlaceholder $isDarkMode={isDarkMode} height="350px">
            <div className="placeholder-text">
              [Image: Impact metrics dashboard and user success stories]
            </div>
          </ImagePlaceholder>
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