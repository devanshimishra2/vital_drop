import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactPillars = () => {
  const pillars = [
    {
      id: 1,
      icon: "Heart",
      title: "Life-Saving Network",
      description: "Connect donors with recipients in real-time, creating a seamless network of care and compassion.",
      stats: "15,847 Lives Saved",
      color: "life-force",
      bgGradient: "from-red-50 to-red-100"
    },
    {
      id: 2,
      icon: "Users",
      title: "Community Impact",
      description: "Build lasting relationships within our donor community, sharing stories and celebrating heroes.",
      stats: "8,921 Active Donors",
      color: "trust-blue",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      id: 3,
      icon: "Shield",
      title: "Safety & Trust",
      description: "Maintain the highest safety standards with FDA compliance and rigorous quality protocols.",
      stats: "100% Safety Record",
      color: "success-green",
      bgGradient: "from-green-50 to-green-100"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-impact text-text-primary font-bold">
            Three Pillars of Impact
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our mission is built on three fundamental principles that guide every aspect of our life-saving work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars?.map((pillar, index) => (
            <div
              key={pillar?.id}
              className={`relative group card-morph bg-gradient-to-br ${pillar?.bgGradient} rounded-2xl p-8 shadow-brand-lg border border-white/50 hover:shadow-brand-xl transition-all duration-300`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-${pillar?.color} rounded-xl mb-6 shadow-brand`}>
                <Icon name={pillar?.icon} size={32} color="white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-text-primary">
                  {pillar?.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {pillar?.description}
                </p>
                
                <div className={`inline-flex items-center space-x-2 bg-white/80 text-${pillar?.color} px-4 py-2 rounded-full text-sm font-semibold`}>
                  <Icon name="TrendingUp" size={16} />
                  <span>{pillar?.stats}</span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-brand text-text-secondary">
            <Icon name="ArrowRight" size={16} className="text-life-force" />
            <span className="font-medium">Join thousands making a difference every day</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactPillars;