"use client"
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  width: 100dvw;
  background-color: #c6b062;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 16px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #666;
  margin-bottom: 32px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to Tattoo Studio Management System</Title>
      <Subtitle>Manage your tattoo studio with ease</Subtitle>
      <Button>Get Started</Button>
    </Container>
  );
};

export default LandingPage;