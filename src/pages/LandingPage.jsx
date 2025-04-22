import React from 'react';
import HeaderLanding from '../components/Landing/HeaderLanding';
import HeroLanding from '../components/Landing/HeroLanding';
import FeatureLanding from '../components/Landing/FeatureLanding';
import FooterLanding from '../components/Landing/FooterLanding';

import playlistImage from '../images/SVG/playlist.svg';
import managementImage from '../images/SVG/link-manage.svg';
import filteringImage from '../images/SVG/filtering.svg';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='max-w-screen h-screen bg-[var(--landing-bg-color)]  text-[var(--text-thirdary-color)] font-light'>
        {/* <div className="max-w-4xl mx-auto"> */}
        {/* Header */}
        <HeaderLanding />

        {/* Hero Section */}
        <HeroLanding onSignUp={() => navigate('/signup')} />

        {/* Features */}
        <FeatureLanding
          title='Efficient Link Management'
          description='Our platform helps you save time by keeping all your important links in one place. Stay organized with customizable folders and tags, and enjoy seamless sharing and collaboration tools to enhance your productivity.'
          image={managementImage}
          headerStyle='var(--yellow-color)'
          reverse
        />
        <FeatureLanding
          title='Introducing Link Playlists'
          description='Our Link Playlists feature allows you to group related URLs into organized collections. Whether planning research or simply sharing a list of must-visit websites, Link Playlists offer a seamless way to bundle links together.'
          headerStyle='var(--secondary-color)'
          image={playlistImage}
        />
        <FeatureLanding
          title='Smart Filtering'
          description='Easily find what you need with powerful filtering options. Categorize your links by topics and access them with ease. Stay organized and efficient with customizable filters.'
          image={filteringImage}
          headerStyle='var(--red-color)'
          reverse
        />

        {/* Footer */}
        <FooterLanding />
        {/* </div> */}
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
