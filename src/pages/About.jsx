import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.primary};
`;

const Bio = styled(motion.div)`
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;
`;

const BioTitle = styled.h2`
  color: ${(props) => props.theme.accent};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const BioText = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  line-height: 1.6;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
  max-width: 800px;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  svg {
    font-size: 2.5rem;
    color: ${(props) => props.theme.accent};
    margin-bottom: 0.5rem;
  }
  &:hover svg {
    box-shadow: 0 0 10px ${(props) => props.theme.accent};
  }
`;

const ChartContainer = styled(motion.div)`
  max-width: 500px;
  width: 100%;
  padding: 1rem;
`;

const chartData = {
  labels: ['HTML/CSS', 'JavaScript', 'React', 'Java', 'AI/ML/DA'],
  datasets: [
    {
      label: 'Skill Proficiency',
      data: [90, 85, 80, 70, 40],
      backgroundColor: 'rgba(100, 255, 218, 0.2)',
      borderColor: '#64FFDA',
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  scales: {
    r: {
      angleLines: { color: '#CCD6F6' },
      grid: { color: '#CCD6F6' },
      pointLabels: { color: '#CCD6F6', font: { size: 14 } },
      ticks: { display: false },
    },
  },
  plugins: {
    legend: { labels: { color: '#CCD6F6' } },
  },
};

function About() {
  return (
    <AboutSection>
      <Bio
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <BioTitle>About Me</BioTitle>
        <BioText>
          I'm a Computer Engineering Graduate passionate about building scalable web applications and exploring the frontiers of AI, ML, and Data Analytics. Skilled in HTML, CSS, JavaScript, React, and Java, I aim to create impactful solutions as a full-stack developer. When I'm not coding, I'm diving into AI experiments or learning about data-driven insights.
        </BioText>
      </Bio>
      <SkillsGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SkillItem>
          <FaHtml5 aria-hidden="true" />
          <span>HTML/CSS</span>
        </SkillItem>
        <SkillItem>
          <FaCss3Alt aria-hidden="true" />
          <span>CSS</span>
        </SkillItem>
        <SkillItem>
          <FaJs aria-hidden="true" />
          <span>JavaScript</span>
        </SkillItem>
        <SkillItem>
          <FaReact aria-hidden="true" />
          <span>React</span>
        </SkillItem>
        <SkillItem>
          <FaJava aria-hidden="true" />
          <span>Java</span>
        </SkillItem>
        <SkillItem>
          <SiTensorflow aria-hidden="true" />
          <span>AI/ML/DA</span>
        </SkillItem>
      </SkillsGrid>
      <ChartContainer
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        aria-label="Skills proficiency chart"
      >
        <Radar data={chartData} options={chartOptions} />
      </ChartContainer>
    </AboutSection>
  );
}

export default About;