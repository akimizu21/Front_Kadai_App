/**
 * index
 */
import React from 'react';
import Layout from '../layout/Layout';
import Main from '../components/Main/Mian';

/**
 * Home
 * @returns 
 */
const Home: React.FC = () => {
  return (
    <Layout>
      <h1>TodoList</h1>
      <Main/>
    </Layout>  
  )
};

export default Home;
