import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h2)`
  color: ${(props) => props.theme.accent};
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const FilterContainer = styled(motion.div)`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
`;

const FilterButton = styled.button`
  background: ${(props) => (props.active ? props.theme.accent : "transparent")};
  color: ${(props) => (props.active ? props.theme.primary : props.theme.text)};
  border: 2px solid ${(props) => props.theme.accent};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.primary};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const ProjectCard = styled(motion.div)`
  background: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.accent};
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  role="article";
`;

const ProjectTitle = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  color: ${(props) => props.theme.accent};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ProjectLink = styled.a`
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: ${(props) => props.theme.text};
  }
`;

const projects = [
  {
    id: 1,
    title: "Movie App",
    description:
      "Developed a responsive movie search application using React.js, allowing users to discover movies via the TMDB (The Movie Database) API.Implemented real‑time search functionality and dynamic rendering of trending movies.",
    tech: ["HTML", "CSS", "JavaScript", "React","Appwrite"],
    github: "https://github.com/Pranay98600-coder/movie_app",
    demo: "null",
    category: "Frontend",
  },
  {
    id: 2,
    title: "News Application",
    description: "• Built a real‑time news application using React.js that fetches current news from a public news API.• Implemented category‑based filtering (e.g., Sports, Technology, Health) with a dynamic user interface.• Used Axios for API integration and React Router for client‑side navigation.Designed responsive UI using Tailwind CSS and enhanced interactivity with React Hooks",
    tech: ["HTML", "CSS", "JavaScript", "React","Tailwind-Css","Framer Motion"],
    github: "https://github.com/Pranay98600-coder/Nexus_News",
    demo: null,
    category: "Frontend",
  },
  {
    id: 3,
    title: "Dashboard",
    description: " Collaborated with the team to build responsive UI using React.js,TailwindCSS,and Vite. Develop Project Management Dashboard featuring task tracking, project summaries, budget monitoring, and real‑time progress updates..",
    tech: ["React", "Chart.js", "JavaScript"],
    github: "https://github.com/Pranay98600-coder/Nexus_logic_project_2",
    demo: null,
    category: "Frontend",
  },
   {
    id: 4,
    title: "Rock Paper Sessior Game",
    description: " Created Rock Paper Sessior Game using basic Html,Css,Javascript which user play against computer",
    tech: ["HTML","css","Javascript"],
    github: "https://github.com/Pranay98600-coder/Rock_Paper_Sessior_game",
    demo: null,
    category: "Frontend",
  },
  {
    id: 5,
    title: "Amazon UI Clone",
    description: " Created Amazon Home Page clone using basic Html and css",
    tech: ["HTML","css"],
    github: "https://github.com/Pranay98600-coder/Amazon-clone-frontend",
    demo: null,
    category: "Frontend",
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <ProjectsSection>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </Title>
      <FilterContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        aria-label="Project filter"
      >
        <FilterButton
          active={filter === "All"}
          onClick={() => setFilter("All")}
        >
          All
        </FilterButton>
        <FilterButton
          active={filter === "Frontend"}
          onClick={() => setFilter("Frontend")}
        >
          Frontend
        </FilterButton>
        <FilterButton
          active={filter === "Backend"}
          onClick={() => setFilter("Backend")}
        >
          Backend
        </FilterButton>
        <FilterButton
          active={filter === "AI/ML"}
          onClick={() => setFilter("AI/ML")}
        >
          AI/ML
        </FilterButton>
      </FilterContainer>
      <ProjectsGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>Tech: {project.tech.join(", ")}</TechStack>
            <ProjectLinks>
              <ProjectLink
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </ProjectLink>
              {project.demo && (
                <ProjectLink
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;
