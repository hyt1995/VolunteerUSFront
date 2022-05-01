import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Login from 'pages/auth/login';

const Home: NextPage = () => {
    const a = 1;
    return <Login />;
};

export default Home;
