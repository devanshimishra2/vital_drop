import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [impactStats, setImpactStats] = useState({
    livesSaved: 0,
    donationsCollected: 0,
    activeDonors: 0
  });

  const targetStats = {
    livesSaved: 15847,
    donationsCollected: 52634,
    activeDonors: 8921
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setImpactStats({
          livesSaved: Math.floor(targetStats?.livesSaved * easeOutQuart),
          donationsCollected: Math.floor(targetStats?.donationsCollected * easeOutQuart),
          activeDonors: Math.floor(targetStats?.activeDonors * easeOutQuart)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setImpactStats(targetStats);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleDonateNow = () => {
    navigate('/find-donation-centers-scheduling');
  };

  const handleFindImpact = () => {
    navigate('/personal-impact-dashboard');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-red-50/30 to-blue-50/20 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-life-force/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-life-force/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-life-force/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-life-force/25 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-2.5 h-2.5 bg-life-force/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-life-force/10 text-life-force px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Heart" size={16} className="animate-pulse" />
                <span>Join 8,921+ Active Life Savers</span>
              </div>
              
              <h1 className="text-hero text-life-force font-bold leading-tight">
                Every Drop Counts,<br />
                <span className="text-trust-blue">Every Donor Matters</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed max-w-lg">
                Transform lives with a simple act of generosity. Join our community of heroes making a difference, one donation at a time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Heart"
                iconPosition="left"
                className="cta-magnetic emergency-pulse text-lg px-8 py-4"
                onClick={handleDonateNow}
              >
                Donate Now
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="BarChart3"
                iconPosition="left"
                className="text-lg px-8 py-4 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white"
                onClick={handleFindImpact}
              >
                Find My Impact
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-success-green" />
                <span className="text-sm text-text-secondary font-medium">FDA Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} className="text-success-green" />
                <span className="text-sm text-text-secondary font-medium">Certified Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={20} className="text-success-green" />
                <span className="text-sm text-text-secondary font-medium">Community Trusted</span>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-brand-xl border border-white/50">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-text-primary">Real-Time Impact</h2>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-life-force counter-animate">
                      {impactStats?.livesSaved?.toLocaleString()}
                    </div>
                    <div className="text-text-secondary font-medium">Lives Saved</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-life-force h-2 rounded-full progress-momentum" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-trust-blue counter-animate">
                      {impactStats?.donationsCollected?.toLocaleString()}
                    </div>
                    <div className="text-text-secondary font-medium">Donations Collected</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-trust-blue h-2 rounded-full progress-momentum" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-success-green counter-animate">
                      {impactStats?.activeDonors?.toLocaleString()}
                    </div>
                    <div className="text-text-secondary font-medium">Active Donors</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-success-green h-2 rounded-full progress-momentum" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-text-secondary">
                    Updated live • Last donation: 2 minutes ago
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50">
                <div className="text-2xl font-bold text-life-force">24/7</div>
                <div className="text-sm text-text-secondary">Emergency Response</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50">
                <div className="text-2xl font-bold text-trust-blue">150+</div>
                <div className="text-sm text-text-secondary">Partner Hospitals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;