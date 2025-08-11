import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ImpactHeroSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    livesSaved: 0,
    donations: 0,
    gallons: 0
  });

  const finalStats = {
    livesSaved: 47,
    donations: 16,
    gallons: 2.1
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedStats({
          livesSaved: Math.floor(finalStats?.livesSaved * easeOut),
          donations: Math.floor(finalStats?.donations * easeOut),
          gallons: parseFloat((finalStats?.gallons * easeOut)?.toFixed(1))
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-life-force via-red-500 to-cta-deep text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full bg-white/15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-white/10 animate-pulse delay-2000"></div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Icon name="Heart" size={32} color="white" className="animate-pulse" />
              </div>
              <div className="text-left">
                <h1 className="text-3xl lg:text-4xl font-bold">Welcome back, Sarah!</h1>
                <p className="text-white/90 text-lg">Your generosity is changing lives</p>
              </div>
            </div>
          </div>

          {/* Impact Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Lives Potentially Saved */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={28} color="white" />
              </div>
              <div className="counter-animate text-4xl lg:text-5xl font-bold mb-2">
                {animatedStats?.livesSaved}
              </div>
              <p className="text-white/90 font-medium text-lg">Lives Potentially Saved</p>
              <p className="text-white/70 text-sm mt-2">Each donation can help up to 3 patients</p>
            </div>

            {/* Total Donations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Droplets" size={28} color="white" />
              </div>
              <div className="counter-animate text-4xl lg:text-5xl font-bold mb-2">
                {animatedStats?.donations}
              </div>
              <p className="text-white/90 font-medium text-lg">Donations Completed</p>
              <p className="text-white/70 text-sm mt-2">Since joining in March 2023</p>
            </div>

            {/* Gallons Donated */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={28} color="white" />
              </div>
              <div className="counter-animate text-4xl lg:text-5xl font-bold mb-2">
                {animatedStats?.gallons}
              </div>
              <p className="text-white/90 font-medium text-lg">Gallons Donated</p>
              <p className="text-white/70 text-sm mt-2">Gallon Club Member!</p>
            </div>
          </div>

          {/* Community Ranking */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <Icon name="Trophy" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Community Ranking</h3>
                  <p className="text-white/80">#7 in your area this year</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">#7</div>
                <p className="text-white/70 text-sm">of 1,247 donors</p>
              </div>
            </div>
          </div>

          {/* Milestone Celebration */}
          <div className="mt-6 bg-gradient-to-r from-success-green to-emerald-600 rounded-2xl p-6 border border-emerald-400/30">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                <Icon name="Star" size={24} color="white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Milestone Achieved!</h3>
                <p className="text-white/90">You've joined the 2-Gallon Club! Share your achievement with friends.</p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                <Icon name="Share2" size={16} color="white" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactHeroSection;