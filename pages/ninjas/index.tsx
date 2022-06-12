import React from 'react';
import styled from 'styled-components';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

export interface INinjas {
  ninjas: Welcome[];
}

export interface Welcome {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const index: NextPage<INinjas> = ({ ninjas }) => {
  return (
    <NinjasWrapper>
      <h1>All NINJAS</h1>
      {ninjas.map(ninja => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <Single>
            <NinjaName>{ninja.name}</NinjaName>
          </Single>
        </Link>
      ))}
    </NinjasWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const NinjasWrapper = styled.div``;

const NinjaName = styled.h3`
  font-size: 1.4rem;
  padding: 16px 0px;
`;

const Single = styled.a`
  padding: 2px 16px;
  background-color: #fff;
  display: block;
  margin: 20px 0px;
  border-left: 8px solid #fff;
  transition: border-left 100ms ease-out;
  /* cursor: pointer; */
  border-radius: 4px;
  max-width: 400px;

  &:hover {
    border-left: 8px solid gray;
    transition: border-left 250ms ease;
  }
`;

export default index;
