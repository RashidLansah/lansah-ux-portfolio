import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, TrendingUp, Clock, Target, Smartphone, ChefHat, Brain, Zap, CheckCircle, Upload, Edit, Play, Calendar } from 'lucide-react';

interface CaseStudyProps {
  isDarkMode: boolean;
  onBack: () => void;
}

// Styled Components
const CaseStudyContainer = styled(motion.div)<{ $isDarkMode: boolean }>`
  min-height: 100vh;
  background: ${props => props.$isDarkMode ? '#000' : '#fff'};
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BackButton = styled(motion.button)<{ $isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px solid ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 auto 2rem auto;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    border-color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};
  }
`;

const HeroSection = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled(motion.h1)<{ $isDarkMode: boolean }>`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)<{ $isDarkMode: boolean }>`
  font-size: 1.25rem;
  color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const MetaInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
`;

const MetaCard = styled(motion.div)<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  border: 1px solid ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 12px;
  padding: 1.5rem;
`;

const MetaLabel = styled.p<{ $isDarkMode: boolean }>`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const MetaValue = styled.p<{ $isDarkMode: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2<{ $isDarkMode: boolean }>`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContentText = styled.p<{ $isDarkMode: boolean }>`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
  margin-bottom: 1.5rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StatsList = styled.ul<{ $isDarkMode: boolean }>`
  list-style: none;
  padding: 0;
  margin: 1.5rem auto;
  max-width: 600px;
  text-align: left;
`;

const StatItem = styled.li<{ $isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 1.125rem;
  color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ProcessCard = styled(motion.div)<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  border: 1px solid ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
`;

