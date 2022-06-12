import React from 'react';
import { Welcome } from '.';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import styled from 'styled-components';

interface INinja {
  ninja: Welcome;
}

const Details = ({ ninja }: INinja) => {
  return (
    <DetailsPageWrapper>
      <Name>{ninja.name}</Name>
      <Email>Email: {ninja.email}</Email>
      <Website>Website: {ninja.website}</Website>
      <Address>City: {ninja.address.city}</Address>
    </DetailsPageWrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      ninja: data,
    },
  };
};

const DetailsPageWrapper = styled.div``;

const Name = styled.h1`
  font-size: 2rem;
`;

const Email = styled.h2`
  color: #777;
`;
const Website = styled.h2`
  color: #777;
`;
const Address = styled.h2`
  color: #777;
`;

export default Details;
