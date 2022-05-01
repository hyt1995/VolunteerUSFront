import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import Info from 'pages/auth/Info';

const Home: NextPage = () => {
    return <Register />;
};

export default Home;