const ProcessIcon = styled.div<{ $isDarkMode: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
`;

const ProcessTitle = styled.h3<{ $isDarkMode: boolean }>`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${props => props.$isDarkMode ? '#fff' : '#000'};
`;

const ProcessDescription = styled.p<{ $isDarkMode: boolean }>`
  font-size: 1rem;
  line-height: 1.5;
  color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
`;

const ImagePlaceholder = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;
  height: 300px;
  border: 2px dashed ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
  font-size: 1rem;
  font-weight: 500;
`;

const OutcomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const OutcomeCard = styled(motion.div)<{ $isDarkMode: boolean }>`
  background: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  border: 1px solid ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`;

const OutcomeNumber = styled.div<{ $isDarkMode: boolean }>`
  font-size: 2rem;
  font-weight: 700;
  color: #8b5cf6;
  margin-bottom: 0.5rem;
`;

const OutcomeLabel = styled.p<{ $isDarkMode: boolean }>`
  font-size: 0.875rem;
  color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
`;

const NextStepsList = styled.ul<{ $isDarkMode: boolean }>`
  list-style: none;
  padding: 0;
  margin: 1.5rem auto;
  max-width: 700px;
  text-align: left;
`;

const NextStepItem = styled.li<{ $isDarkMode: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 1.125rem;
  color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
`;

const HighlightBox = styled(motion.div)<{ $isDarkMode: boolean }>`
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1));
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
`;

export const Receipt2RecipeCaseStudy: React.FC<CaseStudyProps> = ({ isDarkMode, onBack }) => {
  return (
    <CaseStudyContainer
      $isDarkMode={isDarkMode}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <BackButton
        $isDarkMode={isDarkMode}
        onClick={onBack}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <ArrowLeft size={16} />
        Back to Projects
      </BackButton>

      <HeroSection>
        <Title
          $isDarkMode={isDarkMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Receipt2Recipe
        </Title>
        <Subtitle
          $isDarkMode={isDarkMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Exploring how AI can turn grocery receipts into meal plans
        </Subtitle>

        <MetaInfo>
          <MetaCard
            $isDarkMode={isDarkMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <MetaLabel $isDarkMode={isDarkMode}>Role</MetaLabel>
            <MetaValue $isDarkMode={isDarkMode}>Product Designer (end-to-end)</MetaValue>
          </MetaCard>
          <MetaCard
            $isDarkMode={isDarkMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <MetaLabel $isDarkMode={isDarkMode}>Focus</MetaLabel>
            <MetaValue $isDarkMode={isDarkMode}>Research, prototyping, motion design</MetaValue>
          </MetaCard>
          <MetaCard
            $isDarkMode={isDarkMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <MetaLabel $isDarkMode={isDarkMode}>Timeline</MetaLabel>
            <MetaValue $isDarkMode={isDarkMode}>4 weeks MVP</MetaValue>
          </MetaCard>
          <MetaCard
            $isDarkMode={isDarkMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <MetaLabel $isDarkMode={isDarkMode}>Outcome</MetaLabel>
            <MetaValue $isDarkMode={isDarkMode}>Validated AI trust insights</MetaValue>
          </MetaCard>
        </MetaInfo>
      </HeroSection>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <SectionTitle $isDarkMode={isDarkMode}>Overview</SectionTitle>
        <ContentText $isDarkMode={isDarkMode}>
          I designed and prototyped Receipt2Recipe to explore how AI could reduce decision fatigue in cooking. Instead of browsing endless recipes, users upload a receipt → AI extracts groceries → generates a 7-day personalized plan.
        </ContentText>
        <ContentText $isDarkMode={isDarkMode}>
          <strong>Goal:</strong> Test if AI can make meal planning faster, clearer, and more trustworthy
        </ContentText>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <SectionTitle $isDarkMode={isDarkMode}>The Problem</SectionTitle>
        <StatsList $isDarkMode={isDarkMode}>
          <StatItem $isDarkMode={isDarkMode}>
            <TrendingUp size={20} color="#8b5cf6" />
            67% shop without a meal plan
          </StatItem>
          <StatItem $isDarkMode={isDarkMode}>
            <Target size={20} color="#8b5cf6" />
            54% waste food due to indecision
          </StatItem>
          <StatItem $isDarkMode={isDarkMode}>
            <Brain size={20} color="#8b5cf6" />
            Existing apps = inspiration, not execution
          </StatItem>
        </StatsList>
        <HighlightBox $isDarkMode={isDarkMode}>
          <ContentText $isDarkMode={isDarkMode}>
            <strong>Opportunity:</strong> Start with receipts, not recipe browsing.
          </ContentText>
        </HighlightBox>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <SectionTitle $isDarkMode={isDarkMode}>Process</SectionTitle>
        <ContentText $isDarkMode={isDarkMode}>
          <strong>Research:</strong> 12 interviews → users want automation, not more choice
        </ContentText>
        <ContentText $isDarkMode={isDarkMode}>
          <strong>Flow:</strong> Upload → Extract → Review → Generate → 7-Day Plan
        </ContentText>
        <ContentText $isDarkMode={isDarkMode}>
          <strong>Principles:</strong> Trustworthy AI, Delightful motion, User control, Accessibility
        </ContentText>
        
        <ImagePlaceholder $isDarkMode={isDarkMode}>
          [Insert journey map or flow diagram]
        </ImagePlaceholder>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <SectionTitle $isDarkMode={isDarkMode}>Key Screens</SectionTitle>
        <ProcessGrid>
          <ProcessCard
            $isDarkMode={isDarkMode}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <ProcessIcon $isDarkMode={isDarkMode}>
              <Upload size={24} />
            </ProcessIcon>
            <ProcessTitle $isDarkMode={isDarkMode}>Home</ProcessTitle>
            <ProcessDescription $isDarkMode={isDarkMode}>
              Upload options + latest plan preview
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard
            $isDarkMode={isDarkMode}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <ProcessIcon $isDarkMode={isDarkMode}>
              <Zap size={24} />
            </ProcessIcon>
            <ProcessTitle $isDarkMode={isDarkMode}>Extracting</ProcessTitle>
            <ProcessDescription $isDarkMode={isDarkMode}>
              Full-screen AI loader + phased steps
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard
            $isDarkMode={isDarkMode}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <ProcessIcon $isDarkMode={isDarkMode}>
              <Edit size={24} />
            </ProcessIcon>
            <ProcessTitle $isDarkMode={isDarkMode}>Review Items</ProcessTitle>
            <ProcessDescription $isDarkMode={isDarkMode}>
              Editable grocery list + smart AI chip
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard
            $isDarkMode={isDarkMode}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <ProcessIcon $isDarkMode={isDarkMode}>
              <Play size={24} />
            </ProcessIcon>
            <ProcessTitle $isDarkMode={isDarkMode}>Generate</ProcessTitle>
            <ProcessDescription $isDarkMode={isDarkMode}>
              Flow-line animation, staged reasoning
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard
            $isDarkMode={isDarkMode}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <ProcessIcon $isDarkMode={isDarkMode}>
              <Calendar size={24} />
            </ProcessIcon>
            <ProcessTitle $isDarkMode={isDarkMode}>7-Day Plan</ProcessTitle>
            <ProcessDescription $isDarkMode={isDarkMode}>
              Day cards, recipe swaps, expand for details
            </ProcessDescription>
          </ProcessCard>
        </ProcessGrid>

        <ImagePlaceholder $isDarkMode={isDarkMode}>
          [Insert screen mockups / prototype shots]
        </ImagePlaceholder>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <SectionTitle $isDarkMode={isDarkMode}>Outcome</SectionTitle>
        <ContentText $isDarkMode={isDarkMode}>
          MVP functional in 4 weeks
        </ContentText>
        
        <OutcomeGrid>
          <OutcomeCard
            $isDarkMode={isDarkMode}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <OutcomeNumber $isDarkMode={isDarkMode}>8/10</OutcomeNumber>
            <OutcomeLabel $isDarkMode={isDarkMode}>followed &gt;70% of recipes</OutcomeLabel>
          </OutcomeCard>

          <OutcomeCard
            $isDarkMode={isDarkMode}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <OutcomeNumber $isDarkMode={isDarkMode}>~30 min</OutcomeNumber>
            <OutcomeLabel $isDarkMode={isDarkMode}>per week saved on planning</OutcomeLabel>
          </OutcomeCard>
        </OutcomeGrid>

        <HighlightBox $isDarkMode={isDarkMode}>
          <ContentText $isDarkMode={isDarkMode}>
            <strong>Feedback:</strong> "This feels like ChatGPT for my fridge."
          </ContentText>
        </HighlightBox>

        <ImagePlaceholder $isDarkMode={isDarkMode}>
          [Insert chart: % recipes cooked vs food wasted]
        </ImagePlaceholder>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <SectionTitle $isDarkMode={isDarkMode}>Next Steps (Research Focused)</SectionTitle>
        <NextStepsList $isDarkMode={isDarkMode}>
          <NextStepItem $isDarkMode={isDarkMode}>
            <Users size={20} color="#8b5cf6" />
            Expand user testing with families, students, older adults
          </NextStepItem>
          <NextStepItem $isDarkMode={isDarkMode}>
            <TrendingUp size={20} color="#8b5cf6" />
            Run longitudinal study on cooking + waste reduction
          </NextStepItem>
          <NextStepItem $isDarkMode={isDarkMode}>
            <CheckCircle size={20} color="#8b5cf6" />
            Validate with dieticians for nutritional balance
          </NextStepItem>
          <NextStepItem $isDarkMode={isDarkMode}>
            <Target size={20} color="#8b5cf6" />
            Stress test messy receipts + small inventories
          </NextStepItem>
          <NextStepItem $isDarkMode={isDarkMode}>
            <Smartphone size={20} color="#8b5cf6" />
            Accessibility audit with assistive tech users
          </NextStepItem>
          <NextStepItem $isDarkMode={isDarkMode}>
            <Clock size={20} color="#8b5cf6" />
            Study how motion impacts trust + wait perception
          </NextStepItem>
        </NextStepsList>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <SectionTitle $isDarkMode={isDarkMode}>Reflection</SectionTitle>
        <StatsList $isDarkMode={isDarkMode}>
          <StatItem $isDarkMode={isDarkMode}>
            <CheckCircle size={20} color="#10b981" />
            Hypothesis: automation &gt; inspiration ✓ validated
          </StatItem>
          <StatItem $isDarkMode={isDarkMode}>
            <Brain size={20} color="#8b5cf6" />
            Transparency cues (steppers, skeletons) built AI trust
          </StatItem>
          <StatItem $isDarkMode={isDarkMode}>
            <Zap size={20} color="#8b5cf6" />
            Motion improved perceived speed, but needed restraint
          </StatItem>
          <StatItem $isDarkMode={isDarkMode}>
            <Target size={20} color="#8b5cf6" />
            Editing tolerance = key to trust balance
          </StatItem>
        </StatsList>
        
        <HighlightBox $isDarkMode={isDarkMode}>
          <ContentText $isDarkMode={isDarkMode}>
            <strong>Next:</strong> measure real behavior change (food waste, adoption)
          </ContentText>
        </HighlightBox>

        <ContentText $isDarkMode={isDarkMode}>
          Designing Receipt2Recipe showed me how to use AI + motion + research to explore new behaviors, not just new UIs.
        </ContentText>
      </Section>
    </CaseStudyContainer>
  );
};

export default Receipt2RecipeCaseStudy; 