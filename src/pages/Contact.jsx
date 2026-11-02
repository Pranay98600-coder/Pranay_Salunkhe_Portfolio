import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa6';

const ContactSection = styled.section`
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

const ContactForm = styled(Form)`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled(Field)`
  background: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.accent};
  border-radius: 5px;
  padding: 0.8rem;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
`;

const ErrorText = styled.div`
  color: #ff6b6b;
  font-size: 0.9rem;
`;

const SubmitButton = styled(motion.button)`
  background: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.primary};
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:disabled {
    background: ${(props) => props.theme.text};
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.p)`
  color: ${(props) => props.theme.accent};
  font-size: 1.2rem;
`;

const ErrorMessageStyled = styled(motion.p)`
  color: #ff6b6b;
  font-size: 1.2rem;
`;

const ContactDetails = styled.div`
  display: grid;
  gap: 0.7rem;
  width: min(500px, 100%);
  margin-bottom: 2rem;
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  &:hover { color: ${(props) => props.theme.accent}; }
  svg { color: ${(props) => props.theme.accent}; }
`;

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await fetch('http://localhost:8080/api/contact', { // Update to deployed backend URL later
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setSuccess(true);
        setError(null);
        resetForm();
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setTimeout(() => setError(null), 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ContactSection>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </Title>
      <ContactDetails>
        <ContactLink href="mailto:salunkhepranay14@gmail.com"><FaEnvelope aria-hidden="true" />salunkhepranay14@gmail.com</ContactLink>
        <ContactLink href="tel:9860044066"><FaPhone aria-hidden="true" />9860044066</ContactLink>
        <ContactLink href="https://github.com/Pranay98600-coder" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" />GitHub</ContactLink>
        <ContactLink href="https://www.linkedin.com/in/pranay-salunkhe-968650255/" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" />LinkedIn</ContactLink>
      </ContactDetails>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <ContactForm aria-label="Contact form">
            <FormField>
              <Input name="name" placeholder="Your Name" aria-label="Your name" />
              <ErrorMessage name="name" component={ErrorText} />
            </FormField>
            <FormField>
              <Input name="email" type="email" placeholder="Your Email" aria-label="Your email" />
              <ErrorMessage name="email" component={ErrorText} />
            </FormField>
            <FormField>
              <Input name="message" as="textarea" placeholder="Your Message" aria-label="Your message" rows="5" />
              <ErrorMessage name="message" component={ErrorText} />
            </FormField>
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        )}
      </Formik>
      {success && (
        <SuccessMessage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Message sent successfully!
        </SuccessMessage>
      )}
      {error && (
        <ErrorMessageStyled
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </ErrorMessageStyled>
      )}
    </ContactSection>
  );
}

export default Contact;