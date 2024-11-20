// components/AboutHome.tsx
import React from 'react';
import HeroLeft from './AboutHome/HeroLeft'; // Assuming you have this component
import HeroRight from './AboutHome/HeroRight'; // Assuming you have this component

const AboutHome: React.FC = () => {
    return (
        <div className="about-home flex flex-col md:flex-row justify-center items-center">
            <div className="hero-container flex justify-center w-full md:w-1/2">
                <HeroLeft />
            </div>
            <div className="hero-right flex justify-center w-full md:w-1/2">
                <HeroRight />
            </div>
        </div>
    );
};

export default AboutHome;