import { motion } from 'framer-motion';
import styled from 'styled-components';

const BlogSection = styled.section`
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

const BlogGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const BlogCard = styled(motion.div)`
  background: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.accent};
  border-radius: 10px;
  padding: 1.5rem;
  text-align: left;
  role="article";
`;

const BlogTitle = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const BlogExcerpt = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const BlogLink = styled.a`
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: ${(props) => props.theme.text};
  }
`;

const posts = [
  {
    id: 1,
    title: 'My First ML Model',
    excerpt: 'Exploring a simple linear regression model using Python and scikit-learn.',
    link: '#',
  },
  {
    id: 2,
    title: 'Building a React App',
    excerpt: 'Lessons learned from creating a responsive todo app with React and local storage.',
    link: '#',
  },
];

function Blog() {
  return (
    <BlogSection>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Blog
      </Title>
      <BlogGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            <BlogLink href={post.link}>Read More</BlogLink>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogSection>
  );
}

export default Blog;