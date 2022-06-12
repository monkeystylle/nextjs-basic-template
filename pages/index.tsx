import styled from 'styled-components';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <PageWrapper>
        <Title>Homepage</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          ducimus deserunt modi excepturi voluptas recusandae?
        </Text>
        <Button>See Ninja Listing</Button>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div``;

const Title = styled.h1`
  color: #333;
  padding-bottom: 20px;
  /* text-align: center; */
  font-size: 2rem;
`;

const Text = styled.p`
  color: #777;
`;

const Button = styled.button`
  display: inline;
  width: 150px;
  padding: 8px 0;
  margin: 20px auto;
  background-color: #4979ff;
  border-radius: 4px;
  color: white;
  text-align: center;
`;

export default Home;
