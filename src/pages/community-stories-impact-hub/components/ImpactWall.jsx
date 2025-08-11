import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactWall = ({ impactData }) => {
  const impactStats = [
    {
      icon: 'Droplets',
      value: impactData?.totalDonations,
      label: 'Total Donations',
      color: 'text-life-force',
      bgColor: 'bg-red-50'
    },
    {
      icon: 'Heart',
      value: impactData?.livesSaved,
      label: 'Lives Saved',
      color: 'text-success-green',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'Users',
      value: impactData?.activeDonors,
      label: 'Active Donors',
      color: 'text-trust-blue',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'MapPin',
      value: impactData?.locations,
      label: 'Locations Served',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const milestones = [
    {
      id: 1,
      title: "10,000th Donation Milestone",
      description: "Community celebrates reaching 10,000 successful donations",
      date: "December 2024",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      participants: 156
    },
    {
      id: 2,
      title: "Emergency Response Success",
      description: "24-hour emergency drive saves 15 critical patients",
      date: "November 2024",
      image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?w=400&h=300&fit=crop",
      participants: 89
    },
    {
      id: 3,
      title: "Youth Donor Initiative",
      description: "College partnership brings 500 new young donors",
      date: "October 2024",
      image: "https://images.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg?w=400&h=300&fit=crop",
      participants: 234
    }
  ];

  return (
    <div className="space-y-8">
      {/* Impact Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {impactStats?.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-brand text-center card-morph">
            <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
              <Icon name={stat?.icon} size={24} className={stat?.color} />
            </div>
            <div className={`text-2xl font-bold ${stat?.color} counter-animate`}>
              {stat?.value?.toLocaleString()}
            </div>
            <p className="text-sm text-text-secondary font-medium">{stat?.label}</p>
          </div>
        ))}
      </div>
      {/* Community Milestones */}
      <div className="bg-white rounded-2xl p-6 shadow-brand-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-text-primary">Community Milestones</h3>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Trophy" size={16} />
            <span>Recent Achievements</span>
          </div>
        </div>

        <div className="space-y-4">
          {milestones?.map((milestone) => (
            <div key={milestone?.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface transition-colors">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={milestone?.image}
                  alt={milestone?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-text-primary mb-1">{milestone?.title}</h4>
                <p className="text-sm text-text-secondary mb-2">{milestone?.description}</p>
                <div className="flex items-center space-x-4 text-xs text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>{milestone?.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={12} />
                    <span>{milestone?.participants} participants</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} color="white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Ripple Effect Visualization */}
      <div className="bg-gradient-to-br from-life-force/5 to-trust-blue/5 rounded-2xl p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-text-primary mb-4">The Ripple Effect</h3>
          <p className="text-text-secondary mb-6">
            Every donation creates expanding circles of impact through families and communities
          </p>
          
          <div className="relative inline-flex items-center justify-center">
            <div className="w-32 h-32 bg-life-force/10 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-20 h-20 bg-life-force/20 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-life-force rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={24} color="white" />
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-success-green rounded-full flex items-center justify-center animate-bounce">
              <Icon name="Plus" size={16} color="white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-trust-blue rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Icon name="Users" size={16} color="white" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div>
              <div className="text-lg font-bold text-life-force">1 Donor</div>
              <div className="text-sm text-text-secondary">Makes donation</div>
            </div>
            <div>
              <div className="text-lg font-bold text-success-green">3 Recipients</div>
              <div className="text-sm text-text-secondary">Receive help</div>
            </div>
            <div>
              <div className="text-lg font-bold text-trust-blue">12 Family</div>
              <div className="text-sm text-text-secondary">Members impacted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactWall;